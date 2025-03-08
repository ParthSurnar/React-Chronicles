import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Extra Page</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-700">
        Extra page content with enhanced styling
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Click 
      </button>
      </div>
    </div>
  )
}

export default page
