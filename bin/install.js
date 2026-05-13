#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const PKG_ROOT = path.join(__dirname, '..');
const CWD = process.cwd();

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.name === '.gitkeep') continue;
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function copyFile(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

function exists(p) {
  return fs.existsSync(p);
}

// Detect platforms present in the target directory
const isCursor = exists(path.join(CWD, '.cursor')) || exists(path.join(CWD, '.cursorrules'));
const isGemini = exists(path.join(CWD, 'GEMINI.md')) || process.env.GEMINI_CLI;
const isCodex  = exists(path.join(CWD, 'AGENTS.md')) || process.env.OPENAI_API_KEY;

console.log('Installing minerva-rubric-feedback v2.0.0...\n');

// ── Claude Code (always installed) ──────────────────────────────────────────

const skillSrc  = path.join(PKG_ROOT, '.claude', 'skills', 'rubric-feedback');
const skillDest = path.join(CWD, '.claude', 'skills', 'rubric-feedback');
copyDir(skillSrc, skillDest);
console.log('✓  .claude/skills/rubric-feedback/  (Claude Code)');

// settings.json — merge hooks rather than overwrite
const settingsSrc  = path.join(PKG_ROOT, '.claude', 'settings.json');
const settingsDest = path.join(CWD, '.claude', 'settings.json');
if (!exists(settingsDest)) {
  copyFile(settingsSrc, settingsDest);
  console.log('✓  .claude/settings.json            (Claude Code hooks)');
} else {
  console.log('·  .claude/settings.json already exists — skipped (merge hooks manually if needed)');
}

// CLAUDE.md — only if not already present
const claudeMdSrc  = path.join(PKG_ROOT, 'CLAUDE.md');
const claudeMdDest = path.join(CWD, 'CLAUDE.md');
if (!exists(claudeMdDest)) {
  copyFile(claudeMdSrc, claudeMdDest);
  console.log('✓  CLAUDE.md                        (Claude Code context instructions)');
} else {
  console.log('·  CLAUDE.md already exists — skipped');
}

// ── Scrape script (all platforms) ───────────────────────────────────────────

const scriptSrc  = path.join(PKG_ROOT, 'scripts', 'scrape-feedback.py');
const scriptsDest = path.join(CWD, 'scripts');
fs.mkdirSync(scriptsDest, { recursive: true });
fs.copyFileSync(scriptSrc, path.join(scriptsDest, 'scrape-feedback.py'));
console.log('✓  scripts/scrape-feedback.py       (Minerva feedback scraper)');

// ── assignment/ directory ────────────────────────────────────────────────────

const assignmentDir = path.join(CWD, 'assignment');
if (!exists(assignmentDir)) {
  fs.mkdirSync(assignmentDir);
  console.log('✓  assignment/                      (drop PDFs here)');
} else {
  console.log('·  assignment/ already exists — skipped');
}

// ── Cursor ───────────────────────────────────────────────────────────────────

const cursorSrc  = path.join(PKG_ROOT, '.cursor', 'rules', 'rubric-feedback.mdc');
const cursorDest = path.join(CWD, '.cursor', 'rules', 'rubric-feedback.mdc');
if (!exists(cursorDest)) {
  copyFile(cursorSrc, cursorDest);
  console.log('✓  .cursor/rules/rubric-feedback.mdc (Cursor)');
} else {
  console.log('·  .cursor/rules/rubric-feedback.mdc already exists — skipped');
}

// ── Codex ────────────────────────────────────────────────────────────────────

const agentsSrc  = path.join(PKG_ROOT, 'AGENTS.md');
const agentsDest = path.join(CWD, 'AGENTS.md');
if (!exists(agentsDest)) {
  copyFile(agentsSrc, agentsDest);
  console.log('✓  AGENTS.md                        (Codex)');
} else {
  console.log('·  AGENTS.md already exists — skipped');
}

// ── Gemini CLI ───────────────────────────────────────────────────────────────

const geminiSrc  = path.join(PKG_ROOT, 'GEMINI.md');
const geminiDest = path.join(CWD, 'GEMINI.md');
if (!exists(geminiDest)) {
  copyFile(geminiSrc, geminiDest);
  console.log('✓  GEMINI.md                        (Gemini CLI)');
} else {
  console.log('·  GEMINI.md already exists — skipped');
}

// ── Next steps ───────────────────────────────────────────────────────────────

console.log(`
Done. Next steps:

  1. Install Playwright (needed to scrape past assignment feedback):

       pip install playwright && playwright install chromium

  2. Authenticate Google Drive MCP (for Drive-sourced assignments):

       Claude Code : /mcp → select "claude.ai Google Drive"
       Cursor      : add Google Drive MCP to .cursor/mcp.json
       Codex/Gemini: configure Google Drive OAuth in your MCP client

  3. Drop your assignment PDF into ./assignment/  (or use a Google Docs URL)

  4. Run rubric feedback:

       Claude Code : /rubric-feedback
       Cursor      : @rubric-feedback
       Codex/Gemini: rubric-feedback

       With Google Docs:
         /rubric-feedback https://docs.google.com/document/d/<id>/edit
         /rubric-feedback "Assignment Title"

       With past feedback:
         /rubric-feedback https://forum.minerva.edu/app/assignment-grader/<id>
`);
