# Netlify 部署故障排除指南

## 🔍 快速诊断

运行验证脚本检查所有配置：
```bash
node verify-deployment.js
```

## 🛠️ 常见问题及解决方案

### 1. 构建失败 - "Script not found 'build'"

**症状**: Netlify显示 `Error: Command failed with exit code 1: npm run build`
**原因**: package.json中缺少build脚本或npm缓存问题
**解决方案**:
```bash
# 确保package.json包含build脚本
npm run build  # 本地测试
# 清理并重新部署
git add .
git commit -m "Fix build configuration"
git push
```

### 2. 依赖安装失败

**症状**: 依赖安装过程中出错
**原因**:
- 混合使用npm/bun锁文件
- 依赖版本冲突
- Node.js版本不匹配

**解决方案**:
```bash
# 删除冲突的锁文件
rm -f bun.lock bun.lockb yarn.lock
# 使用正确的npm flags
npm install --legacy-peer-deps
npm run build
```

### 3. Next.js 15兼容性问题

**症状**: 构建过程中Next.js相关错误
**解决方案**:
- 确保`netlify.toml`中设置了`NETLIFY_NEXT_PLUGIN_SKIP = "true"`
- 使用静态导出而不是Netlify Next.js插件
- 检查所有API路由是否兼容静态导出

### 4. 静态导出配置错误

**症状**: 页面无法正确生成或404错误
**检查清单**:
- [ ] `next.config.js`包含`output: 'export'`
- [ ] `images: { unoptimized: true }`
- [ ] `netlify.toml`设置`publish = "out"`
- [ ] 没有使用动态路由参数
- [ ] 没有使用服务器端功能（API路由等）

### 5. 文件路径问题

**症状**: 静态资源404或路径错误
**解决方案**:
- 确保所有资源使用相对路径
- 检查`trailingSlash: false`设置
- 验证所有链接使用Next.js Link组件

## 🔧 部署前检查清单

### 必需文件
- [ ] `package.json`含有正确的build脚本
- [ ] `next.config.js`正确配置静态导出
- [ ] `netlify.toml`指向正确的发布目录
- [ ] `.nvmrc`指定Node 18

### 构建验证
```bash
# 清理并重新构建
rm -rf .next out node_modules
npm install
npm run build
ls -la out/  # 确认文件生成
```

### 依赖检查
```bash
# 检查依赖冲突
npm ls
# 检查过时依赖
npm outdated
```

## 🚀 推荐的部署流程

### 1. 本地验证
```bash
# 清理环境
rm -rf .next out node_modules package-lock.json

# 重新安装依赖
npm install --legacy-peer-deps

# 构建项目
npm run build

# 运行验证脚本
node verify-deployment.js
```

### 2. 提交更改
```bash
git add .
git commit -m "Fix deployment configuration"
git push origin main
```

### 3. Netlify部署设置
- **构建命令**: `npm ci && npm run build`
- **发布目录**: `out`
- **Node.js版本**: 18（通过.nvmrc自动设置）

## 🐛 调试技巧

### 查看Netlify构建日志
1. 登录Netlify仪表板
2. 选择你的站点
3. 点击"Deploys"标签
4. 查看失败的部署详情

### 本地模拟静态服务
```bash
# 构建项目
npm run build

# 使用Python简单服务器测试
cd out
python3 -m http.server 8000

# 或使用Node.js serve
npx serve out
```

### 检查生成的文件
```bash
# 查看生成的HTML文件
ls -la out/*.html

# 检查静态资源
ls -la out/_next/static/

# 验证文件大小合理
du -sh out/
```

## 🔄 替代部署方案

如果静态部署持续失败，可以考虑：

### 1. 切换到动态部署
修改`next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // 移除 output: 'export'
  images: {
    domains: [...]
  }
};
```

修改`netlify.toml`:
```toml
[build]
  command = "npm ci && npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### 2. 使用Vercel部署
```bash
npm install -g vercel
vercel
```

### 3. 使用GitHub Pages
确保有正确的`.github/workflows/deploy.yml`

## 📞 获取帮助

如果问题持续存在：
1. 检查Netlify状态页面
2. 查看Netlify社区论坛
3. 检查Next.js GitHub issues
4. 联系技术支持并提供完整的构建日志

## 🎯 成功部署的标志

✅ 构建日志显示"Build succeeded"
✅ 所有页面都可以访问（测试所有路由）
✅ 静态资源正常加载
✅ 控制台没有404错误
✅ 性能测试通过
