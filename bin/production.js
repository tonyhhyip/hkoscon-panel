'use strict';

require('dotenv').load();

require('../lib/server').listen(8080, () => {
  console.log('Start listening');
});
