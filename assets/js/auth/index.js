import firebase, {auth} from '../firebase';
import {firebaseLogin} from '../action';
import info from './data';

export const provider = new firebase.auth.GithubAuthProvider();

export default function (store) {
  return new Promise((resolve, reject) =>
    auth.onAuthStateChanged((user) => {
      if (user) {
        const action = firebaseLogin(user);
        store.dispatch(action);
        info(store, user);
        resolve(user);
      } else {
        auth.signInWithRedirect(provider);
      }
    })
  );
}
