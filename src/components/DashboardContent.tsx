'use client'

import { TrendingUp, Users, FileText, Zap, Plus, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function DashboardContent() {
  const stats = [
    {
      title: 'AI生成内容',
      value: '2,847',
      change: '+12.5%',
      changeType: 'positive' as const,
      icon: FileText,
      color: 'bg-blue-500'
    },
    {
      title: '监控账号',
      value: '156',
      change: '+8.2%',
      changeType: 'positive' as const,
      icon: Users,
      color: 'bg-green-500'
    },
    {
      title: '效率提升',
      value: '89%',
      change: '+5.1%',
      changeType: 'positive' as const,
      icon: TrendingUp,
      color: 'bg-purple-500'
    },
    {
      title: 'AI分析次数',
      value: '1,234',
      change: '+23.4%',
      changeType: 'positive' as const,
      icon: Zap,
      color: 'bg-orange-500'
    }
  ]

  const recentProjects = [
    {
      id: 1,
      title: '小红书美妆博主内容策略',
      type: '内容分析',
      status: '进行中',
      lastUpdated: '2小时前',
      progress: 75
    },
    {
      id: 2,
      title: '抖音美食账号监控',
      type: '账号监控',
      status: '已完成',
      lastUpdated: '4小时前',
      progress: 100
    },
    {
      id: 3,
      title: 'AI短视频脚本生成',
      type: 'AI创作',
      status: '草稿',
      lastUpdated: '1天前',
      progress: 30
    }
  ]

  const quickActions = [
    { title: '创建新项目', icon: Plus, color: 'bg-blue-500' },
    { title: 'AI内容生成', icon: Zap, color: 'bg-purple-500' },
    { title: '账号分析', icon: TrendingUp, color: 'bg-green-500' },
    { title: '灵感采集', icon: FileText, color: 'bg-orange-500' }
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-2">欢迎回来，张三!</h2>
        <p className="text-blue-100 mb-6">今天是创作的好日子，让AI助你一臂之力</p>
        <div className="flex flex-wrap gap-4">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="secondary"
              className="bg-white/20 hover:bg-white/30 text-white border-white/30"
            >
              <action.icon className="h-4 w-4 mr-2" />
              {action.title}
            </Button>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <span className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-gray-600 text-sm">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Projects */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">最近项目</h3>
                <Button variant="ghost" size="sm">
                  查看全部
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {recentProjects.map((project) => (
                <div key={project.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">{project.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{project.type}</span>
                      <span>•</span>
                      <span>{project.lastUpdated}</span>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full transition-all"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-500">{project.progress}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === '已完成'
                        ? 'bg-green-100 text-green-800'
                        : project.status === '进行中'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">最新动态</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900">AI分析完成</p>
                    <p className="text-xs text-gray-500">美妆博主账号分析报告已生成</p>
                    <p className="text-xs text-gray-400">2分钟前</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900">新增监控账号</p>
                    <p className="text-xs text-gray-500">@美食达人小李 已添加到监控列表</p>
                    <p className="text-xs text-gray-400">1小时前</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900">内容创作完成</p>
                    <p className="text-xs text-gray-500">AI为您生成了5篇小红书文案</p>
                    <p className="text-xs text-gray-400">3小时前</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900">系统更新</p>
                    <p className="text-xs text-gray-500">新增抖音数据分析功能</p>
                    <p className="text-xs text-gray-400">1天前</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
