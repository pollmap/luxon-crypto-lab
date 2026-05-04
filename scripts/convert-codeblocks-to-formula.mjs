#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const POSTS = path.join(__dirname, "..", "src", "content", "posts");

const files = fs.readdirSync(POSTS).filter((f) => f.endsWith(".mdx"));
let converted = 0;
let skipped = 0;

for (const file of files) {
  const full = path.join(POSTS, file);
  const raw = fs.readFileSync(full, "utf8");

  // Match ``` blocks WITHOUT language tag (lang tag means real code we want to keep as code)
  // Pattern: lines starting with ``` (no chars after) ... lines ending with ```
  const fenceRe = /^```\s*\n([\s\S]*?)^```\s*$/gm;

  let changed = false;
  const replaced = raw.replace(fenceRe, (_match, body) => {
    changed = true;
    // Trim trailing newline only, preserve internal whitespace
    const content = body.replace(/\s+$/, "");
    // Escape JSX-breaking chars in content: { and < if not already JSX
    // Use a JSX expression with a string so braces/brackets pass through verbatim
    const escaped = content.replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
    return "<Formula>{`" + escaped + "`}</Formula>";
  });

  if (changed && replaced !== raw) {
    fs.writeFileSync(full, replaced, "utf8");
    converted++;
    console.log(`[ok] ${file}`);
  } else {
    skipped++;
  }
}

console.log(`\nconverted ${converted} files, ${skipped} unchanged`);
