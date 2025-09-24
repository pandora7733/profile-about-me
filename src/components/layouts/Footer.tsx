function Footer() {
    return (
        <footer className="text-center bg-gray-100">
            <hr className="border-gray-300 pb-2" />
            <div className="pb-1.5">
                <span className="text-blue-700">Contact Me!</span> &copy; 2025
            </div>
            <div className="flex justify-center items-center gap-3 pb-3">
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
        </footer>
    )
}

export default Footer;