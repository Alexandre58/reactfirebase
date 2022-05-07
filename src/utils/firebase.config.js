import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = (firebase.initializeApp = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAINE,
  projectId: "react-redux-7c81a",
  storageBucket: "react-redux-7c81a.appspot.com",
  messagingSenderId: process.env.MESAGERID,
  appId: process.env.APPID,
});

export const auth = app.auth();
export default app;
