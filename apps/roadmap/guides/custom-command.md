# Create a Custom Command

Commands are just markdown files in `.claude/commands/`. Create a new `.md` file, write instructions for what the command should do, and it becomes available as a slash command in your AI tool. No code required -- just plain English instructions.

## How to do it

1. Go to the `.claude/commands/` folder in your repo
2. Create a new markdown file (the filename becomes the command name)
3. Write clear instructions for what the command should do
4. Commit and push
5. The command is now available when you type `/filename` in your AI tool

## Try it

```markdown
Save this as .claude/commands/daily.md:

Summarize what's happening in this project right now:

1. Check recent commits -- what changed in the last few days?
2. List open issues -- what's on the to-do list?
3. Identify the single most important thing to work on today
4. Suggest a concrete first step to get started

Keep the summary under 10 lines. Be specific, not vague.
```

## Resources

- [Custom slash commands](https://docs.anthropic.com/en/docs/claude-code/slash-commands)

## Tips

- Name commands after what they do: `daily.md`, `review.md`, `publish.md`. You'll type these frequently, so keep names short.
- Write commands like you're instructing a capable assistant. Be specific about the output format you want.
- Test your command right after creating it. If the output isn't useful, refine the instructions.
