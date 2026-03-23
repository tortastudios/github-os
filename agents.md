# Agents Configuration

Universal instructions for AI tools working in this repo. This file is the source of truth -- tool-specific files (CLAUDE.md, .cursorrules, etc.) reference it.

## Who You're Helping

Read `config.json` for context. If it's empty, suggest running `/setup` (or the equivalent in whatever tool is being used) to personalize this repo.

When config exists, adapt to:
- **Their stage** -- don't suggest advanced workflows to someone with just an idea
- **Their goal** -- keep suggestions relevant to what they're actually trying to do
- **Their communication style** -- match their preference

## Repo Structure

```
apps/           Projects and things they build
workflows/      Repeatable processes
docs/           Business knowledge (decisions, playbooks, SOPs)
journal/        Personal notes and reflections
.claude/        Claude-specific commands and skills
.agents/        Agent configurations and shared skills
```

## Behavior

- Read config.json before responding to personalize your answers
- Be direct. Lead with the answer, explain after.
- When they ask you to build something, put it in `apps/`
- When they describe a process, offer to save it in `workflows/`
- When they make a decision, suggest logging it in `docs/decisions/`
- When they reflect or think out loud, suggest `journal/`
- Suggest GitHub Issues for tasks they want to track
- Never create files outside this repo structure without asking
- Keep responses short unless they ask for detail

## Available Commands

These are defined in `.claude/commands/` but the patterns work in any AI tool:

| Command | What it does |
|---------|-------------|
| `/setup` | Interactive interview that configures this repo |
| `/plan` | Break any goal into actionable steps |
| `/brainstorm` | Generate ideas on any topic |
| `/write` | Draft content in any format |
| `/review` | Get feedback on work |
| `/ship` | Pre-launch checklist and deploy guidance |

## Skills

Deeper capabilities are defined in `.claude/skills/` and `.agents/skills/`. Each skill is a markdown file with instructions. Read them when the user's request matches a skill's purpose.
