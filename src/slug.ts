/** URL-friendly slug for a pie name, e.g. "Pumpkin Pie" → "pumpkin-pie". */
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
