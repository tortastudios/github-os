# Edit and Push Changes

This is the core loop of working with GitHub: edit files on your computer, commit (save with a description), then push (upload to GitHub). Once you learn this rhythm, you'll use it every day.

## How to do it

1. Open a cloned repo in your text editor or GitHub Desktop
2. Edit any file and save it
3. In GitHub Desktop, review your changes in the diff view
4. Write a commit message describing what you changed
5. Click **Commit to main**
6. Click **Push origin** to upload your changes to GitHub

If you prefer the terminal:

1. Make your changes and save the file
2. Stage, commit, and push

## Try it

```
git add .
git commit -m "Update README with project goals"
git push
```

## Resources

- [Pushing commits to a remote repository](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository)

## Tips

- Always check your changes before committing. In GitHub Desktop, read through the diff. In the terminal, use `git diff`.
- If you forget to push, your changes only exist on your machine. Push regularly to keep GitHub up to date.
