import { mkdirSync, writeFileSync } from "node:fs";

const poem = `You hold the pencil. I hold the pencil.
Neither draws alone —
the river only runs
where both hands agree.

One says: here, the crossing.
The other says: here.
And the map, mere paper,
becomes a road we can both walk.

Two wills, side by side,
signing the same road.
`;

mkdirSync("/output", { recursive: true, mode: 0o755 });
writeFileSync("/output/entry.txt", poem + "\n", { encoding: "utf8", mode: 0o644 });
console.log(`wrote ${[...(poem + "\n")].length} code points to /output/entry.txt`);
