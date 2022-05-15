import React, { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
const ModalInscription = () => {
  const [signUp, setSignUp] = useState(true);

  return (
    <div className="Modal_container">
      <div className="modal_container_btn">
        <button
          style={{ background: signUp ? "rgb(28,28,28)" : "rgb(216,216,216)" }}
          onClick={() => setSignUp(true)}
          className="modal_inscrire"
        >
          S'incrire
        </button>
        <button
          style={{ background: signUp ? "rgb(216,216,216)" : "rgb(28,28,28)" }}
          onClick={() => setSignUp(false)}
          className="modal_seConnecter"
        >
          Se Connecter
        </button>
      </div>
      <div>{signUp ? <SignUp /> : <Login />}</div>
    </div>
  );
};

export default ModalInscription;
