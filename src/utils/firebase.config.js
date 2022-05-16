import firebase from "firebase/compat/app";
import "firebase/compat/auth";

//import database de firebase => Firestore Database=> mode production => europe=>cloud Firestore=> puis creer une collection
//allez dans Cloud Firestore => Règles >puis  allow read, write: if false;<= mettre if true
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAINE,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESAGERID,
  appId: process.env.REACT_APP_APPID,
});

export const auth = app.auth();
export default app;
//export db de firestore
export const db = getFirestore();
