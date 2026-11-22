import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Nothing here needs an answer. Rain has been falling since before you arrived, and will keep falling after. A kettle cools on the stove, steam thinning into lamplight. The hallway light stays on, and the quiet holds you a while longer.";

// The gate needs 1–280 Unicode code points: fail loudly rather than
// silently ship an entry the scorer would refuse.
if ([...TEXT].length < 1 || [...TEXT].length > 280) {
  throw new Error(`entry text is ${[...TEXT].length} code points, outside 1–280`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
