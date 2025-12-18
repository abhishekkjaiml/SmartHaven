import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfa6Twf4akMLWsE8Oxnxyq_aBBx8zoqRc",
  authDomain: "sheat-73b3d.firebaseapp.com",
  projectId: "sheat-73b3d",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export default firebase;
