import React, { useEffect, useState } from "react";
import ModalInscription from "./components/ModalInscription";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "./utils/firebase.config";
import "./styles/index.scss";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import { collection, getDocs } from "firebase/firestore";
import Post from "./components/Post";

const App = () => {
  //nous sommes connecté ou pas ? est-ce bien le bon user connecté ?  //onAuthStateChanged() est une methode de firebase
  const [user, setUser] = useState(null);
  //recupération des messages des utilisateurs
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    //methode getDocs chercher ou ? (collection) (db) (posts)=> map doc.data//le tout stoker dans setPosts //remplacer setPosts par console.log pour verifier
    getDocs(collection(db, "posts")).then((res) =>
      setPosts(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  }, []);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  //fin de onAuthStateChanged()

  //se deconnecter avec la methode signOut() de firebase
  const handleLogout = async () => {
    await signOut(auth);
  };
  //fin de se deconnecter

  //if user est present afficher <CreatePost />// {user ? ( <CreatePost />) : (<ModalInscription />)}
  //pour afficher la premiere lettre du nom , le pseudo et le bouton pour ce deconnecter      {user && (
  //        <div>
  //        <span>{user?.displayName[0]}</span>
  //        <h4>{user?.displayName}</h4>
  //        <button>Se déconnecter</button>
  //      </div>
  return (
    <>
      <header className="app_container_h1_h2">
        <h1>Bienvenue {user?.displayName}</h1>
      </header>
      <main className="app_container">
        <section className="app_container_user">
          {user && (
            <div className="app_container_h3_button">
              <span>{user?.displayName[0]}</span>
              <h3>{user?.displayName}</h3>
              <button
                className="app_button_seDeconnecter"
                onClick={() => handleLogout()}
              >
                Se déconnecter
              </button>
            </div>
          )}
          {/*uid = les coordonnees de l utilisateur */}
          {user ? (
            <CreatePost uid={user.uid} displayName={user.displayName} />
          ) : (
            <ModalInscription />
          )}
        </section>
        <section className="app_section_container_post">
          {posts.length > 0 &&
            posts
              .sort((a, b) => b.date - a.date)
              .map((post) => <Post post={post} key={post.id} user={user} />)}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
