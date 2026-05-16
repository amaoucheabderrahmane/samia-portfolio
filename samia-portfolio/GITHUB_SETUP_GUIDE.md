# GitHub Setup & Deployment Guide for Samia's Portfolio

This guide will help you upload your portfolio to GitHub and deploy it online.

## 📋 Prerequisites

- GitHub account (free at https://github.com)
- Git installed on your computer
- Your portfolio files (all files in this folder)

---

## Step 1: Create a GitHub Repository

1. **Go to GitHub** and sign in to your account
2. **Click the "+" icon** in the top right corner
3. **Select "New repository"**
4. **Fill in the details**:
   - Repository name: `samia-portfolio` (or any name you prefer)
   - Description: "Professional portfolio website"
   - Choose "Public" (so it's visible to everyone)
   - Check "Add a README file"
5. **Click "Create repository"**

---

## Step 2: Upload Your Portfolio Files

### Option A: Using Git Command Line (Recommended)

1. **Open Terminal/Command Prompt** on your computer

2. **Navigate to your portfolio folder**:
   ```bash
   cd path/to/samia-portfolio
   ```

3. **Initialize git** (if not already done):
   ```bash
   git init
   ```

4. **Add all files**:
   ```bash
   git add .
   ```

5. **Create first commit**:
   ```bash
   git commit -m "Initial portfolio commit"
   ```

6. **Add remote repository** (replace YOUR_USERNAME and REPO_NAME):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
   ```

7. **Push to GitHub**:
   ```bash
   git branch -M main
   git push -u origin main
   ```

### Option B: Using GitHub Desktop (Easier for Beginners)

1. **Download GitHub Desktop** from https://desktop.github.com
2. **Sign in** with your GitHub account
3. **Click "File" → "Clone Repository"**
4. **Select your new repository**
5. **Choose local path** where files are located
6. **Make changes** to your files
7. **GitHub Desktop will show changes** - add a commit message and click "Commit to main"
8. **Click "Push origin"** to upload to GitHub

### Option C: Direct Upload on GitHub Website

1. **Go to your repository** on GitHub
2. **Click "Add file" → "Upload files"**
3. **Drag and drop all files** from the `samia-portfolio` folder
4. **Add commit message**: "Add portfolio files"
5. **Click "Commit changes"**

---

## Step 3: Deploy Your Portfolio

### Option 1: Deploy with Netlify (Easiest - Recommended)

**Netlify is free and automatically deploys when you push to GitHub**

1. **Go to https://netlify.com**
2. **Click "Sign up"** and choose "GitHub"
3. **Authorize Netlify** to access your GitHub account
4. **Click "New site from Git"**
5. **Select your repository** (`samia-portfolio`)
6. **Configure build settings**:
   - Build command: `pnpm build`
   - Publish directory: `dist`
7. **Click "Deploy site"**
8. **Wait for deployment** (usually 2-3 minutes)
9. **Your site is live!** You'll get a URL like `https://xxx-xxx-xxx.netlify.app`

**To use a custom domain**:
- Go to Netlify dashboard
- Click "Domain settings"
- Click "Add custom domain"
- Follow instructions to connect your domain

### Option 2: Deploy with Vercel (Also Free)

1. **Go to https://vercel.com**
2. **Click "Sign up"** and choose "GitHub"
3. **Authorize Vercel** to access your GitHub
4. **Click "Import Project"**
5. **Select your repository**
6. **Framework**: Select "Other"
7. **Build command**: `pnpm build`
8. **Output directory**: `dist`
9. **Click "Deploy"**
10. **Your site is live!** You'll get a URL like `https://samia-portfolio.vercel.app`

### Option 3: Deploy with GitHub Pages (Free but Requires Setup)

1. **Go to your repository** on GitHub
2. **Click "Settings" → "Pages"**
3. **Under "Build and deployment"**:
   - Source: "Deploy from a branch"
   - Branch: `main` / `root`
4. **Create a GitHub Actions workflow**:
   - Click "Actions" tab
   - Click "New workflow"
   - Click "set up a workflow yourself"
   - Copy this code:

```yaml
name: Build and Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

5. **Click "Commit changes"**
6. **Wait for deployment** (check "Actions" tab)
7. **Your site is live** at `https://YOUR_USERNAME.github.io/samia-portfolio`

---

## Step 4: Connect to LinkedIn

### Add LinkedIn Profile Link

1. **Edit your portfolio** (`client/src/pages/Home.tsx`)
2. **Find the social links section** (near the bottom)
3. **Update the LinkedIn URL**:
   ```typescript
   href="https://linkedin.com/in/your-linkedin-username"
   ```
4. **Commit and push changes**:
   ```bash
   git add .
   git commit -m "Add LinkedIn profile link"
   git push
   ```
5. **Your site will auto-update** (Netlify/Vercel will redeploy automatically)

### Add LinkedIn Badge to Portfolio

Add this to your LinkedIn profile:
1. **Go to your LinkedIn profile**
2. **Click "Edit public profile"**
3. **Add your portfolio URL** in the "Websites" section
4. **Save changes**

### Share Your Portfolio on LinkedIn

1. **Create a LinkedIn post** with your portfolio link
2. **Example text**:
   > "Excited to share my professional portfolio! Check out my experience, skills, and projects. [Link to your portfolio]"
3. **Share with your network**

---

## Step 5: Keep Your Portfolio Updated

### Making Changes

1. **Edit files** on your computer
2. **Test locally** (run `pnpm dev`)
3. **Commit changes**:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```
4. **Your site auto-updates** within minutes

### Regular Updates Recommended

- Update experience section with new roles
- Add new skills and certifications
- Update contact information
- Refresh design annually
- Check for broken links

---

## Troubleshooting

### Site Not Deploying

1. **Check GitHub Actions** (for GitHub Pages):
   - Go to "Actions" tab
   - Look for red X marks (errors)
   - Click to see error details

2. **Check Netlify/Vercel logs**:
   - Go to deployment settings
   - Look at "Deployment logs"
   - Fix any build errors

### Build Errors

Common issues:
- **"pnpm not found"**: Make sure build command is `pnpm build`
- **"dist folder not found"**: Check output directory is set to `dist`
- **"Node modules missing"**: Ensure `pnpm install` runs before build

### Custom Domain Issues

1. **Add DNS records** from your domain provider
2. **Wait 24-48 hours** for DNS to propagate
3. **Test with** `nslookup yourdomain.com`

---

## Performance Tips

1. **Compress images** before adding them
2. **Use CDN for large files** (Netlify/Vercel do this automatically)
3. **Monitor performance** with Lighthouse (Chrome DevTools)
4. **Enable caching** in deployment settings

---

## Security Best Practices

1. **Never commit sensitive data** (API keys, passwords)
2. **Use environment variables** for secrets
3. **Keep dependencies updated**:
   ```bash
   pnpm update
   ```
4. **Enable GitHub security alerts**:
   - Go to Settings → Security → Dependabot

---

## Getting Help

- **GitHub Docs**: https://docs.github.com
- **Netlify Docs**: https://docs.netlify.com
- **Vercel Docs**: https://vercel.com/docs
- **React Docs**: https://react.dev
- **Tailwind Docs**: https://tailwindcss.com/docs

---

## Next Steps

1. ✅ Create GitHub repository
2. ✅ Upload portfolio files
3. ✅ Deploy to Netlify/Vercel/GitHub Pages
4. ✅ Connect LinkedIn profile
5. ✅ Share with your network
6. ✅ Keep portfolio updated

**Congratulations! Your professional portfolio is now online! 🎉**

---

**Questions?** Feel free to reach out to Samia at amaoucheabderrahmane@gmail.com
