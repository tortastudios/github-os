# Set Up GitHub Actions

Actions are automations that run when something happens in your repo. Push code? Automatically deploy your site. Create an issue? Send a Slack notification. Think of it as setting up "if this, then that" rules for your project.

## How to do it

1. In your repo, click **Actions** in the top navigation
2. Browse suggested workflows or click **set up a workflow yourself**
3. GitHub creates a file at `.github/workflows/main.yml`
4. Edit the workflow to define your trigger and steps
5. Commit the file

## Try it

```yaml
# Save this as .github/workflows/hello.yml
name: Hello World
on:
  push:
    branches: [main]

jobs:
  greet:
    runs-on: ubuntu-latest
    steps:
      - name: Say hello
        run: echo "Hello from GitHub Actions!"
```

## Resources

- [GitHub Actions quickstart](https://docs.github.com/en/actions/quickstart)
- [Awesome GitHub Actions (community examples)](https://github.com/sdras/awesome-actions)

## Tips

- Workflows are YAML files in `.github/workflows/`. You can have as many as you need.
- The Actions tab in your repo shows the history of every run, including logs and errors.
- Start simple. A workflow that just runs on push is enough to learn the basics before adding deployment or testing.
