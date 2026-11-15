export function formatCurrency(amount: number, currency = "EUR"): string {
  if (!Number.isFinite(amount)) {
    throw new RangeError("The amount must be a finite number.");
  }

  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency,
  }).format(amount);
}
