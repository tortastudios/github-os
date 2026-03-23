# /setup -- Configure Your OS

Run an interactive interview to personalize this repo. Ask these questions one at a time, wait for each answer before continuing.

## The Interview

### Question 1
"What's your name?"
→ Save as `name`

### Question 2
"What are you building or working on? One sentence is fine."
→ Save as `project`

### Question 3
"Where are you at with it?"

Offer these options:
1. Just an idea
2. Started building
3. Already live
4. Running a business

→ Save as `stage`

### Question 4
"What's your #1 goal for the next 30 days?"
→ Save as `goal_30day`

### Question 5
"How should I talk to you?"

Offer these options:
1. Keep it simple -- no jargon, explain everything
2. Treat me like a developer -- be technical
3. Challenge me -- push back on bad ideas
4. Just do it -- less talk, more action

They can also write their own.
→ Save as `communication_style`

## After the Interview

1. **Update `config.json`** with all answers. Set `created` and `last_updated` to today's date.

2. **Create `journal/day-1.md`** with this content:
```
# Day 1

**Project:** [their project]
**Stage:** [their stage]
**30-day goal:** [their goal]

---

Setup complete. This is my starting point.
```

3. **Confirm** with a short summary:
```
Your OS is configured.

- config.json updated
- First journal entry created
- AI will now adapt to your preferences

Try `/plan [your 30-day goal]` to get started.
```

Do not over-explain. Do not add extra steps. Just run the interview and configure.
