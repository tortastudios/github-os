# GitHub for Beginners / Vibe Coders

**Duration:** 60 minutes
**Format:** Guided, hands-on
**Audience:** Business operators, creators, vibe coders. Comfortable with AI tools. New to GitHub.
**Deliverable:** Everyone leaves with a configured GitHub OS repo and a personalized operating manual.

---

## Pre-work (sent to attendees in advance)

1. Create a GitHub account at github.com/signup
2. Install Git from git-scm.com/downloads
3. Install an AI tool that reads local files: Claude Desktop, Claude Code, or Cursor

Provide a short email/message with these three steps and links. No other setup needed.

---

## Agenda

### 0:00 - 0:08 | Why GitHub for your business

**Goal:** Answer the fundamental question before touching anything.

Open with a question:

> "How many of you have lost a version of something in Google Drive? Or had someone overwrite your changes in a shared doc?"

Then frame GitHub as the upgrade:

| What you need | Google Drive | GitHub |
|---|---|---|
| Version history | 30 days, no context | Every change, forever, with a note explaining why |
| AI tools read your files | Not natively | Yes -- Claude, Cursor, Copilot all read repos |
| Host a website | No | Free (GitHub Pages) |
| Collaboration with review | Last-save-wins | Pull Requests -- review before merging |
| When you hire a developer | They need to migrate everything | They're already there |

The real pitch:

> "AI tools are built to work with GitHub. When your business docs live in a repo, AI can read everything -- your processes, your decisions, your content -- and actually help you. That's what we're setting up today."

Don't belabor this. 8 minutes max. Get to the hands-on.

---

### 0:08 - 0:15 | Use the template and clone

**Goal:** Everyone has a local copy of the repo.

1. Show the repo on screen: github.com/tortastudios/github-os
2. Everyone clicks **"Use this template"** -- creates their own copy
3. Everyone opens a terminal and runs one command:

```
git clone https://github.com/YOUR-USERNAME/github-os.git
```

Replace YOUR-USERNAME with their GitHub username. Walk through this live. Help anyone stuck.

4. Everyone opens the `github-os` folder in their AI tool

**Facilitator note:** This is the only terminal command in the entire workshop. After this, everything is through their AI tool. If someone can't get the clone working, pair them with a neighbor.

---

### 0:15 - 0:20 | Explore the structure

**Goal:** Orientation before they change anything.

Walk through the repo together. Show each folder and explain in one sentence:

- `apps/` -- "This is where your projects live."
- `docs/` -- "Business knowledge. Decisions, SOPs, playbooks."
- `workflows/` -- "Repeatable processes you document."
- `journal/` -- "Your thinking space. Notes, reflections, ideas."
- `config.json` -- "Your identity. AI reads this to know who you are."
- `agents.md` -- "Instructions for how AI behaves in your repo."

Frame it: "Think of this like your computer's folder structure, but it's also the structure AI uses to understand your business."

---

### 0:20 - 0:22 | Configure your OS

**Goal:** Everyone personalizes config.json.

Everyone says to their AI tool:

> "Help me set up my OS"

The AI runs a 5-question interview. Name, project, stage, 30-day goal, communication preference. Takes about 2 minutes.

**Facilitator note:** Walk the room. Make sure everyone's AI tool is reading the repo files. If someone's AI doesn't seem to have context, they may need to open the folder explicitly in their tool.

---

### 0:22 - 0:35 | Build the operating manual

**Goal:** This is the core deliverable. Everyone creates their business context document.

Everyone says to their AI tool:

> "Help me build my operating manual"

The AI asks 6 questions:
1. What does your business do?
2. How do you make money?
3. Walk me through your typical workflow
4. What tools do you use?
5. What are your top priorities right now?
6. What's one thing that feels broken?

AI generates `docs/operating-manual.md`. Everyone reviews it and edits anything that doesn't sound right.

**This is the value moment.** The operating manual is:
- A real business document they'll reference and share
- The context layer that makes every AI tool smarter about their business
- Proof that documenting your business in GitHub has immediate payoff

Give this the full 13 minutes. Don't rush it.

---

### 0:35 - 0:38 | Commit

**Goal:** Save their work to GitHub.

Everyone says to their AI tool:

> "Commit my changes with the message: set up my OS and document my business"

Or walk them through the three terminal commands:

```
git add -A
git commit -m "set up my OS and document my business"
git push
```

Explain what just happened: "You saved your changes with a description of what you did. Anyone looking at your repo -- including future you -- can see this commit and understand what happened."

Quick contrast: "In Google Drive, a file just silently changes. In GitHub, every change has a timestamp and a reason."

---

### 0:38 - 0:43 | See the payoff

**Goal:** Prove the AI context loop works.

Everyone tries a prompt:

> "Based on my operating manual, what should I focus on this week?"

Or:

> "Help me plan my 30-day goal"

Or:

> "Brainstorm ways to fix the pain point I described in my operating manual"

The AI responds with personalized, context-aware answers because it read their config and operating manual. This is the "it just works" moment.

**Facilitator note:** Call out what's happening. "You answered 6 questions 10 minutes ago. Now every AI tool connected to this repo knows your business. You didn't configure anything -- you just documented your business, and AI configuration was the side effect."

---

### 0:43 - 0:48 | Collaboration basics (demo, not hands-on)

**Goal:** Plant the seed for multiplayer GitHub.

Quick demo from your screen:

**Branches:** "A branch is a copy of your project where you try things without breaking the original. If the experiment works, merge it. If not, delete it."

**Pull Requests:** "When someone wants to change something, they submit a PR. You review the exact changes, line by line, before merging. This is how you prevent the Google Drive problem where someone overwrites your work."

**Merge conflicts:** "When two people edit the same thing, GitHub catches it and asks you to resolve it. Google Drive just silently overwrites. GitHub's approach is better -- it's a feature, not a bug."

Don't make them do this. Just show it. They'll explore this when they're ready (it's in their custom roadmap).

---

### 0:48 - 0:52 | What's next (with prompts)

**Goal:** Show them the path forward without overwhelming.

Show 2-3 things they can do after the workshop, each as a prompt:

**Write an SOP:**
> "Help me write an SOP for [something I do regularly]. Save it to docs/sops/"

**Create a custom command:**
> "Create a command that reviews my journal entries from this week, checks my open issues, and suggests what to focus on next week. Save it to .claude/commands/weekly.md"

**Deploy the roadmap site:**
> "Help me enable GitHub Pages for this repo and deploy the roadmap site"

Frame it: "Every one of these is a prompt you give your AI tool. The repo structure tells AI where to put things. The operating manual gives it context. You just keep asking for what you need."

---

### 0:52 - 0:55 | GitHub social

**Goal:** Build community around the repo.

Everyone goes to the original repo (github.com/tortastudios/github-os):

1. **Star** the repo (helps others find it)
2. **Watch** the repo (get notified when we add new features)
3. Post in **Discussions**: who you are and what you're building

This takes 2 minutes and gives you a living thread of workshop alumni.

---

### 0:55 - 0:58 | The roadmap is your homework

**Goal:** Give them a self-paced path forward.

Show the roadmap site (tortastudios.github.io/github-os or their own deployed version):

> "You completed the first 5 nodes today. The next 5 are things you can do this week -- track a task, write a journal entry, log a decision, document a process, get feedback. Work through them at your own pace. And below that, you'll see expansion tracks you can customize for your own goals."

Mention `/add-goal` (or "say 'Add a goal to my roadmap'") for adding their own nodes.

---

### 0:58 - 1:00 | Close

> "Your business now has an operating system. Every time you commit, it gets a little smarter. Every document you add gives AI more context. The repo is yours -- make it yours."

---

## Facilitator Checklist

**Before the workshop:**
- [ ] Send pre-work email (GitHub account, Git install, AI tool install)
- [ ] Verify template repo is public and "Use this template" button works
- [ ] Have the roadmap site loaded on your screen
- [ ] Have your own configured OS repo ready for demos
- [ ] Test `git clone` works from a fresh account
- [ ] Prepare a screen share with large font / zoom

**During the workshop:**
- [ ] Walk the room during clone step -- this is where people get stuck
- [ ] Walk the room during /build-manual -- make sure AI is reading files
- [ ] Have a backup plan if someone's AI tool can't read local files (they can paste config.json contents into the chat)

**After the workshop:**
- [ ] Enable Discussions on the repo if not already
- [ ] Pin a "Show what you built" discussion thread
- [ ] Follow up with attendees at 1 week (check if they completed Tier 2)

---

## Timing Summary

| Time | Duration | Section |
|------|----------|---------|
| 0:00 | 8 min | Why GitHub for your business |
| 0:08 | 7 min | Use template + clone |
| 0:15 | 5 min | Explore the structure |
| 0:20 | 2 min | Configure your OS |
| 0:22 | 13 min | Build the operating manual |
| 0:35 | 3 min | Commit |
| 0:38 | 5 min | See the payoff |
| 0:43 | 5 min | Collaboration basics (demo) |
| 0:48 | 4 min | What's next (prompts) |
| 0:52 | 3 min | GitHub social |
| 0:55 | 3 min | Roadmap as homework |
| 0:58 | 2 min | Close |
