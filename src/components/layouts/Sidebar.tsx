function SideBar () {
  return (
    <aside className="w-64 h-screen bg-gray-100 shadow-md p-4">
      <section className="flex items-center justify-between p-2">
        <div className="space-y-1 cursor-pointer">
          <div className="w-6 h-1 bg-gray-600 rounded"></div>
          <div className="w-6 h-1 bg-gray-600 rounded"></div>
          <div className="w-6 h-1 bg-gray-600 rounded"></div>
        </div>
      </section>
      
      <ul className="mt-8">
        <li>
          <a href="/profile" className="flex items-center text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors duration-200">
            <i className="fa-solid fa-cat mr-2"></i> profile
          </a>
        </li>
        <li>
          <a href="/aboutme" className="flex items-center text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors duration-200">
            <i className="fa-solid fa-user mr-2"></i> about me
          </a>
        </li>
        <li>
          <a href="/project" className="flex items-center text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors duration-200">
            <i className="fa-solid fa-code mr-2"></i> project
          </a>
        </li>
        <li>
          <a href="/qualifications" className="flex items-center text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors duration-200">
            <i className="fa-solid fa-medal mr-2"></i> qualifications
          </a>
        </li>
        <li>
          <a href="/OverseasTraining" className="flex items-center text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors duration-200">
            <i className="fa-solid fa-medal mr-2"></i> overseas training
          </a>
        </li>
        <li>
          <a href="/TimeLoad" className="flex items-center text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors duration-200">
            <i className="fa-solid fa-medal mr-2"></i> road map
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;