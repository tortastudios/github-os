# Keep a Decision Log

A decision log records what you decided, when, and why. Six months from now when you ask "why did we do it this way?" the answer is in the log. It prevents revisiting the same debates and gives context to anyone joining later.

## How to do it

1. Create a `docs/decisions/` folder in your repo
2. Start with a template file: `000-template.md`
3. For each decision, copy the template and number it: `001-use-github-pages.md`
4. Fill in the context, decision, and reasoning
5. Commit it to your repo

## Try it

```markdown
Save this as docs/decisions/001-hosting-choice.md:

# 001: Use GitHub Pages for Hosting

## Date
2026-03-23

## Status
Accepted

## Context
We need a simple way to host a static website without managing servers or paying for hosting.

## Decision
Use GitHub Pages. It's free, deploys automatically on push, and supports custom domains.

## Consequences
- Free hosting with no maintenance
- Limited to static sites (no server-side code)
- Tied to GitHub as a platform
```

## Resources

- [Architecture Decision Records](https://adr.github.io/)

## Tips

- Number decisions sequentially so they're easy to reference ("see decision 003").
- Don't overthink it. Even a two-sentence entry is better than nothing.
- Record decisions when you make them, not weeks later when you've forgotten the reasoning.
