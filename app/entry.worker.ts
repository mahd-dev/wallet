/// <reference lib="WebWorker" />

import { NetworkFirst, WorkerDataFunctionArgs } from "@remix-pwa/sw";

export {};

declare let self: ServiceWorkerGlobalScope;

self.addEventListener("install", (event) => {
  console.log("Service worker installed");

  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activated");

  event.waitUntil(self.clients.claim());
});

export const defaultFetchHandler = async ({
  request,
}: WorkerDataFunctionArgs) => {
  const networkFirst = new NetworkFirst("nf");
  return networkFirst.handleRequest(request);
  // return fetch(request);
};
