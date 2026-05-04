#!/usr/bin/env node
// Remove `*...*` markdown italic emphasis inside JSX title="..." attributes.
// Pattern was missed by earlier cleanup-visual-noise.mjs which targeted only `*"..."*` and `***"..."***`.
// This script preserves all other content; only strips paired asterisks within title="..." values.

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

  // Find title="..." patterns and strip asterisks inside the attribute value.
  // Only paired asterisks (e.g. *italic* or **bold**) are stripped.
  // Single dangling asterisks left untouched to avoid breaking unrelated content.
  const replaced = raw.replace(/title="([^"]*)"/g, (match, value) => {
    let cleaned = value;
    // strip **bold** → bold
    cleaned = cleaned.replace(/\*\*([^*\n]+)\*\*/g, "$1");
    // strip *italic* → italic
    cleaned = cleaned.replace(/\*([^*\n]+)\*/g, "$1");
    if (cleaned !== value) {
      return `title="${cleaned}"`;
    }
    return match;
  });

  if (replaced !== raw) {
    fs.writeFileSync(full, replaced, "utf8");
    touched++;
    console.log(`[fix] ${file}`);
  }
}

console.log(`\ncleaned ${touched} files`);
