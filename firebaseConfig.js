import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbrzOYIW4-wQ-RZyklg6B33o-IhjWZX5I",
  authDomain: "gameplanner-cc9b6.firebaseapp.com",
  projectId: "gameplanner-cc9b6",
  storageBucket: "gameplanner-cc9b6.appspot.com",
  messagingSenderId: "586655624733",
  appId: "1:586655624733:web:0ededd212525b372b1e0f4",
  measurementId: "G-2QJ16C5F3Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Android: 639578192138-d66e30vj9eig9jte5938o9qnot9aoncc.apps.googleusercontent.com
