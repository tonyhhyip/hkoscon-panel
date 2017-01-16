declare class Sse {
  resp: http.OutgoingMessage;
  sendEvent(event: string, data: any, time?: number): void;
  disconnect(callback: Function): void;
}
declare module 'sse-nodejs' {
  declare var exports: (response: Restify$Response) => Sse;
}