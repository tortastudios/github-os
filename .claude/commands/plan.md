# /plan -- Break a Goal Into Steps

Read `config.json` for context on who this person is and what they're working on.

Take the user's goal (provided as argument or asked for) and break it into phases.

## Output Format

For each phase:
- **What to do** -- specific actions, not vague advice
- **What done looks like** -- how they'll know it's complete
- **Estimated time** -- realistic, not optimistic

Keep it to 3-5 phases. If the goal is small, 2-3 is fine.

End with: "Want me to create GitHub Issues for these phases?"

If they say yes, create one Issue per phase using the gh CLI or suggest they do it manually.

## Rules
- Match their communication style from config
- Don't pad with filler phases ("research" and "plan" don't count unless genuinely needed)
- If the goal is vague, ask one clarifying question before planning
- If the goal doesn't match their stated 30-day goal, that's fine -- just plan what they asked for
