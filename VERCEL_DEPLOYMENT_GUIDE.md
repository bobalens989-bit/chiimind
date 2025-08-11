# Vercel自动部署指南 - LinkMind项目

## 🚀 快速部署步骤

### 第一步：访问Vercel
1. 访问 [vercel.com](https://vercel.com)
2. 点击 "Sign Up" 或 "Log in"
3. 选择 "Continue with GitHub" 使用您的GitHub账户登录

### 第二步：导入项目
1. 登录后，点击 "Add New..." 按钮
2. 选择 "Project"
3. 在 "Import Git Repository" 部分，找到您的仓库：
   - 仓库名称：`chiimind`
   - URL：`https://github.com/bobalens989-bit/chiimind`
4. 点击 "Import" 按钮

### 第三步：配置项目设置
在配置页面中：

**基本设置：**
- Project Name: `linkmind-clone` (或您喜欢的名称)
- Framework Preset: 选择 "Next.js"
- Root Directory: 保持为 `./` (根目录)

**构建和输出设置：**
- Build Command: `npm ci && npm run build`
- Output Directory: `out`
- Install Command: `npm ci`

**环境变量：**
- 目前项目不需要环境变量
- 如果将来需要，可以在这里添加

### 第四步：部署
1. 确认设置无误后，点击 "Deploy" 按钮
2. Vercel将自动：
   - 克隆您的GitHub仓库
   - 安装依赖包
   - 构建项目
   - 部署到CDN

### 第五步：获取网站URL
部署成功后，您将看到：
- 部署状态：✅ Ready
- 网站URL：`https://your-project-name.vercel.app`
- 预览图像

## 🔄 自动重新部署

Vercel已自动设置GitHub集成，这意味着：

✅ **每次您推送代码到GitHub主分支时，网站将自动重新部署**

✅ **支持分支预览：创建PR时会自动生成预览链接**

✅ **实时构建日志：可以实时查看部署进度**

## 🛠️ 部署后管理

### 查看部署状态
1. 登录Vercel仪表板
2. 点击您的项目
3. 查看 "Deployments" 选项卡

### 自定义域名（可选）
1. 在项目设置中点击 "Domains"
2. 添加您的自定义域名
3. 按照指示配置DNS记录

### 分析和监控
- Vercel提供免费的分析数据
- 可以查看访问量、性能指标等

## 📋 项目技术栈
- **框架**: Next.js 15.3.2
- **UI组件**: Radix UI + Tailwind CSS
- **构建**: 静态导出 (SSG)
- **部署**: Vercel CDN

## 🔧 故障排除

### 构建失败
如果构建失败，检查：
1. 构建日志中的错误信息
2. 确保package.json中的依赖版本正确
3. 确保没有TypeScript类型错误

### 404错误
- 项目配置了正确的路由重写规则
- 所有页面都支持静态生成

### 性能优化
项目已包含：
- 图片优化配置
- 静态资源缓存策略
- 安全头部设置

## 📞 支持

如果遇到问题：
1. 查看Vercel的构建日志
2. 检查GitHub仓库中的最新提交
3. 确保本地构建成功：`npm run build`

---

🎉 **恭喜！您的LinkMind项目现在已经自动部署到Vercel，并具备自动重新部署功能！**
