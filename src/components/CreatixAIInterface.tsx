'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Search,
  BarChart3,
  Lightbulb,
  Monitor,
  Users,
  Package,
  HelpCircle,
  MessageSquare,
  Play,
  BarChart2,
  Video,
  Menu,
  ArrowUp
} from 'lucide-react'

export default function CreatixAIInterface() {
  const [searchQuery, setSearchQuery] = useState('')

  const navigationItems = [
    {
      category: '灵感创意',
      items: [
        { name: 'AI智能分析', icon: BarChart3, active: true, href: '/creatix-ai' },
        { name: '灵感采集', icon: Lightbulb, active: false, href: '/ma-inspire' },
        { name: '账号监控', icon: Monitor, active: false, href: '/monitoring' }
      ]
    },
    {
      category: '团队管理',
      items: [
        { name: '套餐资产', icon: Package, active: false, href: '/assets' }
      ]
    },
    {
      category: '',
      items: [
        { name: '调研中心', icon: HelpCircle, active: false, href: '/research' },
        { name: '问题反馈', icon: MessageSquare, active: false, href: '/feedback' }
      ]
    }
  ]

  const featureCards = [
    {
      title: '灵感采集',
      description: '网页链接/移动端全网内容采集，支持更多AI功能，解构分析，智能仿写等',
      icon: Play,
      color: 'bg-purple-500',
      status: null
    },
    {
      title: '账号监控',
      description: '对竞品账号数据实时监测系统，提供内容传播力、用户画像、互动数据等多维度分析',
      icon: BarChart2,
      color: 'bg-blue-500',
      status: null
    },
    {
      title: '视频去重',
      description: '视频版权智能剪辑，一键消重伪作，高效处理去重完成',
      icon: Video,
      color: 'bg-red-500',
      status: '即将上线'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <img
                src="https://ext.same-assets.com/976212896/3980542872.png"
                alt="千机号"
                className="w-6 h-6"
              />
            </div>
            <span className="text-xl font-bold text-gray-900">千机号</span>
            <Menu className="w-4 h-4 text-gray-400 ml-auto" />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4">
          {navigationItems.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-6">
              {section.category && (
                <div className="px-6 mb-3">
                  <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {section.category}
                  </h3>
                </div>
              )}
              <div className="space-y-1 px-3">
                {section.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    href={item.href}
                    className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      item.active
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className={`w-4 h-4 ${item.active ? 'text-blue-600' : 'text-gray-500'}`} />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* User Profile */}
        <div className="border-t border-gray-100 p-4">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">陈</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">陈小萌</p>
              <div className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-xs text-gray-500">体验版</span>
              </div>
            </div>
          </div>
          <button className="w-full flex items-center justify-center space-x-2 px-3 py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg text-sm font-medium hover:from-purple-600 hover:to-blue-700 transition-all">
            <ArrowUp className="w-4 h-4" />
            <span>升级版本</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-4xl text-center space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
                用AI驱动内容创作
              </h1>
              <p className="text-xl text-gray-600">
                一键完成 <span className="text-gray-900 font-medium">账号分析、视频解构、爆款仿写</span>
              </p>
            </div>

            {/* Search Input */}
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gray-900 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">抖</span>
                    </div>
                    <span className="text-gray-700 font-medium">抖音</span>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="输入关键词、账号名称、账号链接、视频链接搜索"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-16 pl-24 pr-20 text-lg border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                />
                <button className="absolute inset-y-0 right-0 pr-4 flex items-center">
                  <div className="bg-blue-600 hover:bg-blue-700 rounded-xl px-6 py-3 flex items-center space-x-2 transition-colors">
                    <Search className="w-5 h-5 text-white" />
                    <span className="text-white font-medium">搜索</span>
                  </div>
                </button>
              </div>

              {/* DeepSeek Integration Note */}
              <div className="flex items-center justify-center mt-4 space-x-2">
                <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs">⚡</span>
                </div>
                <span className="text-sm text-blue-600 font-medium">已接入DeepSeek-R1满血版</span>
              </div>
            </div>

            {/* More Features Section */}
            <div className="space-y-6">
              <h2 className="text-lg font-medium text-gray-600">更多功能场景</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {featureCards.map((card, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-200 hover:border-gray-200">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${card.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <card.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                          {card.status && (
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                              {card.status}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
