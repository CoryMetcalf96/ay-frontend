import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCx7bqnb6IFqy5c_XKQMF73lxHiFf7_jO8",
  // authDomain: "avataryearbook.firebaseapp.com",
  authDomain: "https://avatar-yearbook.netlify.app/",
  projectId: "avataryearbook",
  storageBucket: "avataryearbook.appspot.com",
  messagingSenderId: "168361785024",
  appId: "1:168361785024:web:5a2c16b61152ffc0809f25",
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

function login() {
  return auth.signInWithPopup(provider);
}

function logout() {
  return auth.signOut();
}

export { auth, login, logout };