# Deploy with GitHub Pages

GitHub Pages turns a repo into a free website. Push HTML, CSS, and JavaScript files, and GitHub hosts them automatically at `yourname.github.io/repo-name`. No server setup, no hosting bills, no deployment tools to learn.

## How to do it

1. Go to your repo on GitHub.com
2. Click **Settings** (gear icon in the repo navigation)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **Deploy from a branch**
5. Choose the **main** branch and click **Save**
6. Wait about 60 seconds, then refresh the page to see your site URL

## Try it

```
Create a file called index.html in your repo with this content:

<!DOCTYPE html>
<html>
<head><title>My Site</title></head>
<body>
  <h1>Hello from GitHub Pages</h1>
  <p>This site is hosted for free on GitHub.</p>
</body>
</html>
```

## Resources

- [GitHub Pages quickstart](https://docs.github.com/en/pages/quickstart)

## Tips

- Your site URL follows the pattern `username.github.io/repo-name`. If you name a repo `username.github.io`, it becomes your main site at that URL.
- Every push to the main branch automatically updates your live site.
- GitHub Pages is great for personal sites, portfolios, documentation, and small business pages.
