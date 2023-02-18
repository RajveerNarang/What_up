import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCzMnTQSi92gzTruWjxaFdZZkVxH2d0t_M",
  authDomain: "w-up-009.firebaseapp.com",
  projectId: "w-up-009",
  storageBucket: "w-up-009.appspot.com",
  messagingSenderId: "1093485797631",
  appId: "1:1093485797631:web:ed1985f8b70aac71c82cca",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
