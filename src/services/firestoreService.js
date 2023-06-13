import { getFirestore, doc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import characterData from "../data/characterData";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT3Y_Iajiwr-OyORkTWDnPs4ghJkW3Wik",
  authDomain: "top-where-is-waldo.firebaseapp.com",
  projectId: "top-where-is-waldo",
  storageBucket: "top-where-is-waldo.appspot.com",
  messagingSenderId: "911739043380",
  appId: "1:911739043380:web:694e3bc92cf298a5b65461",
};

// Initialize Firebase:
const app = initializeApp(firebaseConfig);
// Initialize Firebase db:
const db = getFirestore(app);

async function writeCharacterData() {
  characterData.forEach(async (character) => {
    const characterRef = doc(db, "characterData", character.id.toString());
    await setDoc(characterRef, character);
  });
}
// writeCharacterData();

// export default writeCharacterData;
// export default { db, writeCharacterData };
export { writeCharacterData };
export default db;
