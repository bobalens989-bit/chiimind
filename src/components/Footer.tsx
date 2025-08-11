import Image from 'next/image'

export default function Footer() {
  const productLinks = [
    '灵感采集',
    '账号监控',
    'AI创作助手'
  ]

  const toolLinks = [
    '千机号插件',
    'AI视频分析',
    'AI账号诊断'
  ]

  const aboutLinks = [
    '关于我们'
  ]

  const socialLinks = [
    { name: 'Instagram', icon: 'https://ext.same-assets.com/976212896/2596674461.png', url: 'https://instagram.com' },
    { name: 'TikTok', icon: 'https://ext.same-assets.com/976212896/1290416364.png', url: 'https://www.tiktok.com' },
    { name: 'YouTube', icon: 'https://ext.same-assets.com/976212896/1922799769.png', url: 'https://youtube.com/' },
    { name: 'X', icon: 'https://ext.same-assets.com/976212896/1935560634.png', url: 'https://x.com' },
    { name: 'LinkedIn', icon: 'https://ext.same-assets.com/976212896/2210596621.png', url: 'https://www.linkedin.com/' },
    { name: 'Discord', icon: 'https://ext.same-assets.com/976212896/3421103736.png', url: 'https://discord.com/' },
    { name: 'Facebook', icon: 'https://ext.same-assets.com/976212896/2366661584.png', url: 'https://www.facebook.com/' },
  ]

  return (
    <footer className="w-full bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="https://ext.same-assets.com/976212896/575345209.png"
                alt="千机号"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold">千机号</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              新一代智能内容生产平台
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">产品</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tool Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">工具</h3>
            <ul className="space-y-3">
              {toolLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and QR Code */}
          <div>
            <h3 className="font-semibold text-white mb-4">联系我们</h3>
            <div className="space-y-4">
              {aboutLinks.map((link) => (
                <div key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </div>
              ))}
              <div className="pt-4">
                <div className="w-24 h-24 bg-white rounded-lg p-2">
                  <Image
                    src="https://ext.same-assets.com/976212896/3614208218.png"
                    alt="QR Code"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
