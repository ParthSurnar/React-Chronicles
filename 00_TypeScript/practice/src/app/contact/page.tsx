import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(200)].map((_, i) => (
          <div key={i} 
            className="absolute h-0.5 w-0.5 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl text-white text-center mb-12 font-bold">Contact the Universe</h1>
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8">
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-white">Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Your cosmic name"
                className="w-full p-3 bg-gray-800/50 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-white">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="your@galaxy.com"
                className="w-full p-3 bg-gray-800/50 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-white">Message</label>
              <textarea 
                id="message" 
                placeholder="Send your message across the stars..." 
                rows={5}
                className="w-full p-3 bg-gray-800/50 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg relative overflow-hidden transition-colors"
            >
              Launch Message
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
