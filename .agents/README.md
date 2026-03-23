# Agents

Configuration for AI tools beyond Claude. Drop tool-specific config files here.

## Structure

```
.agents/
├── skills/          Shared skills any AI tool can use
└── README.md        This file
```

## How It Works

`agents.md` in the repo root is the universal config -- it works across AI tools.

Tool-specific files go in their expected locations:
- Claude: `.claude/commands/` and `.claude/skills/`
- Cursor: `.cursorrules`
- Copilot: `.github/copilot-instructions.md`

Skills in `.agents/skills/` use the same markdown format as Claude skills and can be referenced by any AI tool that reads repo context.
