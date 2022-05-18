import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db } from "../utils/firebase.config";

const Delete = ({ postId }) => {
  const handleDelete = () => {
    deleteDoc(doc(db, "posts", postId));
  };

  return (
    <div>
      <span onClick={(e) => handleDelete()} className="post_span_delete">
        Delete
      </span>
    </div>
  );
};

export default Delete;
