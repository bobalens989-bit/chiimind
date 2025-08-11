'use client'

import { useState } from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Checkbox } from '@/components/ui/checkbox'
import {
  User,
  Camera,
  Bell,
  Shield,
  Palette,
  Globe,
  Save,
  Upload,
  Moon,
  Sun
} from 'lucide-react'

export default function ProfileSettings() {
  const { theme, toggleTheme } = useTheme()

  const [profile, setProfile] = useState({
    name: '张三',
    email: 'zhangsan@example.com',
    phone: '+86 138 0013 8000',
    company: '千机号科技',
    position: '内容总监',
    bio: '专注于AI驱动的内容创作，帮助团队提升创作效率',
    timezone: 'Asia/Shanghai',
    language: 'zh-CN'
  })

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    pushNotifications: true,
    weeklyReport: true,
    marketingEmails: false,
    soundEnabled: true,
    autoSave: true
  })

  const [avatar, setAvatar] = useState('/api/placeholder/120/120')
  const [isUploading, setIsUploading] = useState(false)

  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setIsUploading(true)
      // Simulate upload process
      setTimeout(() => {
        const reader = new FileReader()
        reader.onload = (e) => {
          setAvatar(e.target?.result as string)
          setIsUploading(false)
        }
        reader.readAsDataURL(file)
      }, 2000)
    }
  }

  const handleSave = () => {
    console.log('Saving profile:', { profile, preferences })
    // Simulate save
    alert('设置已保存！')
  }

  const toggleDarkMode = () => {
    toggleTheme()
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">个人设置</h1>
          <p className="text-gray-600">管理您的账户信息和偏好设置</p>
        </div>
        <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
          <Save className="h-4 w-4 mr-2" />
          保存设置
        </Button>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile" className="flex items-center space-x-2">
            <User className="h-4 w-4" />
            <span>个人信息</span>
          </TabsTrigger>
          <TabsTrigger value="preferences" className="flex items-center space-x-2">
            <Palette className="h-4 w-4" />
            <span>偏好设置</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center space-x-2">
            <Bell className="h-4 w-4" />
            <span>通知设置</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center space-x-2">
            <Shield className="h-4 w-4" />
            <span>安全设置</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">个人信息</h3>

            {/* Avatar Upload */}
            <div className="flex items-center space-x-6 mb-8">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
                  {avatar ? (
                    <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-12 h-12 text-white" />
                  )}
                </div>
                <label className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <Camera className="h-4 w-4 text-gray-600" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarUpload}
                    className="hidden"
                  />
                </label>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">头像</h4>
                <p className="text-sm text-gray-500 mb-2">支持 JPG、PNG 格式，最大 5MB</p>
                {isUploading && (
                  <div className="flex items-center space-x-2 text-blue-600">
                    <Upload className="h-4 w-4 animate-pulse" />
                    <span className="text-sm">上传中...</span>
                  </div>
                )}
              </div>
            </div>

            {/* Profile Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">姓名</label>
                <Input
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                  placeholder="请输入姓名"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">邮箱</label>
                <Input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                  placeholder="请输入邮箱"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">手机号</label>
                <Input
                  value={profile.phone}
                  onChange={(e) => setProfile({...profile, phone: e.target.value})}
                  placeholder="请输入手机号"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">公司</label>
                <Input
                  value={profile.company}
                  onChange={(e) => setProfile({...profile, company: e.target.value})}
                  placeholder="请输入公司名称"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">职位</label>
                <Input
                  value={profile.position}
                  onChange={(e) => setProfile({...profile, position: e.target.value})}
                  placeholder="请输入职位"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">时区</label>
                <Select value={profile.timezone} onValueChange={(value) => setProfile({...profile, timezone: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Asia/Shanghai">上海 (UTC+8)</SelectItem>
                    <SelectItem value="America/New_York">纽约 (UTC-5)</SelectItem>
                    <SelectItem value="Europe/London">伦敦 (UTC+0)</SelectItem>
                    <SelectItem value="Asia/Tokyo">东京 (UTC+9)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">个人简介</label>
              <textarea
                value={profile.bio}
                onChange={(e) => setProfile({...profile, bio: e.target.value})}
                placeholder="介绍一下您自己..."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">偏好设置</h3>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {theme === 'dark' ? <Moon className="h-5 w-5 text-gray-600" /> : <Sun className="h-5 w-5 text-gray-600" />}
                  <div>
                    <h4 className="font-medium text-gray-900">深色模式</h4>
                    <p className="text-sm text-gray-500">切换到深色主题</p>
                  </div>
                </div>
                <Button
                  variant={theme === 'dark' ? "default" : "outline"}
                  onClick={toggleDarkMode}
                  className="w-20"
                >
                  {theme === 'dark' ? "开启" : "关闭"}
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-gray-600" />
                  <div>
                    <h4 className="font-medium text-gray-900">语言</h4>
                    <p className="text-sm text-gray-500">选择界面语言</p>
                  </div>
                </div>
                <Select value={profile.language} onValueChange={(value) => setProfile({...profile, language: value})}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="zh-CN">简体中文</SelectItem>
                    <SelectItem value="en-US">English</SelectItem>
                    <SelectItem value="ja-JP">日本語</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">自动保存</h4>
                  <p className="text-sm text-gray-500">自动保存编辑内容</p>
                </div>
                <Checkbox
                  checked={preferences.autoSave}
                  onCheckedChange={(checked) => setPreferences({...preferences, autoSave: checked as boolean})}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">音效</h4>
                  <p className="text-sm text-gray-500">启用界面音效</p>
                </div>
                <Checkbox
                  checked={preferences.soundEnabled}
                  onCheckedChange={(checked) => setPreferences({...preferences, soundEnabled: checked as boolean})}
                />
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">通知设置</h3>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">邮件通知</h4>
                  <p className="text-sm text-gray-500">接收重要更新和消息的邮件通知</p>
                </div>
                <Checkbox
                  checked={preferences.emailNotifications}
                  onCheckedChange={(checked) => setPreferences({...preferences, emailNotifications: checked as boolean})}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">推送通知</h4>
                  <p className="text-sm text-gray-500">浏览器推送通知</p>
                </div>
                <Checkbox
                  checked={preferences.pushNotifications}
                  onCheckedChange={(checked) => setPreferences({...preferences, pushNotifications: checked as boolean})}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">周报</h4>
                  <p className="text-sm text-gray-500">每周活动总结邮件</p>
                </div>
                <Checkbox
                  checked={preferences.weeklyReport}
                  onCheckedChange={(checked) => setPreferences({...preferences, weeklyReport: checked as boolean})}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">营销邮件</h4>
                  <p className="text-sm text-gray-500">产品更新和营销信息</p>
                </div>
                <Checkbox
                  checked={preferences.marketingEmails}
                  onCheckedChange={(checked) => setPreferences({...preferences, marketingEmails: checked as boolean})}
                />
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">安全设置</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">修改密码</h4>
                <div className="space-y-4">
                  <Input type="password" placeholder="当前密码" />
                  <Input type="password" placeholder="新密码" />
                  <Input type="password" placeholder="确认新密码" />
                  <Button className="bg-blue-600 hover:bg-blue-700">更新密码</Button>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-medium text-gray-900 mb-2">两步验证</h4>
                <p className="text-sm text-gray-500 mb-4">为您的账户添加额外的安全保护</p>
                <Button variant="outline">启用两步验证</Button>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-medium text-gray-900 mb-2">登录设备</h4>
                <p className="text-sm text-gray-500 mb-4">管理已登录的设备</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">MacBook Pro</p>
                      <p className="text-sm text-gray-500">上海，中国 • 当前设备</p>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">活跃</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">iPhone 15 Pro</p>
                      <p className="text-sm text-gray-500">北京，中国 • 2小时前</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-red-600">移除</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
