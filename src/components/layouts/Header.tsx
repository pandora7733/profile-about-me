function Header() {
    return (
        <header className="bg-purple-600 h-16 w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 shadow-md">
            {/* 로고 섹션 */}
            <div className="flex-shrink-0">
                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
                My App
                </h1>
            </div>

            {/* 내비게이션 및 소셜 링크 */}
            <div className="flex items-center space-x-4 sm:space-x-6">
                <nav>
                <ul className="flex space-x-4 sm:space-x-6 text-sm sm:text-base">
                    <li><a href="#" className="text-white hover:text-purple-200 transition-colors duration-200">Home</a></li>
                    <li><a href="#" className="text-white hover:text-purple-200 transition-colors duration-200">About</a></li>
                    <li><a href="#" className="text-white hover:text-purple-200 transition-colors duration-200">Contact</a></li>
                </ul>
                </nav>

                {/* 소셜 미디어 아이콘 */}
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
            </div>
            </header>
    )
}

export default Header;