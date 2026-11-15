import { formatCurrency } from "@shared/utils/formatters";

describe("formatCurrency", () => {
  it("formats positive and negative EUR amounts for the French locale", () => {
    expect(formatCurrency(1234.5)).toMatch(/1.*234,50/);
    expect(formatCurrency(-12)).toMatch(/-12,00/);
  });

  it("rejects non-finite amounts", () => {
    expect(() => formatCurrency(Number.POSITIVE_INFINITY)).toThrow(RangeError);
  });
});
