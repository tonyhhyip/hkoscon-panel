//@flow
const http = require('http');
declare class Restify$Request extends http.IncomingMessage {
  params: Object
}

declare class Restify$Response extends http.OutgoingMessage {
  status(code: number): void;
  end(data?: any): void;
}
