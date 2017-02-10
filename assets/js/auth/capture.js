import firebase from '../firebase';
import {firebaseLogin} from '../action';
import info from './data';

export default function (store, provider) {
  firebase.auth().onAuthStateChanged((user) => {
    const state = store.getState();
    if (user) {
      const action = firebaseLogin(user);
      store.dispatch(action);
      info(store, user);
    } else {
      firebase.auth().signInWithRedirect(provider);
    }
  });
}