# GitHub OS

A starter repo that works as your personal operating system. Clone it, run `/setup`, and you have a structured workspace with AI built in.

## Quick Start

1. Click **"Use this template"** to create your own copy
2. Clone it locally and open with Claude Code, Cursor, or Claude Desktop
3. Run `/setup` to personalize it (or edit `config.json` by hand)
4. Run `/build-manual` to create your operating manual
5. Start using `/plan`, `/write`, `/brainstorm`, `/review`, `/ship`

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
| `/build-manual` | Deeper interview that generates your operating manual -- the context layer for all AI tools |
| `/plan` | Break any goal into actionable steps |
| `/brainstorm` | Generate ideas on any topic |
| `/write` | Draft content -- blogs, docs, social, whatever |
| `/review` | Get feedback on your work |
| `/ship` | Pre-launch checklist and deploy guidance |
| `/add-goal` | Add a custom goal to your personal roadmap |

## How It Works

`config.json` holds your identity -- name, project, goals, how you want AI to talk to you.

`docs/operating-manual.md` is your business context -- what you do, how you work, your priorities. Every AI tool that connects to this repo reads it automatically.

`agents.md` tells AI tools how to behave. It reads your config and operating manual, then adapts. Works with Claude, Cursor, Copilot, and others.

`CLAUDE.md` adds Claude-specific configuration on top of agents.md.

`.claude/skills/` and `.agents/skills/` are deep capabilities. Drop in new ones to teach AI new things. Find community skills at [skills.sh](https://skills.sh/) or search with `npx skills find [query]`.

`.claude/commands/` are quick actions. Each one is a markdown file with instructions.

**Skills are just text files.** No code required. Write instructions, drop them in, AI follows them.

## Make It Yours

- Run `/build-manual` to teach AI about your business
- Add folders to `apps/` for new projects
- Write your own commands in `.claude/commands/`
- Create workflow templates in `workflows/`
- Install community skills with `npx skills find [query]`

## Best Practices

**Commit messages matter.** Write what you changed and why. "Update pricing model after Q1 review" tells future-you something useful. "Update file" does not.

**Never commit secrets.** API keys, passwords, tokens -- keep them out of your repo. Use `.env` files (already in .gitignore) for sensitive values.

**Commit at checkpoints.** Finished an SOP? Commit. Updated your operating manual? Commit. Each commit is a save point you can return to.

**One change per commit.** Don't bundle unrelated changes. If you updated your operating manual AND created a new workflow, that's two commits.

**Review before merging.** When collaborating, use Pull Requests. They create a record of what changed and why, and give others a chance to review.

## License

CC BY-NC 4.0 -- free to use and adapt, just give credit and don't sell it.

## Built by [Torta Studios](https://tortastudios.com)
