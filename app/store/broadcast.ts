import { atom } from "jotai";
import { CookieStorage } from "./cookie-storage";

export function atomWithBroadcast<Value>(
  key: string,
  initialValue: Value,
  read?: (v: Value) => Value,
  write?: (v: Value) => Value | void,
) {
  const baseAtom = atom(initialValue);
  const listeners = new Set<(event: MessageEvent<Value>) => void>();
  const channel = new BroadcastChannel(key);
  channel.onmessage = (event) => {
    listeners.forEach((l) => l(event));
  };

  const broadcastAtom = atom<
    Value,
    [{ isEvent: boolean; value: Value }],
    unknown
  >(
    (get) => get(baseAtom),
    (get, set, update) => {
      set(baseAtom, update.value);

      if (!update.isEvent) {
        channel.postMessage(get(baseAtom));
      }
    },
  );
  broadcastAtom.onMount = (setAtom) => {
    const listener = (event: MessageEvent<Value>) => {
      let d = event.data;
      if (write) {
        const wd = write(d);
        if (wd !== undefined) d = wd;
      }
      setAtom({ isEvent: true, value: d });
    };
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  };
  const returnedAtom = atom<Value, [Value], unknown>(
    (get) => (read ? read(get(broadcastAtom)) : get(broadcastAtom)),
    (_get, set, update) => {
      set(broadcastAtom, {
        isEvent: false,
        value: (() => {
          if (write) {
            const v = write(update);
            return v === undefined ? update : v;
          } else {
            return update;
          }
        })(),
      });
    },
  );
  return returnedAtom;
}

export function atomWithStoredBroadcast<Value>(
  key: string,
  defaultValue: Value,
  store: Storage = new CookieStorage(),
  read?: (v: Value) => Value,
  write?: (v: Value) => Value | void,
) {
  const storedValue = store.getItem(key);
  const broadcastAtom = atomWithBroadcast(
    key,
    storedValue !== undefined && storedValue !== null
      ? (() => {
          try {
            return JSON.parse(storedValue);
          } catch (_) {
            return storedValue;
          }
        })()
      : defaultValue,
    read,
    write,
  );

  return atom<Value, [Value], unknown>(
    (get) => {
      let v = get(broadcastAtom);
      try {
        v = JSON.parse(v as string);
      } catch (_) {
        //
      }
      return read ? read(v) : v;
    },
    (_get, set, newValue) => {
      set(broadcastAtom, newValue);
      store.setItem(
        key,
        typeof newValue === "object"
          ? JSON.stringify(newValue)
          : (newValue as string),
      );
    },
  );
}
