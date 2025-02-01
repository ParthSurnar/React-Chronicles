import NextAuth from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from 'next-auth/providers/github'
import mongoose from 'mongoose'
import User from '@/models/User'
import Payment from '@/models/Payment'

// Database connection function
const connectDB = async () => {
  if (mongoose.connection.readyState === 1) return; // Avoid reconnecting if already connected
  await mongoose.connect("mongodb://127.0.0.1:27017/chai", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export const authoptions = NextAuth({
  providers: [
      
    // OAuth authentication providers...
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    // Code will not execute if you do not have the following environment variables set

    //   AppleProvider({
    //     clientId: process.env.APPLE_ID,
    //     clientSecret: process.env.APPLE_SECRET
    //   }),
    //   FacebookProvider({
    //     clientId: process.env.FACEBOOK_ID,
    //     clientSecret: process.env.FACEBOOK_SECRET
    //   }),
    //   GoogleProvider({
    //     clientId: process.env.GOOGLE_ID,
    //     clientSecret: process.env.GOOGLE_SECRET
    //   }),
    //   // Passwordless / email sign in
    //   EmailProvider({
    //     server: process.env.MAIL_SERVER,
    //     from: 'NextAuth.js <no-reply@example.com>'
    //   }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "github") {
        await connectDB(); // Ensure DB is connected

        const existingUser = await User.findOne({ email: user.email });

        if (!existingUser) {
          const newUser = new User({
            email: user.email,
            username: user.email.split("@")[0], // Extract username before "@"
          });
          await newUser.save();
          user.name = newUser.username;
        } else {
          user.name = existingUser.username;
        }

        return true; // Allow sign-in
      }
      return false; // Deny sign-in for other providers (optional)
    },

    async session({ session }) {
      await connectDB(); // Ensure DB is connected

      const dbUser = await User.findOne({ email: session.user.email });

      if (dbUser) {
        session.user.username = dbUser.username;
      }

      return session;
    },
  },
});

export { authoptions as GET, authoptions as POST };
