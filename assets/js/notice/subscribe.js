//@flow
export default (token: string) => {
  const url = `https://iid.googleapis.com/iid/v1/${token}/rel/topics/check-in`;
  return fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `key=${process.env.FIREBASE_MESSAGE_SERVER_KEY}`,
      'Content-Type': 'application/json'
    }
  })
    .then((response: FetchResponse) => {
      if (response.status === 200) {
        return console.log('Success in subscribe channel');
      } else {
        throw new Error(response);
      }
    });
}