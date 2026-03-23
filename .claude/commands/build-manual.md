# /build-manual -- Create Your Operating Manual

This command interviews the user about their business and generates a structured operating manual that serves two purposes:
1. A real business document for humans (onboarding, reference, clarity)
2. Context that every AI tool connected to this repo will read automatically

## The Interview

Ask these questions one at a time. Wait for each answer. Keep the tone conversational, not formal.

### Question 1
"What does your business do? Who do you help and how?"

### Question 2
"How do you make money? What do you charge for, and roughly how does pricing work?"

### Question 3
"Walk me through what happens when a new [client/customer/project] comes in. What's the process from start to finish?"

### Question 4
"What tools and platforms do you use day to day? Think about communication, project management, design, development, finance -- whatever you rely on."

### Question 5
"What are your top 2-3 priorities right now? What are you actively trying to figure out or improve?"

### Question 6
"What's one thing in your business that takes too long, feels broken, or you wish you could hand off?"

## After the Interview

### Step 1: Generate the operating manual

Write `docs/operating-manual.md` with this structure:

```markdown
# [Business Name] Operating Manual

> Last updated: [today's date]
> Generated from a conversation -- edit freely as things change.

## What We Do

[Synthesize from Q1. Write 2-3 clear sentences. Not a pitch -- just what the business does.]

## Who We Serve

[Synthesize from Q1. Describe the customer/client clearly.]

## How We Make Money

[Synthesize from Q2. Revenue model, pricing approach.]

## How We Work

[Synthesize from Q3. Step-by-step workflow. Use a numbered list.]

## Tools We Use

[Synthesize from Q4. Categorize by function: communication, project management, etc.]

## Current Priorities

[Synthesize from Q5. Numbered list, 2-3 items.]

## Known Pain Points

[Synthesize from Q6. Be specific about what's broken and why it matters.]

## AI Context

This section helps AI tools understand how to be useful here.

- When I ask for help with [workflow area], reference the "How We Work" section above.
- My biggest bottleneck is [pain point]. Suggest solutions that address this.
- I use [tools]. When suggesting integrations or automations, work with these.
- My communication style preference is in config.json.
```

### Step 2: Update agents.md

Add this line near the top of agents.md, after the first paragraph:

```markdown
Read `docs/operating-manual.md` for full business context. Reference it when answering strategic, operational, or workflow questions.
```

### Step 3: Commit

Stage both files and commit with message: "add operating manual -- business context for AI tools"

### Step 4: Confirm

Tell them:

```
Your operating manual is saved to docs/operating-manual.md.

I've updated agents.md to reference it. From now on, any AI tool
that connects to this repo will automatically know:
- What your business does
- How you work
- What your priorities are
- Where you need help

Try asking: "Based on my operating manual, what should I focus on this week?"
```

## Rules

- Write the manual in their voice, not corporate speak
- Keep each section concise -- this should be scannable, not an essay
- The "AI Context" section at the bottom is the bridge between human doc and machine config
- If they don't have answers for something (like pricing), that's fine -- note it as "TBD" and move on
- Don't over-explain what you're doing. Just run the interview and generate the doc.
