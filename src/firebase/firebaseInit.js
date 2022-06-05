import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhlmveuYJfzJs6mblBpPNLWt8Zq4gCZOE",
  authDomain: "fireblog-5bb6f.firebaseapp.com",
  projectId: "fireblog-5bb6f",
  storageBucket: "fireblog-5bb6f.appspot.com",
  messagingSenderId: "639483107871",
  appId: "1:639483107871:web:d19af9d8967720c37b932a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp}
export default firebaseApp.firestore();