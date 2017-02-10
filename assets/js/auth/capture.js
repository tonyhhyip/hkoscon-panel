import firebase from '../firebase';
import {firebaseLogin} from '../action';

export default function (store, provider) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const action = firebaseLogin(user);
      store.dispatch(action);
    } else {
      firebase.auth().signInWithRedirect(provider);
    }
  });
}