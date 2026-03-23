# Create Issue Templates

Issue templates standardize how work gets captured. Instead of a blank text box, you (or your team) get a structured form with prompts. This means every bug report has the same format, every feature request includes the same context, and nothing important gets forgotten.

## How to do it

1. In your repo, go to **Settings** > **Features** > **Issues** > **Set up templates**
2. Click **Add template**
3. Choose a starter (Bug report, Feature request, or Custom)
4. Edit the template with your own sections and prompts
5. Click **Propose changes**, then commit

Or create templates manually:

1. Create a `.github/ISSUE_TEMPLATE/` folder in your repo
2. Add markdown files for each template type

## Try it

```markdown
Save this as .github/ISSUE_TEMPLATE/task.md:

---
name: Task
about: A general task or to-do item
title: "[Task] "
labels: task
---

## What needs to happen

Describe the task clearly.

## Why it matters

What's the goal or benefit?

## Done when

- [ ] Checklist of what "done" looks like
```

## Resources

- [Configuring issue templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)

## Tips

- Keep templates short. If they're too long, people skip the fields. Three to five sections is usually enough.
- Include a checklist in the template so the person creating the issue can define "done" upfront.
