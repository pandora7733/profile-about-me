function RoadMap() {
    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-10">Roadmap</h2>

                {/* 스크롤 컨테이너 */}
                <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                <div className="flex flex-nowrap space-x-6">
                    
                    {/* 로드맵 카드 1 */}
                    <div className="inline-block w-80 flex-shrink-0">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-2">Phase 1: Planning</h3>
                        <p className="text-gray-600">
                        Initial concept and market research.
                        </p>
                        <span className="mt-4 inline-block text-sm font-medium text-purple-600">
                        Q1 2025
                        </span>
                    </div>
                    </div>

                    {/* 로드맵 카드 2 */}
                    <div className="inline-block w-80 flex-shrink-0">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-2">Phase 2: Development</h3>
                        <p className="text-gray-600">
                        Core feature development and alpha testing.
                        </p>
                        <span className="mt-4 inline-block text-sm font-medium text-purple-600">
                        Q2 2025
                        </span>
                    </div>
                    </div>

                    {/* 로드맵 카드 3 */}
                    <div className="inline-block w-80 flex-shrink-0">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-2">Phase 3: Launch</h3>
                        <p className="text-gray-600">
                        Public release and marketing campaign.
                        </p>
                        <span className="mt-4 inline-block text-sm font-medium text-purple-600">
                        Q3 2025
                        </span>
                    </div>
                    </div>
                    
                    {/* 로드맵 카드 4 */}
                    <div className="inline-block w-80 flex-shrink-0">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-2">Phase 4: Growth</h3>
                        <p className="text-gray-600">
                        Adding new features and user feedback.
                        </p>
                        <span className="mt-4 inline-block text-sm font-medium text-purple-600">
                        Q4 2025
                        </span>
                    </div>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    )
}

export default RoadMap;