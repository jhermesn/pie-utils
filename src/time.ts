/** Whole hours between placing an order and picking it up. */
export function hoursUntilPickup(orderedAt: Date, pickupAt: Date): number {
  const days = pickupAt.getDate() - orderedAt.getDate();
  return days * 24 + (pickupAt.getHours() - orderedAt.getHours());
}
