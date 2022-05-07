import React, { useState } from "react";

const ModalInscription = () => {
  const [SignUp, setSignUp] = useState(true);

  return (
    <div className="Modal_container">
      <div className="modal_container_btn">
        <button onClick={() => setSignUp(true)} className="modal_inscrire">
          S'incrire
        </button>
        <button onClick={() => setSignUp(false)} className="modal_seConnecter">
          Se Connecter
        </button>
      </div>
    </div>
  );
};

export default ModalInscription;
