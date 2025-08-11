# LinkMind Clone - AI工作助手平台

🚀 **[立即部署到Vercel](VERCEL_DEPLOYMENT_GUIDE.md)**

完整克隆的LinkMind应用程序，采用Next.js和现代UI技术栈构建。

## ✨ 功能特性

- 🏠 **现代主页** - 美观的着陆页
- 👤 **用户认证** - 完整的登录/注册系统
- 📊 **仪表板** - 个人工作台
- 🤖 **AI助手** - CreatixAI智能助手
- 👥 **团队协作** - 多人协作功能
- 📈 **账户监控** - MA Inspire监控界面
- 🌙 **主题切换** - 亮色/暗色模式

## 🚀 快速开始

### 本地开发
```bash
npm install
npm run dev
```

### 生产构建
```bash
npm run build
npm run start
```

## 📦 技术栈

- **框架**: Next.js 15.3.2 (静态导出)
- **UI库**: Radix UI + Tailwind CSS
- **图标**: Lucide React
- **类型**: TypeScript
- **样式**: Tailwind CSS + CSS Variables

## 🌐 在线部署

### 推荐：Vercel (一键部署)
1. 访问 [vercel.com](https://vercel.com)
2. 使用GitHub登录
3. 导入此仓库：`https://github.com/bobalens989-bit/chiimind`
4. 点击部署

**详细步骤**: 查看 [Vercel部署指南](VERCEL_DEPLOYMENT_GUIDE.md)

### 自动重新部署
✅ 推送到GitHub主分支 → 自动重新部署
✅ 分支预览 → PR自动生成预览链接
✅ 实时构建日志 → 监控部署进度

## 📁 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── dashboard/         # 仪表板页面
│   ├── login/            # 登录页面
│   └── register/         # 注册页面
├── components/           # React组件
│   ├── ui/              # 基础UI组件
│   └── ...              # 业务组件
└── lib/                 # 工具函数
```

## 🔧 配置文件

- `next.config.js` - Next.js配置
- `vercel.json` - Vercel部署配置
- `netlify.toml` - Netlify备用配置
- `tailwind.config.ts` - Tailwind CSS配置

## 📋 部署要求

- ✅ Node.js 18+
- ✅ 静态站点托管
- ✅ 无需服务器端功能
- ✅ CDN友好

---

🎯 **目标**: 提供完整的工作助手平台，支持现代Web标准和最佳实践。
