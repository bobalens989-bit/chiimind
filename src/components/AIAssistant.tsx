'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import {
  Wand2,
  FileText,
  Video,
  Image as ImageIcon,
  MessageSquare,
  TrendingUp,
  Copy,
  Download,
  RefreshCw,
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  Send,
  Plus,
  Search
} from 'lucide-react'

export default function AIAssistant() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [currentTool, setCurrentTool] = useState('text')
  const [generatedContent, setGeneratedContent] = useState('')
  const [prompt, setPrompt] = useState('')

  const tools = [
    {
      id: 'text',
      name: '文案生成',
      icon: FileText,
      description: '生成营销文案、社交媒体内容、博客文章等',
      color: 'bg-blue-500'
    },
    {
      id: 'video',
      name: '视频脚本',
      icon: Video,
      description: '创建短视频脚本、直播大纲、视频介绍',
      color: 'bg-purple-500'
    },
    {
      id: 'social',
      name: '社媒内容',
      icon: MessageSquare,
      description: '小红书、抖音、微博等平台内容创作',
      color: 'bg-pink-500'
    },
    {
      id: 'image',
      name: '图片创意',
      icon: ImageIcon,
      description: 'AI生成图片描述、设计思路、视觉创意',
      color: 'bg-green-500'
    },
    {
      id: 'analyze',
      name: '内容分析',
      icon: TrendingUp,
      description: '分析内容表现、优化建议、趋势预测',
      color: 'bg-orange-500'
    },
    {
      id: 'optimize',
      name: '内容优化',
      icon: Sparkles,
      description: '改写优化现有内容、SEO优化、风格调整',
      color: 'bg-indigo-500'
    }
  ]

  const contentTypes = [
    '小红书笔记', '抖音短视频', '微博动态', '公众号文章',
    '产品介绍', '营销文案', '教程指南', '新闻稿'
  ]

  const tones = [
    '专业正式', '轻松幽默', '温馨亲切', '活泼有趣',
    '权威专业', '年轻潮流', '商务简洁', '情感真挚'
  ]

  const generateContent = async () => {
    if (!prompt.trim()) return

    setIsGenerating(true)

    // Simulate AI generation
    setTimeout(() => {
      const sampleContent = `基于您的需求"${prompt}"，我为您生成了以下内容：

🎯 标题建议：
• 十个让人心动的${currentTool === 'text' ? '文案' : '创意'}技巧
• 不可错过的${prompt}实用指南
• 三分钟学会${prompt}的核心要点

📝 正文内容：
${currentTool === 'text' ?
`在当今数字化时代，${prompt}已经成为了不可忽视的重要话题。通过深入分析和实践经验，我们总结出以下几个关键要点：

1. 核心策略：明确目标受众，精准定位内容方向
2. 创意表达：运用生动的语言和视觉元素
3. 互动设计：鼓励用户参与和分享
4. 数据驱动：基于分析结果持续优化内容

💡 实用技巧：
- 开头3秒抓住注意力
- 使用数字和具体案例
- 添加行动号召（CTA）
- 定期更新和维护内容` :
`🎬 视频结构：
开场(0-3秒)：强烈的视觉冲击，快速吸引注意
展开(3-30秒)：核心内容展示，层层递进
高潮(30-45秒)：关键信息点，情感共鸣
结尾(45-60秒)：总结要点，引导关注

📱 拍摄要点：
- 使用自然光或专业补光
- 保持画面稳定和清晰
- 注意背景简洁不杂乱
- 确保音频质量清晰`}

#创意灵感 #内容营销 #数字化运营`

      setGeneratedContent(sampleContent)
      setIsGenerating(false)
    }, 3000)
  }

  const copyContent = () => {
    navigator.clipboard.writeText(generatedContent)
    alert('内容已复制到剪贴板！')
  }

  const saveContent = () => {
    // Simulate save
    alert('内容已保存到您的项目中！')
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">AI创作助手</h1>
          <p className="text-gray-600">智能内容生成，让创作更高效</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <RotateCcw className="h-4 w-4 mr-2" />
            历史记录
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            导出模板
          </Button>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <div
            key={tool.id}
            onClick={() => setCurrentTool(tool.id)}
            className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-lg ${
              currentTool === tool.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-lg ${tool.color}`}>
                <tool.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{tool.name}</h3>
                <p className="text-sm text-gray-600">{tool.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Content Generation Interface */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">内容生成工具</h3>
        </div>

        <div className="p-6 space-y-6">
          {/* Input Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">内容类型</label>
              <Select defaultValue="小红书笔记">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {contentTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">语调风格</label>
              <Select defaultValue="轻松幽默">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {tones.map((tone) => (
                    <SelectItem key={tone} value={tone}>{tone}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">字数要求</label>
              <Select defaultValue="300-500字">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="100-200字">100-200字</SelectItem>
                  <SelectItem value="300-500字">300-500字</SelectItem>
                  <SelectItem value="500-800字">500-800字</SelectItem>
                  <SelectItem value="800-1200字">800-1200字</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Prompt Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">创作需求</label>
            <div className="flex space-x-2">
              <Input
                placeholder="请描述您想要创作的内容，例如：美食探店攻略、护肤心得分享、职场成长经验..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="flex-1"
              />
              <Button
                onClick={generateContent}
                disabled={isGenerating || !prompt.trim()}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    生成中
                  </>
                ) : (
                  <>
                    <Wand2 className="h-4 w-4 mr-2" />
                    生成内容
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Generated Content */}
          {generatedContent && (
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-900">生成结果</h4>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={copyContent}>
                    <Copy className="h-4 w-4 mr-2" />
                    复制
                  </Button>
                  <Button variant="outline" size="sm" onClick={saveContent}>
                    <Download className="h-4 w-4 mr-2" />
                    保存
                  </Button>
                  <Button variant="outline" size="sm" onClick={generateContent}>
                    <RefreshCw className="h-4 w-4 mr-2" />
                    重新生成
                  </Button>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <pre className="whitespace-pre-wrap text-sm text-gray-800 font-sans">
                  {generatedContent}
                </pre>
              </div>
            </div>
          )}

          {/* Quick Templates */}
          <div className="border-t pt-6">
            <h4 className="font-medium text-gray-900 mb-4">快速模板</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                '产品种草文案',
                '美食探店攻略',
                '穿搭分享笔记',
                '护肤心得分享',
                '旅行攻略指南',
                '职场经验分享',
                '学习方法总结',
                '生活小技巧'
              ].map((template) => (
                <Button
                  key={template}
                  variant="outline"
                  size="sm"
                  onClick={() => setPrompt(template)}
                  className="text-left justify-start"
                >
                  <Plus className="h-3 w-3 mr-2" />
                  {template}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Generations */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">最近生成</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {[
              { title: '美食探店攻略', type: '小红书笔记', time: '2分钟前', words: 456 },
              { title: '护肤心得分享', type: '抖音脚本', time: '15分钟前', words: 320 },
              { title: '职场成长经验', type: '公众号文章', time: '1小时前', words: 800 },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">{item.title}</h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{item.type}</span>
                    <span>•</span>
                    <span>{item.words}字</span>
                    <span>•</span>
                    <span>{item.time}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <Search className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
