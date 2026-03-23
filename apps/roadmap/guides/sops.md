# Write SOPs in Markdown

Standard Operating Procedures (SOPs) document how you do things -- your repeatable processes. Writing them in markdown and storing them in your repo means they're versioned (you can see what changed and when), searchable, and always accessible. When you or someone else needs to do the task again, the instructions are right there.

## How to do it

1. Create a `docs/sops/` folder in your repo
2. Create a new markdown file named after the process (like `deploy-website.md`)
3. Write the steps in numbered order
4. Include any commands, links, or credentials references people will need
5. Commit and push

## Try it

```markdown
Save this as docs/sops/weekly-review.md:

# Weekly Review

Run through this every Friday afternoon.

## Steps

1. Check open issues -- close anything that's done
2. Review the project board -- move items to the right column
3. Write down what got accomplished this week
4. Create issues for next week's top 3 priorities
5. Push any uncommitted changes

## Notes

- Keep the review under 30 minutes
- If an issue has been open for 2+ weeks with no progress, either do it or close it
```

## Resources

- [Markdown guide](https://www.markdownguide.org/)

## Tips

- Write SOPs as if the reader has never done the task before. Your future self will thank you.
- Update SOPs when the process changes. A wrong SOP is worse than no SOP.
- Use checklists (`- [ ]`) so people can track progress as they follow the steps.
