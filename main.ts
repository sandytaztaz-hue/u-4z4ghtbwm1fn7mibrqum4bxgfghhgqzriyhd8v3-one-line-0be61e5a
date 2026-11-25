// One Line, One Laugh — make.fun entry program.
// Writes exactly one funny line to /output/entry.txt.
// The line is a single self-contained joke: a real turn at the end,
// tight, fresh, and clear on a cold first read.
import { mkdirSync, writeFileSync } from "node:fs";

// The joke turns on the last clause: the problems find a new channel.
// No setup, no explanation — the line lands whole on its own.
const LINE =
  "I bought noise-cancelling headphones to silence my problems — now they just text me instead.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
