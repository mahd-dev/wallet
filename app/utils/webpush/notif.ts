/// <reference lib="WebWorker" />

export type {};
declare let self: ServiceWorkerGlobalScope;

export const handleNotif = (event: NotificationEvent) => {
  event.notification.close();
  event.waitUntil(
    self.clients.openWindow(event.notification.data.link || "https://zayn.tn"),
  );
};
