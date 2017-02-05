// @flow
import yaml from 'js-yaml';

export default function (url: string | FetchRequest) {
  return fetch(url)
    .then((response) => {
      if (response.status === 200) {
        return response.text();
      } else {
        throw new Error(response);
      }
    })
    .then(text => yaml.safeLoad(text));
}