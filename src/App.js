import React, { useState } from "react";
import ModalInscription from "./components/ModalInscription";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase.config";
import "./styles/index.scss";
import CreatePost from "./components/CreatePost";

const App = () => {
  //nous sommes connecté ou pas ? est-ce bien le bon user connecté ?  //onAuthStateChanged() est une methode de firebase
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  //fin de onAuthStateChanged()
  //if user est present afficher <CreatePost />// {user ? ( <CreatePost />) : (<ModalInscription />)}

  return (
    <div className="app_container">
      <div>{user ? <CreatePost /> : <ModalInscription />}</div>
      <div className="posts_container">a quoi sert cette div ????</div>
    </div>
  );
};

export default App;
