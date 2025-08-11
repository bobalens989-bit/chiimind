'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import PasswordResetModal from '@/components/PasswordResetModal'

export default function LoginForm() {
  const [activeTab, setActiveTab] = useState('sms')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [verificationCode, setVerificationCode] = useState('')
  const [countryCode, setCountryCode] = useState('+86')
  const [agreed, setAgreed] = useState(false)
  const [showPasswordReset, setShowPasswordReset] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSendVerificationCode = () => {
    // Handle sending verification code
    console.log('Sending verification code to:', countryCode + phone)
  }

  const handleLogin = async () => {
    setIsLoading(true)
    // Simulate login
    setTimeout(() => {
      if (activeTab === 'sms') {
        console.log('SMS Login:', { phone: countryCode + phone, code: verificationCode })
      } else {
        console.log('Password Login:', { phone: countryCode + phone, password })
      }
      setIsLoading(false)
      // Redirect to dashboard
      window.location.href = '/dashboard'
    }, 2000)
  }

  return (
    <div className="w-full max-w-md space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">登录千机号</h2>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="sms" className="text-sm">验证码登录</TabsTrigger>
          <TabsTrigger value="password" className="text-sm">密码登录</TabsTrigger>
        </TabsList>

        <div className="space-y-4">
          {/* Phone Number Input */}
          <div className="flex space-x-2">
            <Select value={countryCode} onValueChange={setCountryCode}>
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+86">+86</SelectItem>
                <SelectItem value="+1">+1</SelectItem>
                <SelectItem value="+44">+44</SelectItem>
                <SelectItem value="+81">+81</SelectItem>
              </SelectContent>
            </Select>
            <Input
              type="tel"
              placeholder="请输入手机号"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1"
            />
          </div>

          <TabsContent value="sms" className="space-y-4 m-0">
            {/* Verification Code Input */}
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="请输入验证码"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                className="flex-1"
              />
              <Button
                type="button"
                variant="outline"
                onClick={handleSendVerificationCode}
                disabled={!phone}
                className="whitespace-nowrap"
              >
                发送验证码
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="password" className="space-y-4 m-0">
            {/* Password Input */}
            <Input
              type="password"
              placeholder="请输入密码"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </TabsContent>

          {/* Login Button */}
          <Button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3"
            disabled={!phone || (!verificationCode && activeTab === 'sms') || (!password && activeTab === 'password') || isLoading}
          >
            {isLoading ? '登录中...' : '登 录'}
          </Button>

          {/* Forgot Password Link - Only show for password tab */}
          {activeTab === 'password' && (
            <div className="text-center">
              <button
                type="button"
                onClick={() => setShowPasswordReset(true)}
                className="text-blue-600 text-sm hover:underline"
              >
                忘记密码？
              </button>
            </div>
          )}

          {/* Terms Agreement */}
          <div className="flex items-start space-x-2">
            <Checkbox
              id="terms"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked as boolean)}
              className="mt-1"
            />
            <label htmlFor="terms" className="text-sm text-gray-600 leading-tight">
              阅读并同意
              <a href="#" className="text-blue-600 mx-1 hover:underline">
                服务协议
              </a>
              和
              <a href="#" className="text-blue-600 ml-1 hover:underline">
                隐私协议
              </a>
            </label>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          {/* Register Link */}
          <div className="text-center">
            <span className="text-gray-500 text-sm mr-2">还没有千机号账号？</span>
            <Link href="/register" className="text-blue-600 text-sm hover:underline">
              立即注册
            </Link>
          </div>
        </div>
      </Tabs>

      {/* Password Reset Modal */}
      <PasswordResetModal
        isOpen={showPasswordReset}
        onClose={() => setShowPasswordReset(false)}
      />
    </div>
  )
}
