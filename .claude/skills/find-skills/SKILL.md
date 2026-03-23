---
name: find-skills
description: Discover and install agent skills to extend your OS. Use when someone asks "how do I do X", "find a skill for X", "can you help with X", or wants to add new capabilities.
---

# Find Skills

Search the open skills ecosystem and install new capabilities into your OS.

## When to Use

- User asks "how do I do X" where a skill might exist
- User says "find a skill for" or "is there a skill for"
- User wants to extend what AI can do in their repo
- User finishes a task and a skill could automate it next time

## How to Search

```bash
npx skills find [query]
```

Examples:
- "I need help writing proposals" → `npx skills find proposal writing`
- "Can you review my code?" → `npx skills find code review`
- "I want to automate my deploys" → `npx skills find deployment`

Browse all available skills at: https://skills.sh/

## How to Install

```bash
npx skills add <owner/repo@skill> -y
```

This downloads the skill into `.claude/skills/` where AI tools pick it up automatically.

## When Nothing Matches

If no existing skill fits:
1. Say so honestly
2. Offer to help directly with general capabilities
3. Suggest they create their own skill -- it's just a markdown file:

```bash
# Create a new skill manually
mkdir -p .claude/skills/my-skill
# Then write a SKILL.md inside it with instructions
```

Or use the skills CLI:
```bash
npx skills init my-skill
```

## Common Searches

| Need | Search |
|------|--------|
| Writing help | `npx skills find writing content` |
| Code review | `npx skills find review` |
| Deployment | `npx skills find deploy` |
| Design | `npx skills find design ui` |
| Testing | `npx skills find testing` |
| SEO | `npx skills find seo` |
| Documentation | `npx skills find docs readme` |
