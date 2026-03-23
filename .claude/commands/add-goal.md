# /add-goal -- Add a Goal to Your Roadmap

Add a custom node to the user's personal roadmap (my-roadmap.json).

## Process

1. Ask: "What do you want to learn or accomplish?"
2. Ask: "Which track does this belong to?" Show the existing tracks from my-roadmap.json, plus "Create a new track" as an option.
3. Generate a node with:
   - `id`: kebab-case from the title
   - `title`: short, action-oriented
   - `description`: 2-3 sentences explaining what this is and why it matters
   - `tryIt`: a specific prompt they can give their AI tool to get started (format as a code-block-friendly string)
   - `resources`: optional, add if you know of relevant links

4. Add the node to the correct track in `apps/roadmap/data/my-roadmap.json`
5. Confirm what was added.

## If creating a new track

Ask for:
- Track title
- One-line description
- Color (suggest one that doesn't clash with existing tracks)

## Rules

- Read config.json and operating-manual.md for context on what goals would be relevant
- Keep descriptions practical, not aspirational
- The tryIt field should be a prompt they can give any AI tool
- Don't duplicate nodes that already exist in roadmap.json (the base roadmap)
- Don't over-explain. Just add the goal and confirm.
