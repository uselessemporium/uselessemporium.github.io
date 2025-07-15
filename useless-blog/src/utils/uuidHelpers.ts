export function randomUUID(): string {
  return crypto.randomUUID().toUpperCase().replace(/-/g, "_");
}