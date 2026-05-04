#!/usr/bin/env node
// Remove code-deck-style visual noise from blog posts:
// 1. *"..."* → "..."
// 2. ***"..."*** → "..."
// 3. ***...*** (triple-star bold) → **...** (regular bold)
// 4. Em-dash bullet patterns kept (substantive)
// 5. Skip code blocks and Formula JSX bodies

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const POSTS = path.join(__dirname, "..", "src", "content", "posts");

const files = fs.readdirSync(POSTS).filter((f) => f.endsWith(".mdx"));
let touched = 0;

for (const file of files) {
  const full = path.join(POSTS, file);
  const raw = fs.readFileSync(full, "utf8");

  // Skip frontmatter
  const fmMatch = raw.match(/^---\n[\s\S]*?\n---\n/);
  const fm = fmMatch ? fmMatch[0] : "";
  let body = fm ? raw.slice(fm.length) : raw;

  // Protect code blocks and Formula JSX content
  const placeholders = [];
  body = body.replace(/<Formula>[\s\S]*?<\/Formula>/g, (m) => {
    placeholders.push(m);
    return `__PROTECTED_${placeholders.length - 1}__`;
  });
  body = body.replace(/```[\s\S]*?```/g, (m) => {
    placeholders.push(m);
    return `__PROTECTED_${placeholders.length - 1}__`;
  });
  body = body.replace(/`[^`\n]+`/g, (m) => {
    placeholders.push(m);
    return `__PROTECTED_${placeholders.length - 1}__`;
  });

  const before = body;

  // ***"..."*** → "..."
  body = body.replace(/\*\*\*"([^"\n]+)"\*\*\*/g, '"$1"');
  // *"..."*  → "..."
  body = body.replace(/\*"([^"\n]+)"\*/g, '"$1"');
  // ***word*** → **word** (downgrade triple-star bold to regular bold)
  body = body.replace(/\*\*\*([^*\n]+)\*\*\*/g, '**$1**');

  // Restore protected segments
  body = body.replace(/__PROTECTED_(\d+)__/g, (_m, i) => placeholders[Number(i)]);

  if (body !== before) {
    fs.writeFileSync(full, fm + body, "utf8");
    touched++;
    console.log(`[fix] ${file}`);
  }
}

console.log(`\ncleaned ${touched} files`);
