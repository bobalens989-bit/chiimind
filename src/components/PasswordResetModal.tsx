'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface PasswordResetModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PasswordResetModal({ isOpen, onClose }: PasswordResetModalProps) {
  const [step, setStep] = useState(1) // 1: phone, 2: verification, 3: new password
  const [formData, setFormData] = useState({
    phone: '',
    verificationCode: '',
    newPassword: '',
    confirmPassword: ''
  })
  const [countryCode, setCountryCode] = useState('+86')
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSendVerificationCode = () => {
    setIsLoading(true)
    // Simulate sending verification code
    setTimeout(() => {
      setIsLoading(false)
      setStep(2)
    }, 1500)
  }

  const handleVerifyCode = () => {
    setIsLoading(true)
    // Simulate verification
    setTimeout(() => {
      setIsLoading(false)
      setStep(3)
    }, 1500)
  }

  const handleResetPassword = () => {
    if (formData.newPassword !== formData.confirmPassword) {
      alert('密码不匹配')
      return
    }

    setIsLoading(true)
    // Simulate password reset
    setTimeout(() => {
      setIsLoading(false)
      alert('密码重置成功！')
      onClose()
      setStep(1)
      setFormData({ phone: '', verificationCode: '', newPassword: '', confirmPassword: '' })
    }, 2000)
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">重置密码</h3>
              <p className="text-gray-600">请输入您的手机号，我们将发送验证码</p>
            </div>

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
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="flex-1"
              />
            </div>

            <div className="flex space-x-2 pt-4">
              <Button variant="outline" onClick={onClose} className="flex-1">
                取消
              </Button>
              <Button
                onClick={handleSendVerificationCode}
                disabled={!formData.phone || isLoading}
                className="flex-1"
              >
                {isLoading ? '发送中...' : '发送验证码'}
              </Button>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">输入验证码</h3>
              <p className="text-gray-600">
                验证码已发送至 {countryCode} {formData.phone}
              </p>
            </div>

            <Input
              type="text"
              placeholder="请输入6位验证码"
              value={formData.verificationCode}
              onChange={(e) => handleInputChange('verificationCode', e.target.value)}
              maxLength={6}
              className="text-center text-2xl tracking-widest"
            />

            <div className="flex space-x-2 pt-4">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                重新发送
              </Button>
              <Button
                onClick={handleVerifyCode}
                disabled={formData.verificationCode.length !== 6 || isLoading}
                className="flex-1"
              >
                {isLoading ? '验证中...' : '验证'}
              </Button>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">设置新密码</h3>
              <p className="text-gray-600">请设置您的新密码</p>
            </div>

            <Input
              type="password"
              placeholder="请输入新密码（8-20位字符）"
              value={formData.newPassword}
              onChange={(e) => handleInputChange('newPassword', e.target.value)}
            />

            <Input
              type="password"
              placeholder="请确认新密码"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
            />

            <div className="flex space-x-2 pt-4">
              <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                返回
              </Button>
              <Button
                onClick={handleResetPassword}
                disabled={!formData.newPassword || !formData.confirmPassword || isLoading}
                className="flex-1"
              >
                {isLoading ? '重置中...' : '重置密码'}
              </Button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        {renderStep()}
      </DialogContent>
    </Dialog>
  )
}
