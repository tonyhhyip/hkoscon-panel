//@flow
declare interface ExtendableEvent {
  waitUntil(handler: Promise<*>): void;
}