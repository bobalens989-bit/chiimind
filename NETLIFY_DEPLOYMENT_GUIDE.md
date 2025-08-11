# Netlify Deployment Guide

This guide explains how to deploy this Next.js 15 application to Netlify for dynamic hosting.

## Prerequisites

- GitHub repository with your code
- Netlify account
- Node.js 18+ locally for testing

## Deployment Steps

### 1. Connect Repository to Netlify

1. Log in to [Netlify](https://netlify.com)
2. Click "Add new site" > "Import an existing project"
3. Connect your Git provider (GitHub, GitLab, etc.)
4. Select your repository

### 2. Configure Build Settings

Netlify should automatically detect the configuration from `netlify.toml`, but verify these settings:

- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: `18` (set via `.nvmrc` file)

### 3. Environment Variables (if needed)

Add any environment variables in Netlify's dashboard:
- Go to Site settings > Environment variables
- Add variables like `NEXT_PUBLIC_API_URL`, etc.

### 4. Deploy

Click "Deploy site" - the initial build should complete successfully.

## Configuration Files

### netlify.toml
```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"
  NPM_FLAGS = "--legacy-peer-deps"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### .nvmrc
```
18
```

### package.json (key sections)
```json
{
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=8.0.0"
  },
  "scripts": {
    "build": "next build",
    "lint": "next lint"
  }
}
```

## Troubleshooting

### Common Issues

1. **Build fails with TypeScript errors**
   - Run `npm run lint` locally to check for issues
   - Fix any TypeScript/ESLint errors before deployment

2. **Node.js version issues**
   - Ensure `.nvmrc` file contains `18`
   - Check Netlify build logs for Node.js version

3. **Dependency conflicts**
   - Use `npm install --legacy-peer-deps` flag (already configured)
   - Check for peer dependency warnings in build logs

4. **Next.js 15 compatibility**
   - Ensure you're using the latest `@netlify/plugin-nextjs`
   - If issues persist, try downgrading to Next.js 14

### Manual Build Testing

Test the build locally before deploying:

```bash
# Install dependencies
npm install

# Run build
npm run build

# Test the built application
npm start
```

## Features Supported

- ✅ Dynamic routing
- ✅ API routes
- ✅ Server-side rendering (SSR)
- ✅ Static site generation (SSG)
- ✅ Image optimization
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ React Context

## Performance Optimizations

The build is configured for optimal performance:

- Image optimization enabled
- Static generation where possible
- Code splitting
- Tree shaking
- Minification

## Post-Deployment

1. Test all routes and functionality
2. Check performance with Lighthouse
3. Set up custom domain (if needed)
4. Configure redirects for SEO (if needed)

## Support

If you encounter issues:

1. Check Netlify build logs
2. Verify all configuration files match this guide
3. Test build locally first
4. Check Netlify's Next.js documentation for updates
