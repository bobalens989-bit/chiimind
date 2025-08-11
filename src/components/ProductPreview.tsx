import Image from 'next/image'

export default function ProductPreview() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Dashboard Mockup */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 shadow-2xl hover-lift animate-fade-in">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Simulated Dashboard Interface */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="ml-4 text-sm text-gray-600">千机号 Dashboard</div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Dashboard Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Sidebar */}
                    <div className="lg:col-span-1">
                      <div className="space-y-4">
                        <div className="bg-purple-100 p-4 rounded-lg">
                          <h3 className="font-semibold text-gray-900 mb-2">创作助手</h3>
                          <div className="space-y-2">
                            <div className="text-sm text-gray-600">内容生成</div>
                            <div className="text-sm text-gray-600">账号分析</div>
                            <div className="text-sm text-gray-600">数据监控</div>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h3 className="font-semibold text-gray-900 mb-2">我的项目</h3>
                          <div className="space-y-2">
                            <div className="text-sm text-gray-600">项目 A</div>
                            <div className="text-sm text-gray-600">项目 B</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-2">
                      <div className="space-y-6">
                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600">2,500</div>
                            <div className="text-sm text-gray-600">AI生成内容</div>
                          </div>
                          <div className="bg-green-50 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-green-600">89%</div>
                            <div className="text-sm text-gray-600">效率提升</div>
                          </div>
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-purple-600">156</div>
                            <div className="text-sm text-gray-600">监控账号</div>
                          </div>
                        </div>

                        {/* Content Preview */}
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <h3 className="font-semibold text-gray-900 mb-4">最新内容分析</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                              <div className="w-full h-32 bg-gradient-to-br from-purple-200 to-blue-200 rounded-lg mb-3"></div>
                              <div className="text-sm font-medium text-gray-900">热门视频分析</div>
                              <div className="text-xs text-gray-500">2小时前</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                              <div className="w-full h-32 bg-gradient-to-br from-green-200 to-yellow-200 rounded-lg mb-3"></div>
                              <div className="text-sm font-medium text-gray-900">账号数据报告</div>
                              <div className="text-xs text-gray-500">4小时前</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
