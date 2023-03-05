export default function formatNumber(
  number: string | number | undefined
): string {
  if (typeof number === "string") {
    return parseInt(number).toLocaleString("en-US", {
      minimumFractionDigits: 2,
    });
  }
  if (typeof number === "undefined") {
    return "0.00";
  }
  return number.toLocaleString("en-US", {
    minimumFractionDigits: 2,
  });
}
