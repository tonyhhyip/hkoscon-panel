//@flow
declare class AppInstallEvent extends Event {
  waitUntil(promise: Promise<*>): void;
}

declare class FetchEvent extends Event {
  respondWith(promise: Promise<*>): void;
  request: FetchRequest;
}

declare type ServiceWorker = {
  postMessage(message: Object): void
}

declare type ServiceWorkerRegistration = {
  showNotification(title: string, options?: NotificationOption): Promise<NotificationEvent>,
  active: ServiceWorker
}

declare type ServiceWorkerGlobalScope = {
  oninstall: (event: AppInstallEvent) => void,
  registration: ServiceWorkerRegistration,
  clients: Clients
}

declare type ServiceWokerContainer = {
  getRegistration(): Promise<ServiceWorkerRegistration>,
  controller: ServiceWorker
}
