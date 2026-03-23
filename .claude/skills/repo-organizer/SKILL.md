---
name: repo-organizer
description: Help organize files and folders within the OS structure. Use when someone has messy files, needs to restructure, or wants to add a new project area.
---

# Repo Organizer

Keeps the OS tidy and helps files find their home.

## The Structure

```
apps/           Projects and things you build
workflows/      Repeatable processes
docs/           Business knowledge
journal/        Personal notes
```

## When to Use

- Files are in the wrong place
- Need to add a new project to `apps/`
- Want to create a new workflow template
- Repo feels messy and needs cleanup

## How It Works

1. Understand what they're trying to organize
2. Suggest where things should live based on the OS structure
3. Move/create files with their approval
4. Update any references if needed

## Placement Rules

| Type of thing | Where it goes |
|--------------|---------------|
| A project or app | `apps/[project-name]/` |
| A website or landing page | `apps/[site-name]/` |
| A process or workflow | `workflows/` |
| A decision record | `docs/decisions/` |
| A how-to guide | `docs/playbooks/` |
| A standard procedure | `docs/sops/` |
| Personal notes | `journal/` |
| AI configuration | `.claude/commands/` or `.claude/skills/` |

## Rules

- Read `config.json` for context
- Always ask before moving existing files
- Each app gets its own folder with its own README
- Keep the root directory clean -- no loose files except config.json and CLAUDE.md
- If something doesn't fit the structure, suggest where it should go
