'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: '',
    confirmPassword: '',
    verificationCode: ''
  })
  const [countryCode, setCountryCode] = useState('+86')
  const [agreed, setAgreed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSendVerificationCode = () => {
    console.log('Sending verification code to:', countryCode + formData.phone)
  }

  const handleRegister = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert('密码不匹配')
      return
    }

    setIsLoading(true)
    // Simulate registration
    setTimeout(() => {
      console.log('Registration:', { ...formData, countryCode })
      setIsLoading(false)
      // Redirect to login or dashboard
      window.location.href = '/dashboard'
    }, 2000)
  }

  const isFormValid = formData.name && formData.phone && formData.password &&
                     formData.confirmPassword && formData.verificationCode && agreed

  return (
    <div className="w-full max-w-md space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">创建千机号账户</h2>
        <p className="text-gray-600">立即注册，开启AI内容创作之旅</p>
      </div>

      <div className="space-y-4">
        {/* Name Input */}
        <Input
          type="text"
          placeholder="请输入姓名"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          className="h-12"
        />

        {/* Phone Number Input */}
        <div className="flex space-x-2">
          <Select value={countryCode} onValueChange={setCountryCode}>
            <SelectTrigger className="w-20 h-12">
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
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="flex-1 h-12"
          />
        </div>

        {/* Verification Code Input */}
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="请输入验证码"
            value={formData.verificationCode}
            onChange={(e) => handleInputChange('verificationCode', e.target.value)}
            className="flex-1 h-12"
          />
          <Button
            type="button"
            variant="outline"
            onClick={handleSendVerificationCode}
            disabled={!formData.phone}
            className="whitespace-nowrap h-12 px-4"
          >
            发送验证码
          </Button>
        </div>

        {/* Password Input */}
        <Input
          type="password"
          placeholder="设置密码（8-20位字符）"
          value={formData.password}
          onChange={(e) => handleInputChange('password', e.target.value)}
          className="h-12"
        />

        {/* Confirm Password Input */}
        <Input
          type="password"
          placeholder="确认密码"
          value={formData.confirmPassword}
          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
          className="h-12"
        />

        {/* Register Button */}
        <Button
          onClick={handleRegister}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white h-12 text-lg"
          disabled={!isFormValid || isLoading}
        >
          {isLoading ? '注册中...' : '立即注册'}
        </Button>

        {/* Terms Agreement */}
        <div className="flex items-start space-x-2">
          <Checkbox
            id="terms"
            checked={agreed}
            onCheckedChange={(checked) => setAgreed(checked as boolean)}
            className="mt-1"
          />
          <label htmlFor="terms" className="text-sm text-gray-600 leading-tight">
            我已阅读并同意
            <a href="#" className="text-blue-600 mx-1 hover:underline">
              服务协议
            </a>
            和
            <a href="#" className="text-blue-600 ml-1 hover:underline">
              隐私协议
            </a>
          </label>
        </div>

        {/* Login Link */}
        <div className="text-center pt-4 border-t border-gray-200">
          <span className="text-gray-500 text-sm mr-2">已有账户？</span>
          <Link href="/login" className="text-blue-600 text-sm hover:underline">
            立即登录
          </Link>
        </div>
      </div>
    </div>
  )
}
