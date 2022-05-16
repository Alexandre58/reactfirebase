import React, { useRef, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase.config";

const Login = () => {
  //pour faire correspondre avec firebase useRef()
  const loginEmail = useRef();
  const loginPassword = useRef();
  //exemple de message d'erreur envoyé a l'utilisateur en cas de nom respect des identifiants (useSte de base a false= de base il n'y a pas d'erreur)
  const [error, setError] = useState(false);
  //function handleLogin pour valider le formulaire
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      {
        /**try to connect a firebase with verif that => */
      }
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail.current.value,
        loginPassword.current.value
      );
      console.log(user);
    } catch (error) {
      setError(true);
      console.log(error.message);
    }
    console.log(loginEmail.current.value, loginPassword.current.value);
  };
  return (
    <div className="login_container">
      <h1 className="login_H1">Se connecter</h1>
      <form className="login_container_form" onSubmit={(e) => handleLogin(e)}>
        <fieldset>
          <legend>Entrer vos identifiants</legend>
          <input
            type="email"
            placeholder="Votre émail"
            autoComplete="on"
            required
            ref={loginEmail}
          />
          <input
            type="password"
            placeholder="Votre mot de passe"
            autoComplete="on"
            required
            ref={loginPassword}
          />
          <input className="input_button" type="submit" value="Se connecter" />
          <span className="login_span_error">
            {error && "Votre Email ou Votre mot de passe ne correspond pas!..."}
          </span>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
