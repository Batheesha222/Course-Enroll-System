import React from 'react'

const Contact = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Contact Us</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-4 text-center">
          Have questions or need assistance? We'd love to hear from you!
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="johndoe@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Write your message here..."
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact