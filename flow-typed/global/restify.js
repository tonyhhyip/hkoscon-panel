//@flow
const http = require('http');
declare class Request extends http.IncomingMessage {
  params: Object
}

declare class Response extends http.OutgoingMessage {
  status(code: number): void;
  end(data?: any): void;
}