import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = (firebase.initializeApp = {
  apiKey: "AIzaSyAUMPeUqZ7IvVHofk8IheVwtBKgRpb8Hds",
  authDomain: "react-redux-7c81a.firebaseapp.com",
  projectId: "react-redux-7c81a",
  storageBucket: "react-redux-7c81a.appspot.com",
  messagingSenderId: "783080288887",
  appId: "1:783080288887:web:a3107369a20f0dfa948c72",
});

export const auth = app.auth();
export default app;
