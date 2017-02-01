//@flow
'use strict';

const barcode = require('./barcode');

describe('Barcode library test', () => {
  it('should export normal', () => {
    expect(typeof barcode).toBe('function');
    expect(barcode.name).toBe('extract');
  });

  it('should extract data', () => {
    const data = barcode('547248387688968283001');
    expect(data.order).toBe('547248387');
    expect(data.attendee).toBe('688968283');
    expect(data.ticket).toBe(1);
  })
});