# GitHub OS

A starter repo that works as your personal operating system. Clone it, run `/setup`, and you have a structured workspace with AI built in.

## Quick Start

1. Click **"Use this template"** to create your own copy
2. Clone it locally and open with Claude Code, Cursor, or Claude Desktop
3. Run `/setup` to personalize it (or edit `config.json` by hand)
4. Start using `/plan`, `/write`, `/brainstorm`, `/review`, `/ship`

No terminal? Edit `config.json` directly on GitHub.com -- it has instructions inside.

## What's in the Box

```
apps/           Your projects. Each app gets its own folder.
workflows/      Repeatable processes and automations.
docs/           Business docs, SOPs, playbooks, decision logs.
journal/        Daily notes, weekly reflections, whatever you want.
.claude/        Claude-specific commands and skills.
.agents/        Shared agent configs and skills (works with any AI tool).
.github/        Issue templates and GitHub Actions.
```

## Commands

| Command | What it does |
|---------|-------------|
| `/setup` | Interactive interview that configures your OS |
| `/plan` | Break any goal into actionable steps |
| `/brainstorm` | Generate ideas on any topic |
| `/write` | Draft content -- blogs, docs, social, whatever |
| `/review` | Get feedback on your work |
| `/ship` | Pre-launch checklist and deploy guidance |

## How It Works

`config.json` holds your identity -- name, project, goals, how you want AI to talk to you.

`agents.md` tells AI tools how to behave. It reads your config and adapts. Works with Claude, Cursor, Copilot, and others.

`CLAUDE.md` adds Claude-specific configuration on top of agents.md.

`.claude/skills/` and `.agents/skills/` are deep capabilities. Drop in new ones to teach AI new things.

`.claude/commands/` are quick actions. Each one is a markdown file with instructions.

**Skills are just text files.** No code required. Write instructions, drop them in, AI follows them.

## Make It Yours

- Edit `config.json` to change your identity
- Add folders to `apps/` for new projects
- Write your own commands in `.claude/commands/`
- Create workflow templates in `workflows/`
- Use GitHub Issues as your task tracker
- Use GitHub Projects for kanban boards

## License

CC BY-NC 4.0 -- free to use and adapt, just give credit and don't sell it.

## Built by [Torta Studios](https://tortastudios.com)
