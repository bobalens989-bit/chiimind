'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useNotifications } from '@/contexts/NotificationContext'
import NotificationDropdown from '@/components/NotificationDropdown'
import {
  LayoutDashboard,
  Lightbulb,
  Monitor,
  Wand2,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  User,
  Users
} from 'lucide-react'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [notificationOpen, setNotificationOpen] = useState(false)
  const { unreadCount } = useNotifications()

  const sidebarItems = [
    { icon: LayoutDashboard, label: '仪表板', href: '/dashboard', active: true },
    { icon: Lightbulb, label: '灵感采集', href: '/dashboard/inspiration' },
    { icon: Monitor, label: '账号监控', href: '/dashboard/monitoring' },
    { icon: Wand2, label: 'AI创作助手', href: '/dashboard/ai-assistant' },
    { icon: BarChart3, label: '数据分析', href: '/dashboard/analytics' },
    { icon: Users, label: '团队协作', href: '/dashboard/team' },
    { icon: Settings, label: '个人设置', href: '/dashboard/profile' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out z-30 lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="https://ext.same-assets.com/976212896/3980542872.png"
                alt="千机号"
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-gray-900">千机号</span>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {sidebarItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  item.active
                    ? 'bg-blue-50 text-blue-600 border border-blue-200'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">张三</p>
                <p className="text-sm text-gray-500">专业版用户</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="w-full justify-start text-gray-600">
              <LogOut className="h-4 w-4 mr-2" />
              退出登录
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <h1 className="text-2xl font-semibold text-gray-900">仪表板</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative"
                  onClick={() => setNotificationOpen(!notificationOpen)}
                >
                  <Bell className="h-5 w-5" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {unreadCount > 9 ? '9+' : unreadCount}
                    </span>
                  )}
                </Button>
                <NotificationDropdown
                  isOpen={notificationOpen}
                  onClose={() => setNotificationOpen(false)}
                />
              </div>
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
