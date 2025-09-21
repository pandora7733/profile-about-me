import React from 'react';

const SideBar: React.FC = () => {
  return (
    <aside className="w-64 h-screen bg-gray-100 shadow-md p-4">
      <section className="flex items-center justify-between p-2">
        {/* '햄버거' 아이콘을 나타내는 div들 */}
        <div className="space-y-1 cursor-pointer">
          <div className="w-6 h-1 bg-gray-600 rounded"></div>
          <div className="w-6 h-1 bg-gray-600 rounded"></div>
          <div className="w-6 h-1 bg-gray-600 rounded"></div>
        </div>
      </section>
      
      <ul className="mt-8">
        <li>
          <a href="#" className="flex items-center text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors duration-200">
            <i className="fa-solid fa-cat mr-2"></i> menu1
          </a>
          <ul className="pl-6 mt-2 space-y-1">
            <li><a href="#" className="block text-gray-600 hover:text-gray-900">text1</a></li>
            <li><a href="#" className="block text-gray-600 hover:text-gray-900">text2</a></li>
            <li><a href="#" className="block text-gray-600 hover:text-gray-900">text3</a></li>
            <li><a href="#" className="block text-gray-600 hover:text-gray-900">text4</a></li>
          </ul>
        </li>
        <li>
          <a href="#" className="flex items-center text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors duration-200">
            <i className="fa-solid fa-code mr-2"></i> menu2
          </a>
          <ul className="pl-6 mt-2 space-y-1">
            <li><a href="#" className="block text-gray-600 hover:text-gray-900">text1</a></li>
            <li><a href="#" className="block text-gray-600 hover:text-gray-900">text2</a></li>
            <li><a href="#" className="block text-gray-600 hover:text-gray-900">text3</a></li>
            <li><a href="#" className="block text-gray-600 hover:text-gray-900">text4</a></li>
          </ul>
        </li>
        <li>
          <a href="#" className="flex items-center text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors duration-200">
            <i className="fa-solid fa-user mr-2"></i> menu3
          </a>
          <ul className="pl-6 mt-2 space-y-1">
            <li><a href="#" className="block text-gray-600 hover:text-gray-900">text1</a></li>
            <li><a href="#" className="block text-gray-600 hover:text-gray-900">text2</a></li>
            <li><a href="#" className="block text-gray-600 hover:text-gray-900">text3</a></li>
            <li><a href="#" className="block text-gray-600 hover:text-gray-900">text4</a></li>
          </ul>
        </li>
        <li>
          <a href="#" className="flex items-center text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors duration-200">
            <i className="fa-solid fa-medal mr-2"></i> menu4
          </a>
          <ul className="pl-6 mt-2 space-y-1">
            <li><a href="#" className="block text-gray-600 hover:text-gray-900">text1</a></li>
            <li><a href="#" className="block text-gray-600 hover:text-gray-900">text2</a></li>
            <li><a href="#" className="block text-gray-600 hover:text-gray-900">text3</a></li>
            <li><a href="#" className="block text-gray-600 hover:text-gray-900">text4</a></li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;