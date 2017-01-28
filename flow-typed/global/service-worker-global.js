//@flow
declare class AppInstallEvent extends Event {
  waitUntil(promise: Promise<*>): void;
}

declare class FetchEvent extends Event {
  respondWith(promise: Promise<*>): void;
  request: FetchRequest;
}

declare interface ServiceWorkerGlobalScope {
  oninstall: (event: AppInstallEvent) => void;
}