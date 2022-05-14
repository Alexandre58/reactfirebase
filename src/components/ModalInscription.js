import React, { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
const ModalInscription = () => {
  const [signUp, setSignUp] = useState(true);

  return (
    <div className="Modal_container">
      <div className="modal_container_btn">
        <button
          style={{ background: signUp ? "rgb(28,28,28)" : "rgb(23,23,23)" }}
          onClick={() => setSignUp(true)}
          className="modal_inscrire"
        >
          S'incrire
        </button>
        <button
          style={{ background: signUp ? "rgb(23,23,23)" : "rgb(28,28,28)" }}
          onClick={() => setSignUp(false)}
          className="modal_seConnecter"
        >
          Se Connecter
        </button>
      </div>
      {signUp ? <SignUp /> : <Login />}
    </div>
  );
};

export default ModalInscription;
