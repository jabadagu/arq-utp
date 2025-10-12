declare module "js-cookie" {
  interface CookieAttributes {
    expires?: number | Date | undefined;
    path?: string | undefined;
    domain?: string | undefined;
    secure?: boolean | undefined;
    sameSite?: "strict" | "lax" | "none" | undefined;
  }

  export function get(name: string): string | undefined;
  export function set(
    name: string,
    value: string | Record<string, unknown>,
    attributes?: CookieAttributes
  ): void;
  export function remove(name: string, attributes?: CookieAttributes): void;

  const Cookies: {
    get: typeof get;
    set: typeof set;
    remove: typeof remove;
  };

  export default Cookies;
}
