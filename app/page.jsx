export default function page() {
  const instituteInfo = {
    name: "Tech Institute",
    description: "Leading platform for tech education and internships",
  };

  const featuredPrograms = [
    { id: 1, name: "Web Development", duration: "3 months", image: "/program1.jpg" },
    { id: 2, name: "Mobile Development", duration: "3 months", image: "/program2.jpg" },
    { id: 3, name: "Data Science", duration: "4 months", image: "/program3.jpg" },
  ];

  const stats = [
    { label: "Active Users", value: "5,000+" },
    { label: "Interns Placed", value: "1,200+" },
    { label: "Partner Companies", value: "500+" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-100 to-purple-200 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-blue-500 mb-4">{instituteInfo.name}</h1>
          <p className="text-xl text-blue-400 mb-8">{instituteInfo.description}</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Join Now
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <h3 className="text-4xl font-bold text-blue-600">{stat.value}</h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Internship Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPrograms.map((program) => (
              <div key={program.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="bg-gray-300 h-48 flex items-center justify-center">
                  <span className="text-gray-500">{program.name}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{program.name}</h3>
                  <p className="text-blue-600 font-semibold">Duration: {program.duration}</p>
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
