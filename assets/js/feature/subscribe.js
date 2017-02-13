//@flow
'use strict';

const headers = {
  Authorization: `key=${process.env.FIREBASE_MESSAGE_SERVER_KEY}`,
  'Content-Type': 'application/json'
};

export default (token: string, topic: string) => {
  const url = `https://iid.googleapis.com/iid/v1/${token}/rel/topics/${topic}`;
  return fetch(url, {
    headers,
    method: 'POST'
  })
    .then((response: FetchResponse) => {
      if (response.status === 200) {
        return true;
      } else {
        throw new Error(response);
      }
    });
}