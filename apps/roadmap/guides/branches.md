# Use Branches for Experiments

A branch is a copy of your project where you can try things without affecting the main version. If the experiment works, merge it back. If it doesn't, delete the branch. No harm done. This is how professionals work on new features without breaking what's already working.

## How to do it

1. In your repo on GitHub.com, click the branch dropdown (says **main**)
2. Type a name for your new branch (like `experiment`)
3. Click **Create branch: experiment from main**
4. Make your changes on this branch
5. When ready, click **Compare & pull request** to merge back

In the terminal:

1. Create and switch to a new branch
2. Make changes, commit, and push
3. Open a pull request on GitHub

## Try it

```
git checkout -b experiment
# make your changes
git add .
git commit -m "Try new homepage layout"
git push -u origin experiment
```

## Resources

- [About branches](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)

## Tips

- Name branches after what you're doing: `add-contact-page`, `fix-typo`, `redesign-header`. Clear names make it easy to remember what each branch is for.
- The `main` branch is your stable version. Never experiment directly on `main`.
