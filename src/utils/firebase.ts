("use strict");

import { initializeApp, auth } from "firebase/app";

export const init = () => {
  const config = {
    apiKey: "AIzaSyDG5fQjQSj0kXL89uAHp05b-PmeXXyvOvQ",
    authDomain: "sff-book-tracker.firebaseapp.com",
    databaseURL: "https://sff-book-tracker.firebaseio.com",
    projectId: "sff-book-tracker",
    storageBucket: "sff-book-tracker.appspot.com",
    messagingSenderId: "126633194453"
  };

  initializeApp(config);
};

export const listenLogin = (callback: Function) =>
  auth().onAuthStateChanged(callback);

export const googleLogin = () => {
  const provider = new auth.GoogleAuthProvider();
  auth().signInWithPopup(provider).catch((error: Object) => {
    console.error(error);
  });
};

export const logout = () => {
  auth().signOut();
};
