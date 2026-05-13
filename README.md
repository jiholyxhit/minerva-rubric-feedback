# minerva-rubric-feedback

[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![npm version](https://img.shields.io/npm/v/minerva-rubric-feedback.svg)](https://www.npmjs.com/package/minerva-rubric-feedback)
[![Claude Code](https://img.shields.io/badge/platform-Claude%20Code-blue.svg)](https://docs.claude.com/en/docs/claude-code/overview)
[![Cursor](https://img.shields.io/badge/platform-Cursor-purple.svg)](https://cursor.so)
[![Codex](https://img.shields.io/badge/platform-Codex-black.svg)](https://openai.com/codex)
[![Gemini CLI](https://img.shields.io/badge/platform-Gemini%20CLI-orange.svg)](https://github.com/google-gemini/gemini-cli)

A cross-platform AI plugin that gives structured feedback on rubric (HC / LO) applications in Minerva assignment PDFs or Google Docs.

For each tagged rubric it evaluates three dimensions:
- **(a) Body** — does the body text actually demonstrate the HC, or is the tag performative?
- **(b) Footnote** — Strong / Adequate / Weak, with specific reasoning
- **(c) Past professor feedback** — did you address what was flagged in prior assignments?

**Features:**
- Multi-agent discipline evaluation — AH, CS, NS, SS parallel Sonnet agents
- Grammar and typo checks — parallel Haiku agents
- Google Drive / Docs integration — read assignments by URL or title
- Cross-platform — Claude Code, Cursor, Codex, Gemini CLI

---

## Installation

Run this in your project directory:

```bash
npx minerva-rubric-feedback
```

Installs all platform files automatically:
- **Claude Code**: `.claude/skills/rubric-feedback/` + `CLAUDE.md` + hooks
- **Cursor**: `.cursor/rules/rubric-feedback.mdc`
- **Codex**: `AGENTS.md`
- **Gemini CLI**: `GEMINI.md`

Then install Playwright (needed to scrape past assignment feedback):

```bash
pip install playwright && playwright install chromium
```

---

## Usage

### Claude Code

```bash
claude
```

```
/rubric-feedback
/rubric-feedback audience,thesis,levelsofanalysis
/rubric-feedback https://docs.google.com/document/d/<id>/edit
/rubric-feedback https://docs.google.com/document/d/<id>/edit https://forum.minerva.edu/app/assignment-grader/<id>
/rubric-feedback "Week 6 Policy Essay"
/rubric-feedback "Week 6 Policy Essay" https://forum.minerva.edu/app/assignment-grader/<id>
```

### Cursor

```
@rubric-feedback
@rubric-feedback audience,thesis,levelsofanalysis
@rubric-feedback https://docs.google.com/document/d/<id>/edit
@rubric-feedback https://docs.google.com/document/d/<id>/edit https://forum.minerva.edu/app/assignment-grader/<id>
@rubric-feedback "Week 6 Policy Essay"
@rubric-feedback "Week 6 Policy Essay" https://forum.minerva.edu/app/assignment-grader/<id>
```

### Codex / Gemini CLI

```
rubric-feedback
rubric-feedback audience,thesis,levelsofanalysis
rubric-feedback https://docs.google.com/document/d/<id>/edit
rubric-feedback https://docs.google.com/document/d/<id>/edit https://forum.minerva.edu/app/assignment-grader/<id>
rubric-feedback "Week 6 Policy Essay"
rubric-feedback "Week 6 Policy Essay" https://forum.minerva.edu/app/assignment-grader/<id>
```

---

## Architecture

**Claude Code**
```
Assignment (local PDF or Google Drive)
        │
        ├── [Hook] Grammar  (Haiku) ─── fires before skill, async
        ├── [Hook] Typo     (Haiku) ─── fires before skill, async
        │
        ├── Step 2: Scrape past professor feedback (Minerva URLs → Playwright)
        │
        ├── Steps 3–6: Read assignment, detect #rubric tags, load rubric definitions
        │             + load professor feedback
        │
        └── Step 7: 4 parallel subagents
                ├── AH Agent   (Sonnet) — Arts & Humanities HCs
                ├── CS Agent   (Sonnet) — Computational Sciences HCs
                ├── NS Agent   (Sonnet) — Natural Sciences HCs
                └── SS Agent   (Sonnet) — Social Sciences HCs
                        │
                        └── Coordinator (Sonnet) → unified CLI output
                              (merges discipline results + hook grammar/typo output)
```

**Cursor / Codex / Gemini CLI**
```
Assignment (local PDF or Google Drive)
        │
        ├── Step 2: Scrape past professor feedback (Minerva URLs → Playwright)
        │
        ├── Steps 3–6: Read assignment, detect #rubric tags, load rubric definitions
        │             + load professor feedback
        │
        └── Step 7: 6 parallel subagents
                ├── AH Agent   (Sonnet / Pro)  — Arts & Humanities HCs
                ├── CS Agent   (Sonnet / Pro)  — Computational Sciences HCs
                ├── NS Agent   (Sonnet / Pro)  — Natural Sciences HCs
                ├── SS Agent   (Sonnet / Pro)  — Social Sciences HCs
                ├── Grammar    (Haiku / Flash) — grammar errors
                └── Typo       (Haiku / Flash) — typos & spelling
                        │
                        └── Coordinator (Sonnet / Pro) → unified CLI output
```

---

## Google Drive Setup

Authenticate Google Drive MCP to read assignments from Drive:

- **Claude Code**: `/mcp` → select "claude.ai Google Drive"
- **Cursor**: add to `.cursor/mcp.json`:
  ```json
  {
    "mcpServers": {
      "google-drive": {
        "url": "https://drivemcp.googleapis.com/mcp/v1"
      }
    }
  }
  ```
- **Codex / Gemini**: configure Google Drive OAuth in your MCP client

---

## Supported rubrics

**Cross-disciplinary (M100)**
`#audience` `#thesis` `#composition` `#connotation` `#constraints` `#levelsofanalysis` `#purpose`

**AH — Arts & Humanities**
`#persuasion` `#multimedia` `#designthinking` `#context` `#critique` `#interpretivelens` `#evidencebased` `#sourcequality` `#organization` `#professionalism` `#communicationdesign` `#expression` `#medium`

**CS — Computational Sciences**
`#algorithms` `#optimization` `#confidenceintervals` `#correlation` `#descriptivestats` `#distributions` `#probability` `#regression` `#significance` `#decisiontrees` `#utility` `#gametheory` `#variables` `#deduction` `#fallacies` `#induction` `#estimation`

**NS — Natural Sciences**
`#dataviz` `#casestudy` `#comparisongroups` `#interventionalstudy` `#interviewsurvey` `#observationalstudy` `#sampling` `#studyreplication` `#hypothesisdevelopment` `#modeling` `#analogies` `#heuristics` `#scienceoflearning` `#biasidentification` `#biasmitigation` `#breakitdown` `#gapanalysis` `#rightproblem` `#plausibility` `#testability`

**SS — Social Sciences**
`#shapingbehavior` `#systemmapping` `#emergentproperties` `#complexcausality` `#networks` `#systemdynamics` `#negotiate` `#ethicalconsiderations` `#ethicalcourage` `#ethicaljudgment` `#conformity` `#differences` `#emotionaliq` `#leadprinciples` `#powerdynamics` `#responsibility` `#selfawareness` `#strategize` `#psychologicalexplanation`

To add a new rubric: see [CONTRIBUTING.md](CONTRIBUTING.md).

---

## Requirements

- Node.js ≥ 14 (for `npx`)
- Python 3 + Playwright (for scraping past feedback)
- One of: Claude Code, Cursor, Codex, or Gemini CLI

---

## Project structure after install

```
your-project/
├── assignment/                          ← drop your PDF here
├── scripts/
│   └── scrape-feedback.py
├── .claude/
│   ├── settings.json                    ← hooks (grammar/typo agents)
│   └── skills/rubric-feedback/
│       ├── SKILL.md
│       ├── agents/
│       │   ├── discipline-agent.md
│       │   └── coordinator-agent.md
│       └── references/
│           ├── rubrics/                 ← HC definitions
│           └── past-assignments/        ← auto-generated by scraper
├── .cursor/rules/rubric-feedback.mdc   ← Cursor
├── AGENTS.md                            ← Codex
├── GEMINI.md                            ← Gemini CLI
└── CLAUDE.md                            ← context compaction rules
```
