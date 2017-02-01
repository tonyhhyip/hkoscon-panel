'use strict';

require('dotenv').load();

require('fs').readdirSync('./gulp')
  .forEach(file => require(`./gulp/${file}`));