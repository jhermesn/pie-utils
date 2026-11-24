export interface Coupon {
  percent?: number;
  amountCents?: number;
}

/** Splits a bill (in cents) between people. */
export function splitBill(totalCents: number, people: number): number[] {
  if (!Number.isInteger(people) || people < 1) throw new RangeError("people must be a positive integer");
  const share = Math.floor(totalCents / people);
  return Array.from({ length: people }, () => share);
}

/** Applies a percentage coupon, then a fixed-amount coupon. */
export function applyCoupon(totalCents: number, coupon: Coupon): number {
  let total = totalCents;
  if (coupon.percent) total -= Math.round((total * coupon.percent) / 100);
  if (coupon.amountCents) total -= coupon.amountCents;
  return total;
}
