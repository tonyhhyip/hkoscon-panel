import firebase from '../firebase';
import capture from './capture';

const {GithubAuthProvider} = firebase.auth;
export const provider = new GithubAuthProvider();

export default function (store) {
  capture(store, provider);
}
