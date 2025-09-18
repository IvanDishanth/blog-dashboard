import React from 'react';

function Admindashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-red-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-gradient-to-b from-purple-700 to-pink-600 text-white h-screen p-6 overflow-y-auto fixed top-16 left-0 z-10 shadow-lg">
          <h1 className="text-2xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-200">
            Admin Dashboard
          </h1>
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="block text-gray-200 hover:text-white hover:bg-pink-700 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Dashboard Overview
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-gray-200 hover:text-white hover:bg-pink-700 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Add Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-gray-200 hover:text-white hover:bg-pink-700 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Manage Blogs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-gray-200 hover:text-white hover:bg-pink-700 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Users
              </a>
            </li>
          </ul>
        </div>

        {/* Main Section */}
        <div className="w-3/4 ml-auto p-8 bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 min-h-screen backdrop-blur-md">
          {/* Blog List Table */}
          <div className="mb-10 bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 shadow-xl rounded-xl p-6 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Blog List</h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-gray-300 dark:border-gray-600 rounded-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-3">ID</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-3">Title</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-3">Author</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-3">Created Date</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">1</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Sample Blog</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">John Doe</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">2023-01-01</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                      <button className="text-blue-500 hover:text-blue-700 mr-2 transition-colors duration-300">Edit</button>
                      <button className="text-red-500 hover:text-red-700 transition-colors duration-300">Delete</button>
                    </td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>

          {/* Add Blog Form */}
          <div className="bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 shadow-xl rounded-xl p-6 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Add Blog</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Title</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 dark:border-gray-600 px-4 py-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-pink-400 dark:bg-gray-700 dark:text-gray-200 transition-all duration-300"
                  placeholder="Enter blog title"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Content</label>
                <textarea
                  className="w-full border border-gray-300 dark:border-gray-600 px-4 py-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-pink-400 dark:bg-gray-700 dark:text-gray-200 transition-all duration-300"
                  rows="5"
                  placeholder="Enter blog content"
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Author</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 dark:border-gray-600 px-4 py-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-pink-400 dark:bg-gray-700 dark:text-gray-200 transition-all duration-300"
                  placeholder="Enter author name"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Add Blog
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admindashboard;
