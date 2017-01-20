import type expreess from 'express';
declare class Sse {
  resp: expreess.$Response;
  sendEvent(event: string, data: any, time?: number): void;
  disconnect(callback: Function): void;
}
declare module 'sse-nodejs' {
  declare var exports: (response: expreess.$Response) => Sse;
}