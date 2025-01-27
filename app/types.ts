declare global {
  interface Window {
    __GQL_STATE__: { serverUrl: string; idToken?: string } & {
      [k: string]: any;
    };
  }
  interface Navigator {
    getInstalledRelatedApps: any;
  }
}

export interface User {
  provider: "oidc" | "google" | "facebook";
  sub: string;
  role: string;
  id_token: string;
}
