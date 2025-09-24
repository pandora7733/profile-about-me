function Header() {
    return (
        <header className="bg-blue-800 h-14 w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 shadow-md">
            <div className="flex-shrink-0">
                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
                    SIHOO PARK
                </h1>
            </div>
            <div className="flex items-center justify-end flex-grow space-x-4 sm:space-x-6">
                <nav>
                    <ul className="flex space-x-4 sm:space-x-6 text-sm sm:text-base">
                        <li><a href="/" className="text-white hover:text-purple-200 transition-colors duration-200">profile</a></li>
                        <li><a href="/aboutme" className="text-white hover:text-purple-200 transition-colors duration-200">About</a></li>
                        <li><a href="/project" className="text-white hover:text-purple-200 transition-colors duration-200">project</a></li>
                        <li><a href="/qualifications" className="text-white hover:text-purple-200 transition-colors duration-200">qualifications</a></li>
                        <li><a href="/OverseasTraining" className="text-white hover:text-purple-200 transition-colors duration-200">overseas training</a></li>
                        <li><a href="/RoadMap" className="text-white hover:text-purple-200 transition-colors duration-200">road map</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;