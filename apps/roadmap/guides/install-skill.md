# Install a Community Skill

The skills ecosystem has hundreds of pre-built capabilities you can add to your OS. Each skill teaches your AI tool something new -- how to review code, write documentation, optimize performance, or follow specific frameworks.

## How to do it

1. Search for what you need: `npx skills find [topic]`
2. Review the results and pick one that fits
3. Install it: `npx skills add [package-name] -y`
4. The skill appears in your `.claude/skills/` folder
5. AI tools pick it up automatically on next interaction

## Try it

```
npx skills find [something you need help with]
```

## Resources

- [Browse all skills](https://skills.sh/)

## Tips

- Search with specific terms. "react performance" works better than just "performance."
- Read the skill's SKILL.md after installing to understand what it does and when it activates.
- Skills are just text files. If one doesn't work exactly how you want, edit the SKILL.md to customize it.
