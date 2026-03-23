# Add Your First Skill

Skills are deeper capabilities stored in `.claude/skills/`. Each skill is a folder with a `SKILL.md` file that teaches your AI tool how to do something specific -- like following a writing style, running a deployment process, or reviewing content against brand guidelines.

## How to do it

1. Look at the existing skills in `.claude/skills/` to see the format
2. Create a new folder: `.claude/skills/your-skill-name/`
3. Create a `SKILL.md` file inside it
4. Write instructions the AI should follow when this skill is relevant
5. Commit and push

## Try it

```markdown
Save this as .claude/skills/content-review/SKILL.md:

# Content Review Skill

When asked to review content, follow these steps:

1. Check for spelling and grammar errors
2. Verify the tone matches our brand (professional but approachable)
3. Ensure every claim has supporting context
4. Flag anything that's unclear to a first-time reader
5. Suggest specific improvements, not just "make it better"

## Output format

- Start with what's working well (1-2 sentences)
- List specific issues with line references
- End with the single highest-impact improvement
```

## Resources

- [Claude Code skills](https://docs.anthropic.com/en/docs/claude-code/skills)

## Tips

- Skills work best when they're specific. "Help me write" is too broad. "Review blog posts for our target audience of small business owners" is useful.
- Your AI tool picks up skills automatically based on context. You don't need to explicitly invoke them.
