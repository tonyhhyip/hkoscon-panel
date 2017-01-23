'use strict';
import toastr from 'toastr';
const source = new EventSource('/sse');
source.addEventListener('check-in', function (event) {
  const data = JSON.parse(event.data);
  toastr.info(`A ${data.type} ${data.name} has check-in`);
});