import React, { useRef, useState } from "react";
import { auth } from "../utils/firebase.config";

const SignUp = () => {
  //recuperer les informations dans l'email et dans le password avec useRef()
  //faire une function preventdefault et un try catch
  //import a ne pas oublier (import auth from "../utils/firebase.config";)
  // console.log(registerEmail.current.value, registerPassword.current.value);dans la function handleRegister pour verifier
  //.then userAuth sera le pseudo => console.log(userAuth); onChange={(e) => setDisplayName(e.target.value)}verifier dans displayName avec le log et aussi dans component state
  const registerEmail = useRef();
  const registerPassword = useRef();
  const [displayName, setDisplayName] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    try {
      auth
        .createUserWithEmailAndPassword(
          registerEmail.current.value,
          registerPassword.current.value
        )
        .then(async (userAuth) => {
          await userAuth.user.updateProfile({ displayName: displayName });
          console.log(userAuth);
        });
    } catch (error) {
      console.log(error);
    }
    console.log(registerEmail.current.value, registerPassword.current.value);
  };

  return (
    <div className="signUp_container">
      <h1 className="signUp_H1">S'inscrire</h1>
      <form
        className="signup_container_form"
        onSubmit={(e) => handleRegister(e)}
      >
        <fieldset>
          <legend>Vos coordonnées</legend>
          <input
            type="text"
            placeholder=" Votre Pseudo"
            required
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Votre émail"
            required
            ref={registerEmail}
          />
          <input
            type="password"
            autoComplete="on"
            placeholder="Votre mot de passe"
            required
            ref={registerPassword}
          />
          <input
            className="input_button"
            type="submit"
            value="Valider votre inscription"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default SignUp;
