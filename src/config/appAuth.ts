import * as firebase from "firebase";
import "firebase/auth";

const appAuth = firebase.initializeApp({
  apiKey: "AIzaSyCXhmJ0ERIomsCs20iip3O8b95D4-rNngY",
  authDomain: "ce-proj-51bfc.firebaseapp.com",
  databaseURL: "https://ce-proj-51bfc.firebaseio.com",
  projectId: "ce-proj-51bfc",
  storageBucket: "ce-proj-51bfc.appspot.com",
  messagingSenderId: "434389994241",
  appId: "1:434389994241:web:9baca0a9bb168d2b47e900",
  measurementId: "G-6DK5ZG19FF",
});

export default appAuth;
