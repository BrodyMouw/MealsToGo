import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.js";

const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
