'use client'

import { useState, useEffect } from 'react'

interface ContentCard {
  id: number
  creator: string
  verified: boolean
  followers: string
  region: string
  publishTime: string
  thumbnail: string
  title: string
  duration: string
  views: string
  likes: string
  comments: string
  shares: string
  systemStatus: string
  platform: string
  contentType: string
  publishDate: Date
  materialType: string
  videoUrl: string
}
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
  Smartphone,
  Download,
  Heart,
  MessageCircle,
  Share,
  Eye,
  ChevronDown,
  Play
} from 'lucide-react'

export default function MAInspireInterface() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPlatform, setSelectedPlatform] = useState('全部')
  const [selectedContentType, setSelectedContentType] = useState('全部')
  const [selectedTimeRange, setSelectedTimeRange] = useState('全部')
  const [selectedMaterialType, setSelectedMaterialType] = useState('全部')
  const [filteredContent, setFilteredContent] = useState<ContentCard[]>([])
  const [selectedVideo, setSelectedVideo] = useState<ContentCard | null>(null)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const navigationItems = [
    {
      category: '灵感创意',
      items: [
        { name: 'AI智能分析', icon: BarChart3, active: false, href: '/creatix-ai' },
        { name: '灵感采集', icon: Lightbulb, active: true, href: '/ma-inspire' },
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

  const platformFilters = [
    { name: '全部', active: true },
    { name: 'TikTok', icon: '🎵' },
    { name: 'Facebook', icon: '📘' },
    { name: '抖音', icon: '🎵' },
    { name: '小红书', icon: '📕' },
    { name: '视频号', icon: '📱' },
    { name: 'Instagram', icon: '📷' },
    { name: 'YouTube', icon: '▶️' }
  ]

  const contentTypeFilters = [
    { name: '全部', active: true },
    { name: '复用脚本结构', active: false },
    { name: '拍摄视角素材', active: false },
    { name: '短视频门禁款', active: false }
  ]

  const timeRangeFilters = [
    { name: '全部', active: true },
    { name: '今日', active: false },
    { name: '近7日', active: false },
    { name: '近14日', active: false },
    { name: '近30日', active: false },
    { name: '自定义', active: false, hasDropdown: true }
  ]

  const materialTypeFilters = [
    { name: '全部', active: true },
    { name: '广告素材', active: false },
    { name: '自然流素材', active: false }
  ]

  const allContentCards: ContentCard[] = [
    {
      id: 1,
      creator: 'The Dana T.',
      verified: true,
      followers: '11.5K',
      region: '美国',
      publishTime: '2个月前发布',
      thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=600&fit=crop',
      title: '#creatorsearchinsights I used to sp...',
      duration: '00:26',
      views: '636.6K',
      likes: '28.5K',
      comments: '98',
      shares: '752',
      systemStatus: '系统示例',
      platform: 'TikTok',
      contentType: '复用脚本结构',
      publishDate: new Date('2024-06-01'),
      materialType: '广告素材',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_720x480_1mb.mp4'
    },
    {
      id: 2,
      creator: 'Jeffree Star',
      verified: true,
      followers: '7.9M',
      region: '美国',
      publishTime: '2个月前发布',
      thumbnail: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=600&fit=crop',
      title: 'Is the VIRAL @NYX Professional Ma...',
      duration: '03:18',
      views: '11.5M',
      likes: '142.1K',
      comments: '1.09K',
      shares: '5.47K',
      systemStatus: '系统示例',
      platform: 'YouTube',
      contentType: '拍摄视角素材',
      publishDate: new Date('2024-06-05'),
      materialType: '自然流素材',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_720x480_2mb.mp4'
    },
    {
      id: 3,
      creator: 'anamaria',
      verified: true,
      followers: '16K',
      region: '美国',
      publishTime: '2个月前发布',
      thumbnail: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&h=600&fit=crop',
      title: "can't wait for summer beach trips ...",
      duration: '00:10',
      views: '949K',
      likes: '10.2K',
      comments: '136',
      shares: '2.69K',
      systemStatus: '系统示例',
      platform: '抖音',
      contentType: '短视频门禁款',
      publishDate: new Date('2024-06-10'),
      materialType: '广告素材',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_720x480_1mb.mp4'
    },
    {
      id: 4,
      creator: 'Mama Aub',
      verified: true,
      followers: '46.3K',
      region: '美国',
      publishTime: '2个月前发布',
      thumbnail: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=600&fit=crop',
      title: 'This is seriously the best little baby ...',
      duration: '00:50',
      views: '113.3K',
      likes: '2.63K',
      comments: '9',
      shares: '244',
      systemStatus: '系统示例',
      platform: 'Instagram',
      contentType: '复用脚本结构',
      publishDate: new Date('2024-06-15'),
      materialType: '自然流素材',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_720x480_2mb.mp4'
    },
    {
      id: 5,
      creator: 'Gonzalo C.',
      verified: true,
      followers: '2.2M',
      region: '美国',
      publishTime: '2个月前发布',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
      title: 'Camisas de vestir que utilizo básica...',
      duration: '00:46',
      views: '815.9K',
      likes: '6.57K',
      comments: '114',
      shares: '1.18K',
      systemStatus: '系统示例',
      platform: 'Facebook',
      contentType: '拍摄视角素材',
      publishDate: new Date('2024-06-20'),
      materialType: '广告素材',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_720x480_1mb.mp4'
    },
    {
      id: 6,
      creator: '小红书达人',
      verified: true,
      followers: '89.2K',
      region: '中国',
      publishTime: '1个月前发布',
      thumbnail: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=600&fit=crop',
      title: '夏日穿搭分享｜这样搭配超显瘦',
      duration: '01:15',
      views: '2.1M',
      likes: '89.5K',
      comments: '2.3K',
      shares: '12.8K',
      systemStatus: '系统示例',
      platform: '小红书',
      contentType: '短视频门禁款',
      publishDate: new Date('2024-07-01'),
      materialType: '自然流素材',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_720x480_2mb.mp4'
    },
    {
      id: 7,
      creator: '视频号创作者',
      verified: true,
      followers: '156K',
      region: '中国',
      publishTime: '3周前发布',
      thumbnail: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=600&fit=crop',
      title: '美食探店｜这家烤肉真的绝了！',
      duration: '02:30',
      views: '567K',
      likes: '23.1K',
      comments: '789',
      shares: '3.2K',
      systemStatus: '系统示例',
      platform: '视频号',
      contentType: '复用脚本结构',
      publishDate: new Date('2024-07-15'),
      materialType: '广告素材',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_720x480_1mb.mp4'
    }
  ]

  // Filter content based on selected filters
  useEffect(() => {
    let filtered = allContentCards

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.creator.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Filter by platform
    if (selectedPlatform !== '全部') {
      filtered = filtered.filter(item => item.platform === selectedPlatform)
    }

    // Filter by content type
    if (selectedContentType !== '全部') {
      filtered = filtered.filter(item => item.contentType === selectedContentType)
    }

    // Filter by material type
    if (selectedMaterialType !== '全部') {
      filtered = filtered.filter(item => item.materialType === selectedMaterialType)
    }

    // Filter by time range
    if (selectedTimeRange !== '全部') {
      const now = new Date()
      const filterDate = new Date()

      switch (selectedTimeRange) {
        case '今日':
          filterDate.setDate(now.getDate() - 1)
          break
        case '近7日':
          filterDate.setDate(now.getDate() - 7)
          break
        case '近14日':
          filterDate.setDate(now.getDate() - 14)
          break
        case '近30日':
          filterDate.setDate(now.getDate() - 30)
          break
        default:
          break
      }

      if (selectedTimeRange !== '全部' && selectedTimeRange !== '自定义') {
        filtered = filtered.filter(item => item.publishDate >= filterDate)
      }
    }

    setFilteredContent(filtered)
  }, [searchQuery, selectedPlatform, selectedContentType, selectedMaterialType, selectedTimeRange])

  // Initialize filtered content
  useEffect(() => {
    setFilteredContent(allContentCards)
  }, [])

  const handleVideoClick = (video: ContentCard) => {
    setSelectedVideo(video)
    setIsVideoModalOpen(true)
  }

  const closeVideoModal = () => {
    setIsVideoModalOpen(false)
    setSelectedVideo(null)
  }

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
            <h1 className="text-2xl font-bold text-gray-900">灵感采集</h1>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <Smartphone className="w-4 h-4" />
                <span className="text-sm">移动端助手</span>
                <span className="text-orange-500">♦</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <Download className="w-4 h-4" />
                <span className="text-sm">合载插件</span>
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="输入素材文案任意关键词"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <Search className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Platform Filters */}
          <div className="mb-4">
            <span className="text-sm font-medium text-gray-700 mr-4">平台:</span>
            <div className="inline-flex flex-wrap gap-2">
              {platformFilters.map((filter, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPlatform(filter.name)}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                    selectedPlatform === filter.name
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter.icon && <span className="mr-1">{filter.icon}</span>}
                  {filter.name}
                </button>
              ))}
            </div>
          </div>

          {/* Content Type Filters */}
          <div className="mb-4">
            <span className="text-sm font-medium text-gray-700 mr-4">标签:</span>
            <div className="inline-flex flex-wrap gap-2">
              {contentTypeFilters.map((filter, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedContentType(filter.name)}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                    selectedContentType === filter.name
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>

          {/* Time Range Filters */}
          <div className="mb-6">
            <span className="text-sm font-medium text-gray-700 mr-4">保存时间:</span>
            <div className="inline-flex flex-wrap gap-2">
              {timeRangeFilters.map((filter, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTimeRange(filter.name)}
                  className={`flex items-center px-3 py-1.5 text-sm rounded-full transition-colors ${
                    selectedTimeRange === filter.name
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter.name}
                  {filter.hasDropdown && <ChevronDown className="w-3 h-3 ml-1" />}
                </button>
              ))}
            </div>
          </div>

          {/* Material Type Tabs and Actions */}
          <div className="flex items-center justify-between">
            <div className="flex space-x-1">
              {materialTypeFilters.map((filter, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedMaterialType(filter.name)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    selectedMaterialType === filter.name
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                灵感采集
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors">
                批量操作
              </button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">共 {filteredContent.length} 条记录</h3>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {filteredContent.map((card) => (
              <div key={card.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                {/* Creator Info */}
                <div className="p-3 border-b border-gray-100">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-900">{card.creator}</span>
                    {card.verified && <span className="text-blue-500">✓</span>}
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">{card.systemStatus}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    粉丝: {card.followers} | 地区: {card.region}
                  </div>
                </div>

                {/* Video Thumbnail */}
                <div className="relative cursor-pointer" onClick={() => handleVideoClick(card)}>
                  <img
                    src={card.thumbnail}
                    alt={card.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                    {card.duration}
                  </div>
                  <div className="absolute top-2 left-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                    {card.publishTime}
                  </div>
                </div>

                {/* Content Info */}
                <div className="p-3">
                  <h4 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                    {card.title}
                  </h4>

                  {/* Engagement Stats */}
                  <div className="grid grid-cols-3 gap-1 text-xs text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{card.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-3 h-3" />
                      <span>{card.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-3 h-3" />
                      <span>{card.comments}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-gray-600 mt-1">
                    <Share className="w-3 h-3" />
                    <span>{card.shares}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" onClick={closeVideoModal}>
          <div className="relative max-w-4xl max-h-[90vh] w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <span className="sr-only">关闭</span>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="bg-white rounded-lg overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div>
                    <h3 className="font-medium text-gray-900">{selectedVideo.creator}</h3>
                    <p className="text-sm text-gray-500">{selectedVideo.followers} 关注</p>
                  </div>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">{selectedVideo.platform}</span>
                </div>
              </div>

              <div className="relative bg-black">
                <video
                  controls
                  autoPlay
                  className="w-full h-auto max-h-[60vh]"
                  poster={selectedVideo.thumbnail}
                >
                  <source src={selectedVideo.videoUrl} type="video/mp4" />
                  您的浏览器不支持视频播放。
                </video>
              </div>

              <div className="p-4">
                <h4 className="font-medium text-gray-900 mb-2">{selectedVideo.title}</h4>
                <div className="grid grid-cols-4 gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{selectedVideo.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>{selectedVideo.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{selectedVideo.comments}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Share className="w-4 h-4" />
                    <span>{selectedVideo.shares}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">{selectedVideo.publishTime}</span>
                  <span className="text-sm text-gray-500">{selectedVideo.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
