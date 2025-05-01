function Admindashboard() {
  return (
    <div>
        <div className="flex">
            {/* Sidebar */}
            <div className="w-1/4 bg-gray-800 text-white h-screen p-4 scrollbar overflow-y-auto fixed top-0 left-0">
                <h1 className="text-3xl font-bold mb-4">Admin</h1>
                    
                <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
                <ul>
                    <li className="mb-2"><a href="#" className="hover:underline">Dashboard Overview</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Add Blog</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Manage Blogs</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Users</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Dashboard Overview</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Add Blog</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Manage Blogs</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Users</a></li> <li className="mb-2"><a href="#" className="hover:underline">Dashboard Overview</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Add Blog</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Manage Blogs</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Users</a></li> <li className="mb-2"><a href="#" className="hover:underline">Dashboard Overview</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Add Blog</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Manage Blogs</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Users</a></li> <li className="mb-2"><a href="#" className="hover:underline">Dashboard Overview</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Add Blog</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Manage Blogs</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Users</a></li> <li className="mb-2"><a href="#" className="hover:underline">Dashboard Overview</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Add Blog</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Manage Blogs</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Users</a></li> <li className="mb-2"><a href="#" className="hover:underline">Dashboard Overview</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Add Blog</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Manage Blogs</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Users</a></li> <li className="mb-2"><a href="#" className="hover:underline">Dashboard Overview</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Add Blog</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Manage Blogs</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Users</a></li> <li className="mb-2"><a href="#" className="hover:underline">Dashboard Overview</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Add Blog</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Manage Blogs</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Users</a></li> <li className="mb-2"><a href="#" className="hover:underline">Dashboard Overview</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Add Blog</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Manage Blogs</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Users</a></li>
                </ul>
            </div>

            {/* Main Section */}
            <div className="w-3/4 p-6">
                {/* Blog List Table */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-4">Blog List</h2>
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">ID</th>
                                <th className="border border-gray-300 px-4 py-2">Title</th>
                                <th className="border border-gray-300 px-4 py-2">Author</th>
                                <th className="border border-gray-300 px-4 py-2">Created Date</th>
                                <th className="border border-gray-300 px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">1</td>
                                <td className="border border-gray-300 px-4 py-2">Sample Blog</td>
                                <td className="border border-gray-300 px-4 py-2">John Doe</td>
                                <td className="border border-gray-300 px-4 py-2">2023-01-01</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <button className="text-blue-500 hover:underline mr-2">Edit</button>
                                    <button className="text-red-500 hover:underline">Delete</button>
                                </td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>
                </div>

                {/* Add Blog Form */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Add Blog</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Title</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 px-4 py-2 rounded"
                                placeholder="Enter blog title"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Content</label>
                            <textarea
                                className="w-full border border-gray-300 px-4 py-2 rounded"
                                rows="5"
                                placeholder="Enter blog content"
                            ></textarea>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Author</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 px-4 py-2 rounded"
                                placeholder="Enter author name"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
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