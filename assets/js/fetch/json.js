//@flow
'use strict';

export default function (url: string): Promise<any> {
  return fetch(url)
    .then((response) => {
      if (response.status === 200) {
          return response.json();
      } else {
        throw new Error(response);
      }
    });
}