# Set Up a GitHub Action

Actions are automations triggered by events in your repo. Push code? Auto-deploy. Create an issue? Send a notification. Your repo already has one -- .github/workflows/deploy-roadmap.yml deploys your roadmap site. Read it to understand the pattern, then create your own.

## How to do it

1. Open .github/workflows/deploy-roadmap.yml and read through it
2. Notice the structure: trigger (on), job name, steps
3. To create a new action, add a new .yml file in .github/workflows/
4. Define your trigger and steps
5. Commit the file -- it runs automatically

## Try it

```
Read .github/workflows/deploy-roadmap.yml to understand the structure. Then search the GitHub Actions marketplace for an automation that would save you time.
```

## Resources

- [GitHub Actions quickstart](https://docs.github.com/en/actions/quickstart)
- [Awesome GitHub Actions](https://github.com/sdras/awesome-actions)

## Tips

- Workflows are YAML files in .github/workflows/. You can have as many as you need.
- The Actions tab in your repo shows the history of every run, including logs and errors.
- Start simple. The deploy-roadmap.yml in your repo is a good reference for the pattern.
