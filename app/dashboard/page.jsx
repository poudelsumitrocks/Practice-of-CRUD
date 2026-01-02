
const Page = () => {
  return (
    <div className=" h-screen ">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-600 mb-6">
        Welcome to your dashboard! Here you can manage users, internships, and other resources.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="font-semibold text-lg">Users</h2>
          <p className="text-gray-500">View and manage all users.</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="font-semibold text-lg">Internships</h2>
          <p className="text-gray-500">Check internship applications and status.</p>
        </div>
      </div>
    </div>
  );
};

export default Page;