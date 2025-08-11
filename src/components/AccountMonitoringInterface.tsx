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
  Menu,
  ArrowUp,
  Plus
} from 'lucide-react'

export default function AccountMonitoringInterface() {
  const navigationItems = [
    {
      category: '灵感创意',
      items: [
        { name: 'AI智能分析', icon: BarChart3, active: false, href: '/creatix-ai' },
        { name: '灵感采集', icon: Lightbulb, active: false, href: '/ma-inspire' },
        { name: '账号监控', icon: Monitor, active: true, href: '/account-monitoring' }
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
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">账号监控</h1>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="w-4 h-4" />
                <span className="text-sm">添加账号</span>
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="搜索账号名称或分类"
              className="w-full h-12 pl-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <Search className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">开始监控您的第一个账号</h3>
            <p className="text-gray-600 mb-6">添加您想要监控的社交媒体账号，获取详细的数据分析和洞察。</p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              添加账号
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
