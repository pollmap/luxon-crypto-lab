#!/usr/bin/env node
// Normalize publishedAt dates that are in the future (2027+) by shifting -1 year.
// Posts originally scheduled for staggered 2027 release but flipped to draft:false
// are showing at top of RSS/sitemap with future dates, hurting content freshness.
// This script preserves month/day, only shifts year.

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

  // Match: publishedAt: "2027-MM-DD" or publishedAt: "2028-MM-DD" etc.
  const replaced = raw.replace(
    /^(publishedAt:\s*"?)(20)(2[7-9]|3[0-9])(-\d{2}-\d{2})("?)$/gm,
    (_match, prefix, century, year2, mmdd, suffix) => {
      const year = parseInt(century + year2, 10);
      const newYear = year - 1; // shift back 1 year
      return `${prefix}${newYear}${mmdd}${suffix}`;
    },
  );

  if (replaced !== raw) {
    fs.writeFileSync(full, replaced, "utf8");
    touched++;
    console.log(`[shift] ${file}`);
  }
}

console.log(`\nshifted ${touched} files (publishedAt: 2027+ → -1 year)`);
