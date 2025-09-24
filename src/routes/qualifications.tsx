function Qualifications() {
    return (
        <div className="m-10 space-y-8">
            {/* Certificates */}
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <h1 className="text-3xl font-bold border-b-2 border-blue-200 pb-2 mb-3">
                <span className="text-blue-700">Certificates</span>
                </h1>
                <p className="text-gray-700">📜 수료증</p>
            </div>

            {/* Awards */}
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <h1 className="text-3xl font-bold border-b-2 border-blue-200 pb-2 mb-3">
                <span className="text-blue-700">Awards</span>
                </h1>
                <p className="text-gray-700">🏆 상장, 수상내역</p>
            </div>

            {/* Qualifications */}
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <h1 className="text-3xl font-bold border-b-2 border-blue-200 pb-4 mb-4">
                <span className="text-blue-700">Qualifications</span>
                </h1>

                <div className="pl-2 space-y-6">
                {/* IT Qualifications */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 pb-2 flex items-center">
                    💻 IT qualifications
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                    <li>정보처리기능사</li>
                    <li>SQLD</li>
                    <li>리눅스 마스터 2급</li>
                    <li>정보처리 산업기사</li>
                    </ul>
                </div>

                {/* General Qualifications */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 pb-2 flex items-center">
                    📂 General qualifications
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                    <li>컴퓨터 응용 가공 산업기사</li>
                    <li>생산 자동화 기능사</li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
    )
}

export default Qualifications;