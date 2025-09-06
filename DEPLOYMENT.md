# Deployment Guide

This guide explains how to deploy your portfolio to different platforms.

## 🚀 Deployment Options

### 1. GitHub Pages (with repository path)
- **URL**: `https://yourusername.github.io/gaurav--portfolio`
- **Build Command**: `npm run build:github`
- **Automatic**: Uses GitHub Actions workflow

### 2. Custom Domain (gauravdaultani.me)
- **URL**: `https://gauravdaultani.me`
- **Build Command**: `npm run build:custom`
- **Manual**: Build and upload to your hosting provider

### 3. Vercel (Recommended for custom domain)
- **URL**: `https://gauravdaultani.me`
- **Build Command**: `npm run build:custom`
- **Automatic**: Connect your GitHub repository

## 🔧 Build Commands

```bash
# For GitHub Pages (with /gaurav--portfolio path)
npm run build:github

# For custom domain (no path prefix)
npm run build:custom

# For development
npm run dev
```

## 📁 Deployment Steps

### For Custom Domain (gauravdaultani.me):

1. **Build for custom domain:**
   ```bash
   npm run build:custom
   ```

2. **Upload the `out/` folder** to your hosting provider:
   - Upload all files from `out/` to your domain's root directory
   - Ensure `index.html` is in the root
   - Make sure all CSS and JS files are uploaded

3. **Verify file structure:**
   ```
   gauravdaultani.me/
   ├── index.html
   ├── _next/
   │   ├── static/
   │   └── ...
   ├── images/
   └── ...
   ```

### For Vercel (Recommended):

1. **Connect your GitHub repository** to Vercel
2. **Set build command**: `npm run build:custom`
3. **Set output directory**: `out`
4. **Add your custom domain** in Vercel settings
5. **Deploy automatically** on every push

## 🐛 Troubleshooting

### CSS Not Loading on Custom Domain:

1. **Check file paths**: Ensure CSS files are in the correct location
2. **Verify build**: Use `npm run build:custom` (not `build:github`)
3. **Check hosting**: Make sure your hosting provider serves static files correctly
4. **Clear cache**: Clear browser cache and CDN cache

### GitHub Pages vs Custom Domain:

- **GitHub Pages**: Uses `/gaurav--portfolio` path prefix
- **Custom Domain**: No path prefix, files served from root

## 📝 Environment Variables

- `GITHUB_PAGES=true`: Adds path prefix for GitHub Pages
- `NODE_ENV=production`: Optimizes build for production

## 🔄 Automatic Deployment

### GitHub Pages:
- Push to `main` branch
- GitHub Actions automatically builds and deploys
- Uses `build:github` command

### Vercel:
- Push to `main` branch
- Vercel automatically builds and deploys
- Uses `build:custom` command (configure in Vercel settings)
