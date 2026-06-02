export const ASSET_BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  const cleaned = path.startsWith("/") ? path : `/${path}`;
  return `${ASSET_BASE}${cleaned}`;
}
