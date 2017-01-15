//@flow
'use strict';

const fs = require('fs');
const path = require('path');
const restify = require('restify');
const request = require('request');
const sse = require('sse-nodejs');
const debugging = require('debug');
const mime = require('mime');
const listeners = new Set();

const server = restify.createServer();

server.use(restify.bodyParser());
server.use(function (req: Restify$Request, resp: Restify$Response, next: Function) {
  const debug = debugging('request');
  debug('%s %s', req.method, req.path());
  next()
});

server.get('/sse', function (req: Restify$Request, resp: Restify$Response) {
  const socket = sse(resp);
  listeners.add(socket);
  socket.disconnect(function () {
    listeners.delete(socket);
  });
});

server.get(/\/assets\/?.*/, function (req, res, next) {
  const debug = debugging('static');
  const reqPath = path.normalize(req.path().replace(/^\/assets/, ''));
  debug('File: %s', reqPath);
  const file = path.join('./public/assets/', reqPath);
  debug('Full file path: %s', file);
  fs.access(file, fs.constants.R_OK, (err) => {
    if (err) {
      debug(err.message);
      return next(new restify.errors.NotFoundError(err));
    } else {
      res.setHeader('Content-Type', mime.lookup(file));
      fs.createReadStream(file).pipe(res);
    }
  });
});

function serveIndex(req: Restify$Request, res: Restify$Response) {
  res.setHeader('Content-Type', 'text/html');
  fs.createReadStream('./public/index.html').pipe(res);
}

server.get('/', serveIndex);

server.on('NotFound', serveIndex);

server.post('/eventbrite/check-in', require('./eventbrite')(listeners));

module.exports = server;