export class CookieStorage implements Storage {
  get length(): number {
    return document.cookie.replaceAll("; ", ";").split(";").length;
  }

  getItem(key: string): string | null {
    if (typeof document === "undefined") return null;

    const data = document.cookie
      .replaceAll("; ", ";")
      .split(";")
      .find((v) => v.startsWith(`${key}=`))
      ?.replace(`${key}=`, "");

    if (data !== undefined) {
      return data;
    }

    return null;
  }
  key(index: number): string | null {
    if (typeof document === "undefined") return null;

    const data = document.cookie
      .replaceAll("; ", ";")
      .split(";")
      .at(index)
      ?.split("=")[1];

    if (data !== undefined) {
      return data;
    }

    return null;
  }
  removeItem(key: string): void {
    if (typeof document === "undefined") return;

    document.cookie = `${key}=;SameSite=None; Secure; Max-Age=315360000; path=/`;
  }
  setItem(key: string, value: string): void {
    if (typeof document === "undefined") return;

    document.cookie = `${key}=${value};SameSite=None; Secure; Max-Age=315360000; path=/`;
  }

  get(key: string): string | null {
    return this.getItem(key);
  }

  set(key: string, value: string): void {
    return this.setItem(key, value);
  }

  remove(key: string) {
    if (typeof document === "undefined") return;
    document.cookie = `${key}=;SameSite=None; Secure; Max-Age=315360000; path=/`;
  }

  clear() {
    if (typeof document === "undefined") return;
    document.cookie
      .replaceAll("; ", ";")
      .split(";")
      .map((cookie) => cookie.split("=")[0])
      .forEach((key) => {
        document.cookie = `${key}=; SameSite=None; Secure; Max-Age=315360000; path=/`;
      });
  }
}
