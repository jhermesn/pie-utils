import assert from "node:assert/strict";
import { test } from "node:test";
import { applyCoupon, splitBill } from "../src/index.ts";

test("even split", () => {
  assert.deepEqual(splitBill(1200, 3), [400, 400, 400]);
});

test("rejects zero people", () => {
  assert.throws(() => splitBill(1000, 0), RangeError);
});

test("percentage coupon", () => {
  assert.equal(applyCoupon(2000, { percent: 10 }), 1800);
});

test("percentage then fixed coupon", () => {
  assert.equal(applyCoupon(2000, { percent: 10, amountCents: 300 }), 1500);
});
