import { getApps, initializeApp } from "firebase/app";
import "firebase/auth";
import Constants from "expo-constants";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore, setDoc, doc } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId,
  databaseURL: Constants.manifest.extra.databaseURL,
};

const app = initializeApp(firebaseConfig);

if (getApps().length < 1) {
  const app = initializeApp(firebaseConfig);
}

export const db = getDatabase(app);

export const firestore = getFirestore(app);

export const auth = getAuth(app);
