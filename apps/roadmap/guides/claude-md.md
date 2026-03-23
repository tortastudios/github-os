# Understand CLAUDE.md

CLAUDE.md is a plain text file that configures how AI tools behave in your repo. It tells AI assistants who you are, what you're working on, what your preferences are, and how to help. Think of it as onboarding instructions -- the same way you'd brief a new team member.

## How to do it

1. Open the `CLAUDE.md` file in the root of your repo
2. Read through the existing sections
3. Edit the sections to match your situation -- your business, your goals, your preferences
4. Commit your changes
5. Open the repo in any AI coding tool and it will automatically read this file

## Try it

```markdown
Add a section like this to your CLAUDE.md:

## About Me
I run a small [your industry] business. I'm comfortable with [your skill level]
but new to GitHub. When I ask for help, keep explanations simple and practical.

## My Preferences
- Keep responses short and actionable
- Show me terminal commands I can copy-paste
- Explain technical terms when you use them
```

## Resources

- [CLAUDE.md best practices](https://docs.anthropic.com/en/docs/claude-code/memory#claudemd)

## Tips

- The more specific your CLAUDE.md, the better AI tools will help you. "I run a bakery" is more useful than "I run a business."
- Update it as your needs change. It's a living document, not a one-time setup.
- Any AI tool that supports repo-level context files will benefit from this, even if they call it something different.
