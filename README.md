# GitHub OS

A starter repo that works as your personal operating system. Set it up, teach it about your business, and every AI tool you connect becomes genuinely useful.

## Prerequisites

Before you start, install these (all free):

1. **GitHub account** -- [sign up here](https://github.com/signup)
2. **Git** -- [download here](https://git-scm.com/downloads). This is the engine that powers GitHub on your machine.
3. **An AI tool** that can read local files -- [Claude Desktop](https://claude.ai/download), [Claude Code](https://docs.anthropic.com/en/docs/claude-code), or [Cursor](https://cursor.sh/)

## Quick Start

1. Click **"Use this template"** on this repo page -- this creates your own copy under your GitHub account
2. Clone your new repo by opening a terminal and running:
   ```
   git clone https://github.com/YOUR-USERNAME/github-os.git
   ```
   Replace `YOUR-USERNAME` with your GitHub username. This downloads the repo to your computer.
3. Open the `github-os` folder in your AI tool
4. Say: *"Help me set up my OS"*
5. Say: *"Help me build my operating manual"*
6. When you're ready to save, say: *"Commit my changes with the message: set up my OS and document my business"*

That last step saves your work to GitHub with a description of what changed. You'll do this every time you make meaningful changes.

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

Every action works two ways: as a **plain English prompt** in any AI tool, or as a **slash command** in Claude Code.

| Say this to your AI tool | Or in Claude Code | What it does |
|--------------------------|-------------------|-------------|
| *"Help me set up my OS"* | `/setup` | Interactive interview that configures your OS |
| *"Help me build my operating manual"* | `/build-manual` | Generates your business context doc -- the file that makes AI useful |
| *"Help me plan [goal]"* | `/plan` | Break any goal into actionable steps |
| *"Brainstorm ideas for [topic]"* | `/brainstorm` | Generate ideas scored by effort and impact |
| *"Write a [type] about [topic]"* | `/write` | Draft content -- blogs, docs, social, SOPs |
| *"Review [file or idea]"* | `/review` | Structured feedback: 3 strengths, 3 improvements, next step |
| *"Help me ship [project]"* | `/ship` | Pre-launch checklist and deploy guidance |
| *"Add a goal to my roadmap"* | `/add-goal` | Add a custom goal to your personal roadmap |

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

## Saving Your Work

Every time you make meaningful changes, save them to GitHub:

```
git add -A
git commit -m "describe what you changed"
git push
```

Or just ask your AI tool: *"Commit my changes with the message: [what you did]"*

**Commit messages matter.** Write what you changed and why. *"Update pricing model after Q1 review"* tells future-you something useful. *"Update file"* does not.

**Never commit secrets.** API keys, passwords, tokens -- keep them out of your repo. Use `.env` files (already in .gitignore) for sensitive values.

**One change per commit.** Don't bundle unrelated changes. If you updated your operating manual AND created a new workflow, that's two commits.

## License

CC BY-NC 4.0 -- free to use and adapt, just give credit and don't sell it.

## Built by [Torta Studios](https://tortastudios.com)
