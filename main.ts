import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "By using this service, you grant us a perpetual, irrevocable license to borrow your left sock during Mercury retrograde.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry + "\n");
