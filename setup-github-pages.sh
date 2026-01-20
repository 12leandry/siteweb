#!/bin/bash
# GitHub Pages Deployment Script

echo "========================================="
echo "GitHub Pages Deployment Setup"
echo "========================================="
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
else
    echo "✓ Git repository already initialized"
fi

echo ""
echo "❗ IMPORTANT: Before proceeding, do the following:"
echo "1. Create a GitHub repository at https://github.com/new"
echo "2. Name it 'siteweb' (or your preferred name)"
echo "3. Make it PUBLIC (required for GitHub Pages)"
echo "4. Do NOT initialize with README"
echo ""
echo "Then come back here and run:"
echo ""
echo "  git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git"
echo "  git branch -M main"
echo "  git add ."
echo "  git commit -m 'Initial commit: MPE Digital Solutions website'"
echo "  git push -u origin main"
echo ""
echo "Then run:"
echo "  npm install"
echo "  npm run deploy"
echo ""
echo "========================================="
