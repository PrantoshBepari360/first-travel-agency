import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.config";

export const initializeFirebaseApp = () => {
  return initializeApp(firebaseConfig);
};
