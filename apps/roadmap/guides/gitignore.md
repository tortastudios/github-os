# Set Up .gitignore

Not everything belongs in your repo. The `.gitignore` file tells GitHub which files to skip -- things like passwords, temporary files, or system junk. This keeps your repo clean and prevents you from accidentally sharing sensitive information.

## How to do it

1. In your repo, click **Add file** > **Create new file**
2. Name the file `.gitignore` (the dot at the start is important)
3. Add the files and folders you want to ignore, one per line
4. Commit the file

## Try it

```
# Operating system files
.DS_Store
Thumbs.db

# Environment and secrets
.env
.env.local

# Dependencies
node_modules/

# Editor files
.vscode/
.idea/
```

## Resources

- [Ignoring files](https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files)
- [gitignore templates for every language](https://github.com/github/gitignore)

## Tips

- The `.env` file is where people commonly store passwords and API keys. Always ignore it.
- GitHub offers pre-built `.gitignore` templates when you create a repo. Pick the one closest to your project type.
- If you already committed a file and then add it to `.gitignore`, it won't be removed automatically. You'll need to delete it from the repo separately.
