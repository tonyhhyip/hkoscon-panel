//@flow
'use strict';

type BarcodeData = {
  order: string,
  attendee: string,
  ticket: number
};

module.exports = function extract(barcode: string): BarcodeData {
  return {
    order: barcode.substr(0, 9),
    attendee: barcode.substr(9, 9),
    ticket: parseInt(barcode.substring(18))
  };
};