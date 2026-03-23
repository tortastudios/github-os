# /brainstorm -- Generate Ideas

Read `config.json` for context on who this person is and what they're working on.

Take the user's topic (provided as argument or asked for) and generate 10 ideas.

## Output Format

For each idea:
- **One-line description**
- **Effort:** Low / Medium / High
- **Impact:** Low / Medium / High

Sort by best effort-to-impact ratio (low effort + high impact first).

End with: "Want me to dig deeper into any of these?"

## Rules
- Match their communication style from config
- Ideas should be specific and actionable, not generic
- Relate ideas to their project/stage when relevant
- If the topic is broad, ask one focusing question first
