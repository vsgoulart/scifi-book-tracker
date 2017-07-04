"use strict";

import { initializeApp, auth, database } from "firebase/app";
import config from "../config/firebase";

let rootRef = null;
let authorsRef = null;
let awardsRef = null;
let booksRef = null;

export const init = callback => {
  initializeApp(config);

  rootRef = database();
  authorsRef = database().ref("authors");
  awardsRef = database().ref("awards");
  booksRef = database().ref("books");

  if (typeof callback != "undefined") {
    callback();
  }
};

export const listenLogin = callback => auth().onAuthStateChanged(callback);

export const googleLogin = () => {
  const provider = new auth.GoogleAuthProvider();
  auth().signInWithPopup(provider).catch(error => {
    console.error(error);
  });
};

export const listAuthors = () => authorsRef.once("value");

export const listBooks = () => booksRef.once("value");

export const listAwards = () => awardsRef.once("value");

export const logout = () => {
  auth().signOut();
};
