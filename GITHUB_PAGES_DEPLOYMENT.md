# GitHub Pages Deployment Guide

This guide explains how to deploy the React frontend to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed locally
- Node.js and npm installed

## Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon in the top right → **New repository**
3. Repository name: `siteweb` (or your preferred name)
4. Choose **Public** (required for GitHub Pages)
5. **Do NOT** initialize with README (you already have one)
6. Click **Create repository**

## Step 2: Configure Git Locally

```bash
# Navigate to your project directory
cd C:\xampp\htdocs\siteweb

# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: MPE Digital Solutions website"

# Add GitHub remote (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Update Vite Config for GitHub Pages

The vite.config.ts has been configured. If you need to change the base URL:

```typescript
// In vite.config.ts, add:
export default defineConfig({
    base: '/siteweb/', // Change 'siteweb' to your repository name
    // ... rest of config
});
```

## Step 4: Install Dependencies

```bash
npm install
```

This installs `gh-pages` and other dependencies.

## Step 5: Deploy to GitHub Pages

### Option A: Manual Deployment

```bash
npm run deploy
```

This command:
1. Builds the React app (`npm run build`)
2. Uploads the `dist` folder to the `gh-pages` branch
3. Makes it live on `https://YOUR_USERNAME.github.io/siteweb`

### Option B: Automatic Deployment with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - run: npm install
      - run: npm run build
      
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

This automatically deploys whenever you push to `main` branch.

## Step 6: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Source", select **Deploy from a branch**
4. Select branch: **gh-pages**
5. Select folder: **/ (root)**
6. Click **Save**

Wait a few seconds, and your site will be live at: `https://YOUR_USERNAME.github.io/siteweb`

## Step 7: Verify Deployment

- Check your repository → **Settings** → **Pages**
- You'll see a message: "Your site is published at https://YOUR_USERNAME.github.io/siteweb"
- Click the link to verify it's working

## Common Issues

### Issue: Page shows 404 or blank
- Make sure the `base` in vite.config.ts matches your repository name
- Verify the `gh-pages` branch exists in your repository
- Wait 5-10 minutes for GitHub Pages to process

### Issue: Assets not loading
- Check browser console for 404 errors
- Ensure the base URL in vite.config.ts is correct
- Rebuild: `npm run build`

### Issue: Need to redeploy
```bash
git add .
git commit -m "Update: <your message>"
git push origin main
npm run deploy
```

## Future Updates

After making changes:

```bash
# Commit and push to GitHub
git add .
git commit -m "Update: <description>"
git push origin main

# Deploy to GitHub Pages
npm run deploy
```

Or if using GitHub Actions, just push and it deploys automatically!

## Notes

- This setup deploys only the React frontend
- The Laravel backend is NOT deployed to GitHub Pages
- For API integration, you'll need a separate backend hosting service
- GitHub Pages is perfect for showcasing the design and frontend functionality

## Questions?

Refer to the official GitHub Pages documentation: https://pages.github.com/
