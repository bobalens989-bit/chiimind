'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuItems = ['首页', '灵感采集', '账号监控', 'AI助手', '价格', '关于我们']

  return (
    <>
      <header className="w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://ext.same-assets.com/976212896/3980542872.png"
                alt="千机号"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-gray-900">千机号</span>
            </Link>

            {/* Desktop Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  href={item === 'AI助手' ? '/creatix-ai' : item === '灵感采集' ? '/ma-inspire' : '#'}
                  className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-105">
                  登录
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm" className="bg-gray-900 hover:bg-gray-800 text-white transition-all duration-200 hover:scale-105 hover-lift">
                  立即注册
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-slide-up">
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  href={item === 'AI助手' ? '/creatix-ai' : item === '灵感采集' ? '/ma-inspire' : '#'}
                  className="block text-gray-600 hover:text-gray-900 text-base font-medium transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Link href="/login" className="block">
                  <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-gray-900">
                    登录
                  </Button>
                </Link>
                <Link href="/register" className="block">
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                    立即注册
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
