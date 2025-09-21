function Header() {
    return (
        <header className="bg-purple-600 h-14 w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 shadow-md">
            <div className="flex-shrink-0">
                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
                    SIHOO PARK
                </h1>
            </div>
            <div className="flex items-center justify-center flex-grow space-x-4 sm:space-x-6">
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
            <div className="flex space-x-3">
                <a href="https://www.instagram.com/bmt._.psh/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-200 transition-colors duration-200">
                    <img src="/images/instargram-mark.svg" alt="Instagram" width={24} height={24} />
                </a>
                <a href="https://github.com/pandora7733" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-200 transition-colors duration-200">
                    <img src="/github-mark/github-mark.svg" alt="GitHub" width={24} height={24} />
                </a>
                <a href="https://www.linkedin.com/in/sihoo-park-89541431b/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-200 transition-colors duration-200">
                    <img src="/images/linkedin-mark.svg" alt="LinkedIn" width={24} height={24} />
                </a>
            </div>
        </header>
    )
}

export default Header;