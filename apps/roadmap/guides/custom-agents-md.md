# Understand agents.md and CLAUDE.md

agents.md is the universal config that tells any AI tool how to behave in your repo. CLAUDE.md adds Claude-specific features on top. Together, they're like onboarding docs for your AI assistant. Edit them to change how AI helps you.

## How to do it

1. Open agents.md in your repo root
2. Read through the sections -- notice how it describes behavior, context, and rules
3. Open CLAUDE.md and see how it builds on agents.md with Claude-specific features
4. Add a line under "Behavior" in agents.md that reflects how you like to work
5. Commit the change

## Try it

```
Open agents.md and add one line under "Behavior" that reflects how you work. Example: "- When I ask for help with writing, draft the full piece instead of an outline."
```

## Resources

- [agents.md](https://github.com/tortastudios/github-os/blob/main/agents.md)
- [CLAUDE.md best practices](https://docs.anthropic.com/en/docs/claude-code/memory#claudemd)

## Tips

- agents.md works with any AI tool. CLAUDE.md is Claude-specific. Put universal preferences in agents.md.
- Be specific. "Be helpful" tells the AI nothing. "Always include a concrete next step" changes behavior.
