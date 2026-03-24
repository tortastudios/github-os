# GitHub OS

A starter repo that works as your personal operating system. Set it up, teach it about your business, and every AI tool you connect becomes genuinely useful.

## Prerequisites

Before you start, install these (all free):

1. **GitHub account** -- [sign up here](https://github.com/signup)
2. **Git** -- [download here](https://git-scm.com/downloads). This is the engine that powers GitHub on your machine.
3. **GitHub Desktop** -- [download here](https://desktop.github.com/). Visual app for Git. No terminal needed.
4. **An AI tool** that can read local files -- [Claude Desktop](https://claude.ai/download), [Claude Code](https://docs.anthropic.com/en/docs/claude-code), or [Cursor](https://cursor.sh/)

## Quick Start

1. Click **"Use this template"** on this repo page -- this creates your own copy under your GitHub account
2. Open **GitHub Desktop**, sign in, and clone your new repo (File > Clone Repository)
3. Open the repo folder in your AI tool
4. Say: *"Help me set up my OS"* (or run `/setup` in Claude Code)
5. Say: *"Help me build my operating manual"* (or run `/build-manual` in Claude Code)
6. Commit your changes in GitHub Desktop with a message like: *"set up my OS and document my business"*

## What's in the Box

```
apps/           Your projects. Each app gets its own folder.
workflows/      Repeatable processes and automations.
docs/           Business docs, SOPs, playbooks, decision logs.
journal/        Daily notes, weekly reflections, whatever you want.
.claude/        Claude-specific commands and skills.
.agents/        Shared agent configs and skills (works with any AI tool).
.github/        Issue templates and GitHub Actions.
scripts/        Health checks and utilities.
```

## Commands and Prompts

Every action works two ways: as a **slash command** in Claude Code, or as a **plain English prompt** in any AI tool.

| Slash command | Or just say... | What it does |
|--------------|----------------|-------------|
| `/setup` | *"Help me set up my OS"* | Interactive interview that configures your OS |
| `/build-manual` | *"Help me build my operating manual"* | Generates your business context doc -- the file that makes AI useful |
| `/plan` | *"Help me plan [goal]"* | Break any goal into actionable steps |
| `/brainstorm` | *"Brainstorm ideas for [topic]"* | Generate ideas scored by effort and impact |
| `/write` | *"Write a [type] about [topic]"* | Draft content -- blogs, docs, social, SOPs |
| `/review` | *"Review [file or idea]"* | Structured feedback: 3 strengths, 3 improvements, next step |
| `/ship` | *"Help me ship [project]"* | Pre-launch checklist and deploy guidance |
| `/add-goal` | *"Add a goal to my roadmap"* | Add a custom goal to your personal roadmap |

## How It Works

`config.json` holds your identity -- name, project, goals, how you want AI to talk to you.

`docs/operating-manual.md` is your business context -- what you do, how you work, your priorities. Every AI tool that reads this repo picks it up automatically.

`agents.md` tells AI tools how to behave. It reads your config and operating manual, then adapts. Works with Claude, Cursor, Copilot, and others.

`.claude/skills/` and `.agents/skills/` are deeper capabilities. Drop in new ones to teach AI new things. Find community skills at [skills.sh](https://skills.sh/) or search with `npx skills find [query]`.

**Skills are just text files.** No code required. Write instructions, drop them in, AI follows them.

## Make It Yours

- Say *"Help me build my operating manual"* to teach AI about your business
- Add folders to `apps/` for new projects
- Create your own commands in `.claude/commands/` (they're just markdown files)
- Say *"Add a goal to my roadmap"* to customize your progress tracker
- Install community skills with `npx skills find [query]`

## Best Practices

**Commit messages matter.** Write what you changed and why. *"Update pricing model after Q1 review"* tells future-you something useful. *"Update file"* does not.

**Never commit secrets.** API keys, passwords, tokens -- keep them out of your repo. Use `.env` files (already in .gitignore) for sensitive values. The health check script (`bash scripts/check.sh`) scans for common mistakes.

**Commit at checkpoints.** Finished an SOP? Commit. Updated your operating manual? Commit. Each commit is a save point you can return to.

**One change per commit.** Don't bundle unrelated changes. If you updated your operating manual AND created a new workflow, that's two commits.

**Review before merging.** When collaborating, use Pull Requests. They create a record of what changed and why, and give others a chance to review.

## License

CC BY-NC 4.0 -- free to use and adapt, just give credit and don't sell it.

## Built by [Torta Studios](https://tortastudios.com)
