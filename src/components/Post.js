import React, { useState } from "react";
import { db } from "../utils/firebase.config";
import { doc, updateDoc } from "firebase/firestore";
import Delete from "./Delete";
import CommentPost from "./CommentPost";
const Post = ({ post, user }) => {
  //edit d'une modale pour ouvrir un nouveau message dans le message
  const [edit, setEdit] = useState(false);
  const [editMess, setEditMess] = useState(null);

  //formatage de la date
  const dateFormater = (date) => {
    let newDate = Math.floor(
      (new Date() - new Date(date)) / (1000 * 3600 * 24)
    );
    if (newDate === 0) {
      return " aujourd'hui";
    } else if (newDate === 1) {
      return "il y a 1 jour";
    } else {
      return "il y a " + newDate + "jours.";
    }
  };

  //modif des messages avec la methode updateDoc()
  const handleEdit = () => {
    debugger;
    setEdit(false);
    if (editMess) {
      updateDoc(doc(db, "posts", post.id), { message: editMess });
    }
  };

  return (
    <article className="post_article_container">
      <div className="post_article_header">
        <span className="post_span">{post.author[0]}</span>
        <h2 className="post_h2">Message de {post.author}</h2>
        {/**If edit est sur true tu met false ect.. setEdit(!edit) */}
        {post.authorId === user?.uid && (
          <p onClick={() => setEdit(!edit)} className="post_edit">
            Edit
          </p>
        )}
      </div>
      {edit ? (
        <>
          <textarea
            autoFocus
            defaultValue={editMess ? editMess : post.message}
            onChange={(e) => setEditMess(e.target.value)}
          ></textarea>
          <button onClick={() => handleEdit()} className="post_button_edit">
            Modifier ce message
          </button>
        </>
      ) : (
        <div className="post_message">{editMess ? editMess : post.message}</div>
      )}

      <div className="post_container_date_spanDelete">
        <h3 className="post_h3_date">Posté {dateFormater(post.date)}</h3>
        {/**si l'utilisateuer peut ou pas delete un message */}
        {post.authorId === user?.uid && <Delete postId={post.id} />}
      </div>
      {/*que va transmettre CommentPost? => post={post} donc son contenu car "comment" est dans post et il va falloir faire une mise a jou pour que cela fonctionne */}
      <CommentPost post={post} />
    </article>
  );
};

export default Post;
