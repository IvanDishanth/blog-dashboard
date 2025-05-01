function Userdashboard() {
    const blogPosts = [
      {
        id: 1,
        title: "Understanding React",
        content: "React is a JavaScript library for building user interfaces...",
        author: "John Doe",
        date: "2023-01-01",
      },
      {
        id: 2,
        title: "JavaScript Tips and Tricks",
        content: "JavaScript is a versatile programming language...",
        author: "Jane Smith",
        date: "2023-02-15",
      },
      {
        id: 3,
        title: "CSS for Beginners",
        content: "CSS is used to style HTML elements...",
        author: "Alice Johnson",
        date: "2023-03-10",
      },
      {
        id: 4,
        title: "Understanding Node.js",
        content: "Node.js is a runtime environment for executing JavaScript...",
        author: "Bob Brown",
        date: "2023-04-05",
      },
      {
        id: 5,
        title: "Web Development Trends in 2023",
        content: "Web development is constantly evolving...",
        author: "Charlie White",
        date: "2023-05-20",
      },
    ];
  
    return (
        
        
            <div className="p-6 bg-gray-100 min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">User Dashboard</h1>
                <p className="text-center text-gray-600 mb-8">Welcome to your dashboard!</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
                    {blogPosts.map((post) => (
                    <div key={post.id}className="bg-white rounded-lg shadow-md p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 transition-shadow">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                        <p className="text-gray-600 mb-4">{post.content.substring(0, 100)}...</p>
                        <p className="text-sm text-gray-500"><strong>Author:</strong> {post.author}</p>
                        <p className="text-sm text-gray-500 mb-4"><strong>Date:</strong> {post.date}</p>
                        <button onClick={() => alert(`Read more about: ${post.title}`)}className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Read More</button>
                    </div>
                ))}
                </div>
                <aside className="bg-white rounded-lg shadow-md p-6 fixed top-16 right-4 w-1/4">
                <h3 className="text-lg font-semibold text-red-800 mb-4">Categories</h3>
                <ul className="space-y-2 mb-6">
                    <li className="text-gray-600 hover:text-gray-800 cursor-pointer">React</li>
                    <li className="text-gray-600 hover:text-gray-800 cursor-pointer">JavaScript</li>
                    <li className="text-gray-600 hover:text-gray-800 cursor-pointer">CSS</li>
                    <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Node.js</li>
                    <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Web Development</li>
                </ul>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Search</h3>
                <input type="text"placeholder="Search blog posts..."className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </aside>
            </div>
    
    );
  }
  
  export default Userdashboard;