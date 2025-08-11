'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'

export interface Notification {
  id: string
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  timestamp: Date
  read: boolean
  action?: {
    label: string
    url: string
  }
}

interface NotificationContextType {
  notifications: Notification[]
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => void
  markAsRead: (id: string) => void
  markAllAsRead: () => void
  removeNotification: (id: string) => void
  unreadCount: number
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'AI分析完成',
      message: '您的美妆博主账号分析报告已生成',
      type: 'success',
      timestamp: new Date(Date.now() - 2 * 60000), // 2 minutes ago
      read: false,
      action: { label: '查看报告', url: '/dashboard/analytics' }
    },
    {
      id: '2',
      title: '新增监控账号',
      message: '@美食达人小李 已添加到监控列表',
      type: 'info',
      timestamp: new Date(Date.now() - 60 * 60000), // 1 hour ago
      read: false,
      action: { label: '查看详情', url: '/dashboard/monitoring' }
    },
    {
      id: '3',
      title: '内容创作完成',
      message: 'AI为您生成了5篇小红书文案',
      type: 'success',
      timestamp: new Date(Date.now() - 3 * 60 * 60000), // 3 hours ago
      read: true,
      action: { label: '查看内容', url: '/dashboard/ai-assistant' }
    }
  ])

  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id))
  }, [])

  const addNotification = useCallback((notificationData: Omit<Notification, 'id' | 'timestamp' | 'read'>) => {
    const newNotification: Notification = {
      ...notificationData,
      id: Date.now().toString(),
      timestamp: new Date(),
      read: false
    }

    setNotifications(prev => [newNotification, ...prev])

    // Auto-remove after 10 seconds for non-persistent notifications
    if (notificationData.type === 'success' || notificationData.type === 'info') {
      setTimeout(() => {
        removeNotification(newNotification.id)
      }, 10000)
    }
  }, [removeNotification])

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    )
  }

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, read: true }))
    )
  }

  const unreadCount = notifications.filter(n => !n.read).length

  // Simulate real-time notifications
  useEffect(() => {
    const interval = setInterval(() => {
      const randomNotifications = [
        { title: '系统更新', message: '新功能已上线，快来体验吧！', type: 'info' as const },
        { title: '数据同步完成', message: '您的账号数据已同步更新', type: 'success' as const },
        { title: '限时优惠', message: '会员升级享受8折优惠', type: 'warning' as const },
      ]

      if (Math.random() > 0.8) { // 20% chance every interval
        const randomNotification = randomNotifications[Math.floor(Math.random() * randomNotifications.length)]
        addNotification(randomNotification)
      }
    }, 30000) // Every 30 seconds

    return () => clearInterval(interval)
  }, [addNotification])

  return (
    <NotificationContext.Provider value={{
      notifications,
      addNotification,
      markAsRead,
      markAllAsRead,
      removeNotification,
      unreadCount
    }}>
      {children}
    </NotificationContext.Provider>
  )
}

export function useNotifications() {
  const context = useContext(NotificationContext)
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider')
  }
  return context
}
