("use strict");

import { initializeApp, auth, database } from "firebase/app";
import config from "../config/firebase";

let rootRef: database.Database;
let authorsRef: database.Reference;
let awardsRef: database.Reference;
let booksRef: database.Reference;

export const init = (callback?: Function) => {
  initializeApp(config);

  rootRef = database();
  authorsRef = database().ref("authors");
  awardsRef = database().ref("awards");
  booksRef = database().ref("books");

  callback();
};

export const listenLogin = (callback: Function) =>
  auth().onAuthStateChanged(callback);

export const googleLogin = () => {
  const provider = new auth.GoogleAuthProvider();
  auth().signInWithPopup(provider).catch((error: Object) => {
    console.error(error);
  });
};

export const listAuthors = () => authorsRef.once("value");

export const listBooks = () => booksRef.once("value");

export const listAwards = () => awardsRef.once("value");

export const logout = () => {
  auth().signOut();
};
