import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const socialPlatforms = [
    { name: 'Facebook', logo: 'https://ext.same-assets.com/976212896/2785112564.png' },
    { name: 'Instagram', logo: 'https://ext.same-assets.com/976212896/2596674461.png' },
    { name: '快手', logo: 'https://ext.same-assets.com/976212896/623290483.png' },
    { name: '视频号', logo: 'https://ext.same-assets.com/976212896/3369630142.png' },
    { name: 'TikTok', logo: 'https://ext.same-assets.com/976212896/1290416364.png' },
    { name: '小红书', logo: 'https://ext.same-assets.com/976212896/1827603078.png' },
    { name: 'YouTube', logo: 'https://ext.same-assets.com/976212896/1922799769.png' },
    { name: '抖音', logo: 'https://ext.same-assets.com/976212896/38783979.png' },
  ]

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
          千机号 用AI驱动内容创作
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
          提供爆款视频采集、对标账号监控、AI分析分析和生成的一站式AI生产力平台
        </p>

        {/* Social Media Platforms */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-12 animate-scale-in" style={{animationDelay: '0.4s'}}>
          {socialPlatforms.map((platform, index) => (
            <div
              key={platform.name}
              className="opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer"
              style={{animationDelay: `${0.6 + index * 0.1}s`}}
            >
              <Image
                src={platform.logo}
                alt={platform.name}
                width={40}
                height={40}
                className="w-10 h-10 object-contain animate-bounce-in"
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="animate-slide-up" style={{animationDelay: '1s'}}>
          <Link href="/creatix-ai">
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg rounded-full hover-lift transition-all duration-300"
            >
              开始免费试用 →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
