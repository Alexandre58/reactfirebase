import React, { useRef } from "react";
//pour l'envoi des element sur la db firestore
import { addDoc, collection } from "firebase/firestore";
import { db } from "../utils/firebase.config";

//uid = props recuperer de app.js dans <createPost />
const CreatePost = ({ uid, displayName }) => {
  console.log("uid et displayName =>" + uid, displayName);
  //useRef( methode pour recuperer le message de l'utilisateur)
  const message = useRef();
  //function form preventdefault pour ne pas recharger la page
  const handlePost = async (e) => {
    e.preventDefault();
    //1 recuperation de toutes les données du form=> creation d'un objet data
    const data = {
      author: displayName,
      authorId: uid,
      message: message.current.value,
      comments: null,
      date: Date.now(),
    };
    //addDoc pour ajouter les elements à firebase//Ajoute moi des elements(addDoc) dans (collection)(db ou il y a les identifiants)ou? dans ("posts")et l'objet est data !!
    await addDoc(collection(db, "posts"), data);
    //ensuite on vide le formulaire
    message.current.value = "";
    //ce console.log montre les element envoyé du message
    console.log("*****ci dessous envoyé de createPost.js******");
    console.log(data);
    console.log("*****ci dessus envoyé de createPost.js******");
  };

  return (
    <div className="createPost_container">
      <form
        onSubmit={(e) => handlePost(e)}
        className="createPost_container_form"
      >
        <textarea
          className="textArea"
          placeholder="Créer votre message ici..."
          ref={message}
        ></textarea>
        <input
          className="createPost_input"
          type="submit"
          value="Envoyer votre message"
        />
      </form>
    </div>
  );
};

export default CreatePost;
