import assert from "node:assert/strict";
import { test } from "node:test";
import { slugify } from "../src/index.ts";

test("simple name", () => {
  assert.equal(slugify("Pumpkin Pie"), "pumpkin-pie");
});

test("punctuation", () => {
  assert.equal(slugify("Apple & Cinnamon Pie!"), "apple-cinnamon-pie");
});
