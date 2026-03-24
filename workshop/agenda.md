# GitHub for Beginners / Vibe Coders

**Duration:** 60 minutes
**Format:** Guided, hands-on
**Audience:** Business operators, creators, vibe coders. Comfortable with AI tools. New to GitHub.
**Deliverable:** Everyone leaves with a configured GitHub OS repo and a personalized operating manual.
**Structure:** 47 min guided content + 13 min Q&A

---

## Pre-work (sent to attendees in advance)

1. Create a GitHub account at github.com/signup
2. Install Git from git-scm.com/downloads
3. Install an AI tool that reads local files: Claude Desktop, Claude Code, or Cursor

Provide a short email/message with these three steps and links. No other setup needed.

---

## Agenda

### 0:00 - 0:06 | Why GitHub for your business

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

Don't belabor this. 6 minutes. Get to the hands-on.

---

### 0:06 - 0:13 | Use the template and clone

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

### 0:13 - 0:16 | Explore the structure

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

### 0:16 - 0:18 | Configure your OS

**Goal:** Everyone personalizes config.json.

Everyone says to their AI tool:

> "Help me set up my OS"

The AI runs a 5-question interview. Name, project, stage, 30-day goal, communication preference. Takes about 2 minutes.

**Facilitator note:** Walk the room. Make sure everyone's AI tool is reading the repo files. If someone's AI doesn't seem to have context, they may need to open the folder explicitly in their tool.

---

### 0:18 - 0:31 | Build the operating manual

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

### 0:31 - 0:34 | Commit

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

### 0:34 - 0:39 | See the payoff

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

### 0:39 - 0:42 | Collaboration basics (demo, not hands-on)

**Goal:** Plant the seed for multiplayer GitHub. 3 minutes, 3 concepts.

**Branches:** "A branch lets you try things without breaking the original. If it works, merge it. If not, delete it."

**Pull Requests:** "Someone wants to change something? They submit a PR. You review the exact changes before merging. No more silent overwrites."

**Merge conflicts:** "Two people edit the same thing? GitHub catches it and asks you to resolve it together. Google Drive just lets the last person win."

Demo from your screen. Don't make them do this -- it's in their custom roadmap for later.

---

### 0:42 - 0:44 | What's next (prompts on screen)

**Goal:** Show the path forward. Don't narrate -- put these on screen and let them read.

> "Help me write an SOP for [something I do regularly]. Save it to docs/sops/"

> "Create a command that reviews my journal entries from this week and suggests what to focus on next week. Save it to .claude/commands/weekly.md"

> "Help me enable GitHub Pages for this repo and deploy the roadmap site"

One sentence: "Every one of these is a prompt. The repo tells AI where to put things. You just keep asking."

---

### 0:44 - 0:47 | GitHub social + roadmap + close

**Goal:** Community, homework, done.

Everyone goes to the original repo (github.com/tortastudios/github-os):
- **Star** the repo
- **Watch** it
- Post in **Discussions**: who you are, what you're building

Then show the roadmap site:

> "You completed the first 5 nodes today. The next 5 are your homework this week. Below that, expansion tracks you can customize. Say 'Add a goal to my roadmap' to make it yours."

Close:

> "Your business has an operating system. Every commit makes it smarter. The repo is yours -- make it yours."

---

### 0:47 - 1:00 | Q&A

**Goal:** Let the room drive. Answer what they actually need.

Common questions to prepare for:

- **"Can I use this with [specific AI tool]?"** -- Yes, any tool that reads local files. agents.md is the universal config.
- **"What if I break something?"** -- Git tracks every change. You can always go back. Show `git log` briefly.
- **"Can I make my repo private?"** -- Yes. Settings > General > Danger Zone > Change visibility.
- **"How do I get my team on this?"** -- Settings > Collaborators. They clone, they're in. PRs for review.
- **"What about sensitive business info?"** -- Make the repo private. Never commit passwords or API keys. The .gitignore and health check script catch common mistakes.
- **"Can I use this for [specific use case]?"** -- Probably yes. The structure is flexible. Ask your AI tool how to set it up.

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
| 0:00 | 6 min | Why GitHub for your business |
| 0:06 | 7 min | Use template + clone |
| 0:13 | 3 min | Explore the structure |
| 0:16 | 2 min | Configure your OS |
| 0:18 | 13 min | Build the operating manual |
| 0:31 | 3 min | Commit |
| 0:34 | 5 min | See the payoff |
| 0:39 | 3 min | Collaboration basics (demo) |
| 0:42 | 2 min | What's next (prompts) |
| 0:44 | 3 min | GitHub social + roadmap + close |
| 0:47 | 13 min | Q&A |
