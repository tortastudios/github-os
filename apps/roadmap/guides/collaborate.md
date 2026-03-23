# Collaborate with Pull Requests

Pull Requests (PRs) are how changes get reviewed before merging into the main branch. Even if you work solo, they create a record of what changed and why. For teams, they're essential -- no one changes the main branch without someone looking at it first.

## How to do it

1. Create a branch and make your changes on it
2. Push the branch to GitHub
3. Go to your repo on GitHub.com -- you'll see a banner suggesting a pull request
4. Click **Compare & pull request**
5. Write a title and description explaining what changed and why
6. Click **Create pull request**
7. Review the changes in the **Files changed** tab
8. Click **Merge pull request** when ready

## Try it

```
git checkout -b update-readme
# edit README.md
git add README.md
git commit -m "Improve getting started instructions"
git push -u origin update-readme
# then open the pull request on GitHub.com
```

## Resources

- [About pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)

## Tips

- Write PR descriptions like you're explaining the change to someone who hasn't seen the code. Future-you counts as that person.
- Small, focused PRs are easier to review than large ones. One feature or fix per PR.
- You can request reviews from specific people using the "Reviewers" sidebar on the PR page.
