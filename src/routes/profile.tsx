function Profile() {
    return (
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-12 flex flex-col md:flex-row gap-12">
            {/* 프로필 좌측 영역 */}
            <div className="flex-shrink-0 text-center md:text-left md:w-1/3">
                <img
                src="/images/profile.jpg" // 실제 경로로 교체
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover border-4 border-indigo-500 shadow-md mx-auto md:mx-0"
                />
                <h1 className="mt-6 text-3xl font-bold text-gray-800">Sihoo Park</h1>
                <div className="mt-1 text-xs text-gray-600">
                    <a
                        href="mailto:pelomon73@gmail.com"
                        className="text-indigo-500 hover:underline"
                    >
                        pelomon73@gmail.com
                    </a>
                    <span className="mx-2">|</span>
                    <span>부산기계공업고등학교</span>
                </div>
            </div>

            {/* 내용 우측 영역 */}
            <div className="flex-1">
                {/* About Me */}
                <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
                    About Me
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    fringilla, lectus nec gravida pellentesque, magna justo luctus odio,
                    nec cursus lorem risus vel ligula. Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Id tenetur officia explicabo. Quod voluptatibus nulla 
                    quaerat iure adipisci, unde ratione, hic labore laborum illo temporibus! 
                    Delectus numquam ullam ratione nulla?
                </p>
                </section>

                {/* Skills */}
                <section>
                <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
                    My Skills
                </h2>

                {/* Languages */}
                <div className="mt-6">
                    <h3 className="text-xl font-medium text-gray-700 mb-3">Languages</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                    {["JavaScript", "TypeScript", "Python3"].map((skill) => (
                        <div
                        key={skill}
                        className="bg-indigo-50 text-indigo-700 font-medium rounded-lg px-4 py-2 shadow-sm hover:bg-indigo-100 transition"
                        >
                        {skill}
                        </div>
                    ))}
                    </div>
                </div>

                {/* Frameworks */}
                <div className="mt-8">
                    <h3 className="text-xl font-medium text-gray-700 mb-3">Frameworks</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                    {["React", "Next.js", "Node.js"].map((skill) => (
                        <div
                        key={skill}
                        className="bg-green-50 text-green-700 font-medium rounded-lg px-4 py-2 shadow-sm hover:bg-green-100 transition"
                        >
                        {skill}
                        </div>
                    ))}
                    </div>
                </div>

                {/* Databases */}
                <div className="mt-8">
                    <h3 className="text-xl font-medium text-gray-700 mb-3">Databases</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                    {["MongoDB", "MySQL"].map((skill) => (
                        <div
                        key={skill}
                        className="bg-yellow-50 text-yellow-700 font-medium rounded-lg px-4 py-2 shadow-sm hover:bg-yellow-100 transition"
                        >
                        {skill}
                        </div>
                    ))}
                    </div>
                </div>
                </section>
            </div>
        </div>
    )
}

export default Profile;