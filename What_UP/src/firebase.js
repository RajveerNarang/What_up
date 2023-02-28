import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBB_UlsPi9ycmywyrj2lRu8PayLVn8DZGc",
  authDomain: "whatup-00.firebaseapp.com",
  projectId: "whatup-00",
  storageBucket: "whatup-00.appspot.com",
  messagingSenderId: "567944817359",
  appId: "1:567944817359:web:cd7faea79e3c890ffae5ba",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
