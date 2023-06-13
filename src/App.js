import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import characterData from "./data/characterData";
import db from "./services/firestoreService";
import Main from "./pages/Main";
import "./styles.css";
import LandingPage from "./components/LandingPage";

function App() {
  const [gameInPlay, setGameInPlay] = useState(true);
  const [allCharacters, setAllCharacters] = useState(null);

  const fetchCharacterData = async () => {
    const characterCollection = collection(db, "characterData");
    const characterSnapshot = await getDocs(characterCollection);
    const characterList = characterSnapshot.docs.map((document) =>
      document.data()
    );
    return characterList;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacterData();
      setAllCharacters(data);
    };
    fetchData();
  }, []);

  const gamePlayTrue = () => {
    setGameInPlay(true);
  };

  return (
    <div className="app_container">
      {gameInPlay ? (
        <Main allCharacters={allCharacters} gameInPlay={gameInPlay} />
      ) : (
        <LandingPage
          gameIsInPlay={gamePlayTrue}
          allCharacters={allCharacters}
        />
      )}
    </div>
  );
}

export default App;
