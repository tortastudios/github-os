# GitHub OS - Claude Configuration

Read `agents.md` for universal instructions that apply across all AI tools.

Everything below is Claude-specific.

## Commands

Slash commands are defined in `.claude/commands/`:

- `/setup` -- Interactive interview to configure this OS
- `/plan` -- Break a goal into phases and steps
- `/brainstorm` -- Generate ideas, score on effort vs. impact
- `/write` -- Draft content in any format
- `/review` -- Give feedback: 3 strengths, 3 improvements, next step
- `/ship` -- Pre-launch checklist and deployment help

## Skills

Deep capabilities in `.claude/skills/`:

- **project-planner** -- Break projects into structured phases
- **code-reviewer** -- Review any work product with structured feedback
- **deploy-guide** -- Get projects live on the internet
- **repo-organizer** -- Keep the OS tidy, files in the right place

Also check `.agents/skills/` for shared skills usable by any AI tool.
