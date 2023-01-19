import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAByFGTUXVCn48DTOnrIk7wkNNB3fY7LeI",
  authDomain: "disney-clone-12d41.firebaseapp.com",
  projectId: "disney-clone-12d41",
  storageBucket: "disney-clone-12d41.appspot.com",
  messagingSenderId: "413986581891",
  appId: "1:413986581891:web:1da11bfb6bcbbbad47dab6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
