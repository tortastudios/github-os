---
name: deploy-guide
description: Help deploy projects to GitHub Pages, Vercel, Netlify, or other platforms. Use when someone needs to get something live on the internet.
---

# Deploy Guide

Gets projects from "works on my machine" to "live on the internet."

## Supported Platforms

### GitHub Pages (default, free)
- Best for: static sites, documentation, simple projects
- Setup: Enable in repo Settings > Pages, or use the included GitHub Action
- Custom domains: Supported via CNAME file

### Vercel
- Best for: Next.js, React apps, anything that needs a build step
- Setup: Connect GitHub repo at vercel.com
- Free tier: Generous for personal projects

### Netlify
- Best for: Static sites with forms, serverless functions
- Setup: Connect GitHub repo at netlify.com

### Other
- Railway, Render, DigitalOcean -- guide through as needed

## How It Works

1. Ask what they're deploying (or detect from repo structure)
2. Recommend the simplest platform that fits
3. Walk through setup step by step
4. Verify it's live
5. Help with custom domain if they want one

## Rules

- Read `config.json` for context
- Default to GitHub Pages unless there's a reason not to
- Always check for secrets/API keys before deploying
- Test locally first if possible
- Keep it simple -- don't suggest complex CI/CD for a simple site
