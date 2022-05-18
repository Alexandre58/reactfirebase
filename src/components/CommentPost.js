import React, { useRef, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../utils/firebase.config";
import CommentCard from "./CommentCard";
const CommentPost = ({ post }) => {
  //if user connected ? true
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  //ecoute ce qui s'ecris dans textarea
  const awswerContent = useRef();
  //ecoute form
  const handleComment = (e) => {
    e.preventDefault();
    //manipulation pour que les commantaires ne soient pas écrasé par les nouveaux

    let data = [];

    if (post.comments === null) {
      data = [
        {
          commentAuthor: user.displayName,
          text: awswerContent.current.value,
        },
      ];
    } else {
      data = [
        //prends tous les messages qui ont étaient postés avant
        ...post.comments,
        {
          commentAuthor: user.displayName,
          text: awswerContent.current.value,
        },
      ];
    }

    //mise a jour du commentaire dans firebase
    updateDoc(doc(db, "posts", post.id), { comments: data });

    //verif si cela fonctionnne

    /**   console.log(awswerContent.current.value);*/

    //puis vider le commentaire du textarea
    //awswerContent.current.value = "";
  };
  return (
    <div className="commentPost_container">
      <h3 className="post_h1">Vos commentaires</h3>
      {/**emplacement des MAP des commentaires, if post.comments alors map */}

      {post.comments &&
        post.comments.map((comment, index) => (
          <CommentCard comment={comment} key={index} />
        ))}
      {/**user connecté? ok on met un form */}
      {user ? (
        <form
          onChange={(e) => handleComment(e)}
          className="commentPost_container_form"
        >
          <textarea
            ref={awswerContent}
            placeholder="Envoyer un commentaire..."
            className="commentPost_textarea"
          ></textarea>
          <input type="submit" value="Envoyer" />
        </form>
      ) : (
        <p>Vous devez être connecté guguse...</p>
      )}
    </div>
  );
};

export default CommentPost;
