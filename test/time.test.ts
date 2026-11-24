import assert from "node:assert/strict";
import { test } from "node:test";
import { hoursUntilPickup } from "../src/index.ts";

test("same-day pickup", () => {
  assert.equal(hoursUntilPickup(new Date(2026, 10, 26, 9), new Date(2026, 10, 26, 15)), 6);
});

test("next-day pickup", () => {
  assert.equal(hoursUntilPickup(new Date(2026, 10, 25, 18), new Date(2026, 10, 26, 10)), 16);
});
