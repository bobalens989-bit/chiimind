import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-purple-400 via-purple-500 to-blue-500 gradient-animation rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            立即使用 千机号 AI 开启内容创作
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            用AI驱动内容创作，提高媒体内容生产力
          </p>

          {/* Search Input */}
          <div className="max-w-2xl mx-auto">
            <div className="relative flex items-center">
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="抖音     输入关键词、账号名称、账号链接"
                  className="w-full h-14 pl-6 pr-20 text-gray-900 bg-white border-0 rounded-full text-lg placeholder:text-gray-500 focus:ring-2 focus:ring-white/20"
                />
                <Button
                  size="lg"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-10 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                >
                  <Search className="w-4 h-4 mr-2" />
                  搜索
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
