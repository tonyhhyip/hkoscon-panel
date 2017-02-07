import firebase from '../firebase';
import {firebaseLogin, userSession} from '../action';

export default function (store, provider) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const action = firebaseLogin(user);
      store.dispatch(action);
    } else if (sessionStorage.getItem('user')) {
      const action = userSession(JSON.parse(sessionStorage.getItem('user')));
      store.dispatch(action);
    } else {
      firebase.auth().signInWithRedirect(provider);
    }
  });
}