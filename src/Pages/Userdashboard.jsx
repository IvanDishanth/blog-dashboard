import React from 'react';

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
    {
      id: 6,
      title: "Advanced JavaScript Concepts",
      content: "In this post, we will explore advanced JavaScript concepts...",
      author: "David Green",
      date: "2023-06-25",
    },
    {
      id: 7,
      title: "Building Responsive Websites",
      content: "Responsive design is crucial for modern web development...",
      author: "Eva Black",
      date: "2023-07-30",
    },
    {
      id: 8,
      title: "Introduction to TypeScript",
      content: "TypeScript is a superset of JavaScript that adds static typing...",
      author: "Frank Blue",
      date: "2023-08-15",
    },
    {
      id: 9,
      title: "Understanding RESTful APIs",
      content: "RESTful APIs are a standard way to build web services...",
      author: "Grace Yellow",
      date: "2023-09-10",
    },
    {
      id: 10,
      title: "Best Practices for Web Security",
      content: "Web security is a critical aspect of web development...",
      author: "Henry Purple",
      date: "2023-10-01",
    },
    {
      id: 11,
      title: "Exploring GraphQL",
      content: "GraphQL is a query language for APIs...",
      author: "Ivy Orange",
      date: "2023-10-15",
    },
    {
      id: 12,
      title: "Introduction to Docker",
      content: "Docker is a platform for developing, shipping, and running applications...",
      author: "Jack Pink",
      date: "2023-10-20",
    },
    {
      id: 13,
      title: "Understanding Web Accessibility",
      content: "Web accessibility ensures that websites are usable by everyone...",
      author: "Kathy Gray",
      date: "2023-10-25",
    },
    {
      id: 14,
      title: "Building Progressive Web Apps",
      content: "Progressive Web Apps (PWAs) are web applications that offer a native app-like experience...",
      author: "Leo Cyan",
      date: "2023-10-30",
    },
    {
      id: 15,
      title: "Introduction to Cloud Computing",
      content: "Cloud computing is the delivery of computing services over the internet...",
      author: "Mia Teal",
      date: "2023-11-05",
    },
    {
      id: 16,
      title: "Understanding DevOps",
      content: "DevOps is a set of practices that combines software development and IT operations...",
      author: "Nina Indigo",
      date: "2023-11-10",
    },
    {
      id: 17,
      title: "Exploring Machine Learning",
      content: "Machine learning is a subset of artificial intelligence...",
      author: "Oscar Violet",
      date: "2023-11-15",
    },
    {
      id: 18,
      title: "Introduction to Blockchain",
      content: "Blockchain is a distributed ledger technology...",
      author: "Paula Brown",
      date: "2023-11-20",
    },
    {
      id: 19,
      title: "Understanding Cybersecurity",
      content: "Cybersecurity is the practice of protecting systems and networks from digital attacks...",
      author: "Quinn Silver",
      date: "2023-11-25",
    },
    {
      id: 20,
      title: "Building Scalable Applications",
      content: "Scalability is the ability of a system to handle a growing amount of work...",
      author: "Ryan Gold",
      date: "2023-11-30",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-red-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-center mb-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:text-white">
          User Dashboard
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1 bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 rounded-xl shadow-lg p-6 backdrop-blur-md">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Categories</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 cursor-pointer transition-colors duration-300">React</li>
              <li className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 cursor-pointer transition-colors duration-300">JavaScript</li>
              <li className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 cursor-pointer transition-colors duration-300">CSS</li>
              <li className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 cursor-pointer transition-colors duration-300">Node.js</li>
              <li className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 cursor-pointer transition-colors duration-300">Web Development</li>
            </ul>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Search</h3>
            <input
              type="text"
              placeholder="Search blog posts..."
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-4 focus:ring-pink-400 dark:bg-gray-700 dark:text-gray-200 transition-all duration-300"
            />
          </aside>

          <main className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 backdrop-blur-md transform hover:scale-105"
                >
                  <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">{post.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{post.content.substring(0, 100)}...</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span><strong>Author:</strong> {post.author}</span>
                    <span><strong>Date:</strong> {post.date}</span>
                  </div>
                  <button
                    onClick={() => alert(`Read more about: ${post.title}`)}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Userdashboard;
