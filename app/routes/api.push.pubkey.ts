import { b64ToUrlEncoded, exportPublicKeyPair } from "~/utils/webpush/lib/util";

export const loader = async () => {
  return {
    key: b64ToUrlEncoded(
      exportPublicKeyPair(JSON.parse(process.env.VAPID_KEYS as string)),
    ),
  };
};
