import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.js";

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
