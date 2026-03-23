# Use Slash Commands

Slash commands are quick actions defined in your repo's `.claude/commands/` folder. Each command is a markdown file with instructions that your AI tool follows when you type its name. Your repo comes with built-in commands like `/plan`, `/write`, and `/review`.

## How to do it

1. Open your repo in an AI tool that supports slash commands (like Claude Code)
2. Type `/` to see available commands
3. Pick a command and add your input after it
4. The AI follows the instructions defined in that command's markdown file

## Try it

```
In your AI tool, try these commands:

/plan Launch a simple landing page for my business by end of month

/write A one-paragraph description of my business for the About page

/review Look at my README and suggest improvements
```

## Resources

- [Custom slash commands](https://docs.anthropic.com/en/docs/claude-code/slash-commands)

## Tips

- Commands are just markdown files. Open `.claude/commands/` in your repo to read what each one does.
- The power of commands comes from combining your CLAUDE.md context with specific instructions. The AI knows about your business AND what task format to follow.
- You can chain commands: use `/plan` first to break down a goal, then `/write` to draft each piece.
