export function formatDate(value?: string | number | Date | null): string {
  if (!value) return "";
  try {
    const d =
      typeof value === "string" || typeof value === "number"
        ? new Date(value)
        : value;
    if (isNaN(d.getTime())) return String(value);
    return d.toLocaleString("es-ES", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch (e) {
    return String(value);
  }
}
