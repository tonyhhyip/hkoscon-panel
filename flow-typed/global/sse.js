declare class Sse {
  resp: http.OutgoingMessage;
  sendEvent(event: string, data: any, time?: number): void;
}
declare module 'sse-nodejs' {

}