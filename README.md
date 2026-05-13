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
/rubric-feedback audience,thesis
/rubric-feedback https://docs.google.com/document/d/<id>/edit
/rubric-feedback "Week 6 Policy Essay" audience
/rubric-feedback https://forum.minerva.edu/app/assignment-grader/<id>
```

### Cursor

```
@rubric-feedback
@rubric-feedback audience,thesis
@rubric-feedback https://docs.google.com/document/d/<id>/edit
```

### Codex / Gemini CLI

```
rubric-feedback
rubric-feedback audience,thesis
rubric-feedback "Week 6 Policy Essay"
```

---

## Architecture

```
Assignment (local PDF or Google Drive)
        │
        ├── Step 2: Scrape past professor feedback (Minerva URLs → Playwright)
        │
        ├── Steps 3–6: Read assignment, detect #rubric tags, load rubric definitions
        │             + load professor feedback
        │
        └── Step 7: 6 parallel agents
                ├── SS Agent   (Sonnet) — Social Science HCs
                ├── AH Agent   (Sonnet) — Art & History HCs
                ├── CS Agent   (Sonnet) — Computer Science HCs
                ├── NS Agent   (Sonnet) — Natural Science HCs
                ├── Grammar    (Haiku)  — grammar errors
                └── Typo       (Haiku)  — typos & spelling
                        │
                        └── Coordinator (Sonnet) → unified CLI output
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

**Cross-disciplinary:**

| Tag | Description |
|-----|-------------|
| `#audience` | Tailor work to the situation and perspective of the receiver |
| `#thesis` | Formulate a well-defined, arguable, and specific thesis |
| `#composition` | Communicate with a clear, precise, parsimonious style |
| `#connotation` | Understand and deliberately use connotations and tone |
| `#constraints` | Identify and apply constraint satisfaction to solve problems |
| `#levelsofanalysis` | Analyze a complex system across multiple levels and interactions |
| `#purpose` | Articulate a mission that connects values, goals, and procedures |

**Discipline-specific:** defined in `references/rubrics/hc_*.md`

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
