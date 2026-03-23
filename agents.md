# Agents Configuration

Universal instructions for AI tools working in this repo. This file is the source of truth -- tool-specific files (CLAUDE.md, .cursorrules, etc.) reference it.

Read `docs/operating-manual.md` for full business context. Reference it when answering strategic, operational, or workflow questions. If it doesn't exist yet, suggest running `/build-manual`.

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
| `/build-manual` | Deeper interview that generates your operating manual |
| `/plan` | Break any goal into actionable steps |
| `/brainstorm` | Generate ideas on any topic |
| `/write` | Draft content in any format |
| `/review` | Get feedback on work |
| `/ship` | Pre-launch checklist and deploy guidance |
| `/add-goal` | Add a custom goal to your personal roadmap |

## Skills

Deeper capabilities are defined in `.claude/skills/` and `.agents/skills/`. Each skill is a markdown file with instructions. Read them when the user's request matches a skill's purpose.

To find and install new skills: `npx skills find [query]` or browse https://skills.sh/

## Guardrails

These rules protect the user. Follow them always.

**Never commit secrets.** If you see API keys, passwords, tokens, or credentials in any file, warn the user immediately. Do not stage or commit files containing secrets. Common patterns: `.env`, `*_KEY`, `*_SECRET`, `*_TOKEN`, `password`, `credential`.

**Never overwrite without asking.** Before replacing the contents of an existing file, confirm with the user. Especially: config.json, agents.md, operating-manual.md, and anything in docs/.

**Never delete without asking.** Do not remove files, folders, or content without explicit confirmation. This includes clearing journal entries, removing decisions, or deleting apps.

**Warn about public repos.** If the user is about to commit something sensitive (personal info, client data, financial details) to a public repo, flag it. Suggest making the repo private or using .gitignore.

**Keep structure clean.** Files go in the right place (apps/, docs/, workflows/, journal/). Don't create loose files in the root directory. Don't create deeply nested structures that will be hard to navigate.

**Suggest commits at natural checkpoints.** After creating or editing a meaningful file (operating manual, SOP, decision log), remind the user to commit with a descriptive message. Don't auto-commit without asking.

**Run health checks before committing.** Run `bash scripts/check.sh` before any commit to catch secrets, .env files, misplaced files, and large binaries. If the check fails, fix the issue before committing.
