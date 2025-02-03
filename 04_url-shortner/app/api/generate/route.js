import clientPromise from "@/lib/mongodb"

export async function POST(request) {
    try {

        // Check if the request body exists
        if (request.headers.get('Content-Type') !== 'application/json') {
            return new Response(
                JSON.stringify({
                    success: false,
                    error: true,
                    message: 'Content-Type must be application/json',
                }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        const body = await request.json();

        // Check if body is empty or if it has the required fields
        if (!body || !body.url || !body.shorturl) {
            return new Response(
                JSON.stringify({
                    success: false,
                    error: true,
                    message: 'Missing url or shorturl in the request body',
                }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        // Check if the short URL already exists
        const client = await clientPromise.catch(err => {
            console.error('Failed to connect to MongoDB:', err);
            return new Response(
                JSON.stringify({
                    success: false,
                    error: true,
                    message: 'Failed to connect to the database',
                }),
                {
                    status: 500,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        });

        if (!client) return;
        const db = client.db("BitLinks");
        const collection = db.collection("url");
        const existing = await collection.findOne({ shorturl: body.shorturl });
        if (existing) {
            return new Response(
                JSON.stringify({
                    success: false,
                    error: true,
                    message: 'Short URL already exists',
                }),
                {
                    status: 409,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        // Insert the URL and short URL into the database
        await collection.insertOne({
            url: body.url,
            shorturl: body.shorturl,
        });

        // Return success response
        return new Response(
            JSON.stringify({
                success: true,
                error: false,
                message: 'URL Generated Successfully',
            }),
            {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    } catch (error) {
        console.error('Error:', error);
        return new Response(
            JSON.stringify({
                success: false,
                error: true,
                message: 'Error generating URL: ' + error.message,
            }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}
