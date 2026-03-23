# Deploy Your Roadmap Site

Your repo includes a roadmap site in apps/roadmap/ and a GitHub Action that auto-deploys it. Enable GitHub Pages in your repo settings and your progress dashboard goes live. Every push to apps/roadmap/ triggers a fresh deploy.

## How to do it

1. Go to your repo's **Settings** > **Pages**
2. Under "Build and deployment", set the source to **GitHub Actions**
3. Push any change to the apps/roadmap/ folder
4. The deploy-roadmap.yml action runs automatically
5. Visit yourname.github.io/github-os to see it live

## Try it

```
Go to Settings > Pages. Set source to "GitHub Actions". Push any change to apps/roadmap/ and watch it deploy. Visit yourname.github.io/github-os to see it live.
```

## Resources

- [GitHub Pages quickstart](https://docs.github.com/en/pages/quickstart)

## Tips

- Check the Actions tab to see if the deploy succeeded. Green checkmark means it's live.
- The deploy only triggers on changes to apps/roadmap/. Other changes won't cause a redeploy.
