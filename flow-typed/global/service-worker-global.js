//@flow
declare class AppInstallEvent extends Event {
  waitUntil(promise: Promise<*>): void;
}

declare class FetchEvent extends Event {
  respondWith(promise: Promise<*>): void;
  request: FetchRequest;
}

declare type ServiceWorkerRegistration = {
  showNotification(title: string, options?: NotificationOption): Promise<NotificationEvent>;
}

declare type ServiceWorkerGlobalScope = {
  oninstall: (event: AppInstallEvent) => void;
  registration: ServiceWorkerRegistration;
}