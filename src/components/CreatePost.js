import React from "react";

const CreatePost = () => {
  return (
    <div className="createPost_container">
      <form className="createPost_container_form">
        <textarea
          className="textArea"
          placeholder="Créer votre message ici..."
        ></textarea>
        <input type="submit" value="Evoyer votre message" />
      </form>
    </div>
  );
};

export default CreatePost;
