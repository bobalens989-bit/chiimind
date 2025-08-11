'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import {
  Users,
  UserPlus,
  Share2,
  FolderOpen,
  MessageCircle,
  Video,
  Settings,
  Crown,
  Shield,
  Eye,
  Edit,
  Trash2,
  Mail,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  MoreVertical,
  Copy,
  Download,
  Star,
  GitBranch
} from 'lucide-react'

export default function TeamCollaboration() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedProject, setSelectedProject] = useState(null)
  const [showInviteModal, setShowInviteModal] = useState(false)

  const teamMembers = [
    {
      id: 1,
      name: '张三',
      email: 'zhangsan@example.com',
      role: 'owner',
      avatar: '/api/placeholder/40/40',
      status: 'online',
      joinDate: '2024-01-15',
      permissions: ['read', 'write', 'admin']
    },
    {
      id: 2,
      name: '李四',
      email: 'lisi@example.com',
      role: 'admin',
      avatar: '/api/placeholder/40/40',
      status: 'online',
      joinDate: '2024-02-01',
      permissions: ['read', 'write']
    },
    {
      id: 3,
      name: '王五',
      email: 'wangwu@example.com',
      role: 'member',
      avatar: '/api/placeholder/40/40',
      status: 'offline',
      joinDate: '2024-02-15',
      permissions: ['read']
    },
    {
      id: 4,
      name: '赵六',
      email: 'zhaoliu@example.com',
      role: 'member',
      avatar: '/api/placeholder/40/40',
      status: 'away',
      joinDate: '2024-03-01',
      permissions: ['read', 'write']
    }
  ]

  const sharedProjects = [
    {
      id: 1,
      name: '美妆品牌内容策略',
      description: '针对年轻女性群体的美妆产品内容营销策略',
      owner: '张三',
      collaborators: 3,
      status: 'active',
      lastUpdate: '2小时前',
      progress: 75,
      category: '营销策略'
    },
    {
      id: 2,
      name: '抖音短视频创作计划',
      description: '美食类短视频内容创作和发布计划',
      owner: '李四',
      collaborators: 2,
      status: 'review',
      lastUpdate: '1天前',
      progress: 90,
      category: '内容创作'
    },
    {
      id: 3,
      name: '小红书种草文案库',
      description: '各类产品种草文案模板和案例收集',
      owner: '王五',
      collaborators: 4,
      status: 'completed',
      lastUpdate: '3天前',
      progress: 100,
      category: '文案库'
    }
  ]

  const recentActivities = [
    {
      id: 1,
      user: '李四',
      action: '更新了项目',
      target: '抖音短视频创作计划',
      time: '10分钟前',
      type: 'update'
    },
    {
      id: 2,
      user: '张三',
      action: '邀请了新成员',
      target: '赵六',
      time: '1小时前',
      type: 'invite'
    },
    {
      id: 3,
      user: '王五',
      action: '完成了任务',
      target: '文案审核',
      time: '2小时前',
      type: 'complete'
    },
    {
      id: 4,
      user: '赵六',
      action: '评论了',
      target: '美妆品牌内容策略',
      time: '3小时前',
      type: 'comment'
    }
  ]

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'owner':
        return <Crown className="h-4 w-4 text-yellow-500" />
      case 'admin':
        return <Shield className="h-4 w-4 text-blue-500" />
      default:
        return <Users className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-500'
      case 'away':
        return 'bg-yellow-500'
      default:
        return 'bg-gray-400'
    }
  }

  const getProjectStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-blue-100 text-blue-800'
      case 'review':
        return 'bg-orange-100 text-orange-800'
      case 'completed':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">团队协作</h1>
          <p className="text-gray-600">管理团队成员和共享项目</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Video className="h-4 w-4 mr-2" />
            开始会议
          </Button>
          <Button onClick={() => setShowInviteModal(true)} className="bg-blue-600 hover:bg-blue-700">
            <UserPlus className="h-4 w-4 mr-2" />
            邀请成员
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">概览</TabsTrigger>
          <TabsTrigger value="projects">共享项目</TabsTrigger>
          <TabsTrigger value="members">团队成员</TabsTrigger>
          <TabsTrigger value="activity">活动记录</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{teamMembers.length}</p>
                  <p className="text-sm text-gray-600">团队成员</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-green-100 rounded-lg">
                  <FolderOpen className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{sharedProjects.length}</p>
                  <p className="text-sm text-gray-600">共享项目</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">156</p>
                  <p className="text-sm text-gray-600">协作消息</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">89%</p>
                  <p className="text-sm text-gray-600">任务完成率</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Projects and Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">最近项目</h3>
              </div>
              <div className="p-6 space-y-4">
                {sharedProjects.slice(0, 3).map((project) => (
                  <div key={project.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">{project.name}</h4>
                      <p className="text-sm text-gray-500">{project.owner} • {project.lastUpdate}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getProjectStatusColor(project.status)}`}>
                      {project.status === 'active' ? '进行中' : project.status === 'review' ? '审核中' : '已完成'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">最近活动</h3>
              </div>
              <div className="p-6 space-y-4">
                {recentActivities.slice(0, 4).map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm text-gray-900">
                        <span className="font-medium">{activity.user}</span> {activity.action}{' '}
                        <span className="font-medium">{activity.target}</span>
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="projects" className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Input placeholder="搜索项目..." className="w-64" />
              <Select defaultValue="all">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全部</SelectItem>
                  <SelectItem value="active">进行中</SelectItem>
                  <SelectItem value="review">审核中</SelectItem>
                  <SelectItem value="completed">已完成</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <FolderOpen className="h-4 w-4 mr-2" />
              创建项目
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {sharedProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{project.name}</h3>
                      <p className="text-sm text-gray-600">{project.description}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">负责人</span>
                      <span className="font-medium">{project.owner}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">协作者</span>
                      <span className="font-medium">{project.collaborators} 人</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">进度</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getProjectStatusColor(project.status)}`}>
                        {project.status === 'active' ? '进行中' : project.status === 'review' ? '审核中' : '已完成'}
                      </span>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Star className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="members" className="space-y-6">
          <div className="flex items-center justify-between">
            <Input placeholder="搜索成员..." className="w-64" />
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                权限设置
              </Button>
              <Button onClick={() => setShowInviteModal(true)} className="bg-blue-600 hover:bg-blue-700">
                <UserPlus className="h-4 w-4 mr-2" />
                邀请成员
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-gray-100">
                  <tr>
                    <th className="text-left p-4 font-medium text-gray-900">成员</th>
                    <th className="text-left p-4 font-medium text-gray-900">角色</th>
                    <th className="text-left p-4 font-medium text-gray-900">状态</th>
                    <th className="text-left p-4 font-medium text-gray-900">加入时间</th>
                    <th className="text-left p-4 font-medium text-gray-900">操作</th>
                  </tr>
                </thead>
                <tbody>
                  {teamMembers.map((member) => (
                    <tr key={member.id} className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="relative">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                              <span className="text-white font-medium">{member.name[0]}</span>
                            </div>
                            <div className={`absolute -bottom-1 -right-1 w-3 h-3 ${getStatusColor(member.status)} rounded-full border-2 border-white`}></div>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{member.name}</p>
                            <p className="text-sm text-gray-500">{member.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          {getRoleIcon(member.role)}
                          <span className="text-sm font-medium capitalize">
                            {member.role === 'owner' ? '所有者' : member.role === 'admin' ? '管理员' : '成员'}
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-gray-600 capitalize">
                          {member.status === 'online' ? '在线' : member.status === 'away' ? '离开' : '离线'}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-gray-600">{member.joinDate}</span>
                      </td>
                      <td className="p-4">
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <MessageCircle className="h-4 w-4" />
                          </Button>
                          {member.role !== 'owner' && (
                            <Button variant="ghost" size="sm">
                              <Settings className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          <div className="flex items-center space-x-4">
            <Select defaultValue="all">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部活动</SelectItem>
                <SelectItem value="update">更新</SelectItem>
                <SelectItem value="invite">邀请</SelectItem>
                <SelectItem value="complete">完成</SelectItem>
                <SelectItem value="comment">评论</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="today">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">今天</SelectItem>
                <SelectItem value="week">本周</SelectItem>
                <SelectItem value="month">本月</SelectItem>
                <SelectItem value="all">全部</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6">
              <div className="space-y-6">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      {activity.type === 'update' && <Edit className="h-4 w-4 text-blue-600" />}
                      {activity.type === 'invite' && <UserPlus className="h-4 w-4 text-green-600" />}
                      {activity.type === 'complete' && <CheckCircle className="h-4 w-4 text-green-600" />}
                      {activity.type === 'comment' && <MessageCircle className="h-4 w-4 text-purple-600" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900">
                        <span className="font-medium">{activity.user}</span> {activity.action}{' '}
                        <span className="font-medium text-blue-600">{activity.target}</span>
                      </p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-sm text-gray-500">{activity.time}</span>
                        <Button variant="ghost" size="sm" className="text-blue-600">
                          查看详情
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Invite Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">邀请团队成员</h3>
            <div className="space-y-4">
              <Input placeholder="请输入邮箱地址" type="email" />
              <Select defaultValue="member">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="member">成员</SelectItem>
                  <SelectItem value="admin">管理员</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowInviteModal(false)}
                >
                  取消
                </Button>
                <Button
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                  onClick={() => {
                    setShowInviteModal(false)
                    alert('邀请已发送！')
                  }}
                >
                  发送邀请
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
