import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuAnRDrkoiyziyVHgfKoGGrYneys-2PsY",
  authDomain: "typescriptapp-3fe9e.firebaseapp.com",
  projectId: "typescriptapp-3fe9e",
  storageBucket: "typescriptapp-3fe9e.appspot.com",
  messagingSenderId: "423752055601",
  appId: "1:423752055601:web:4527325ee63c2f3d4f8e10",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
