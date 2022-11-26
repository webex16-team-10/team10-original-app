import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRK27HMWUxx3CElMEHH30EYjownrwudxg",
  authDomain: "team-10-original-app.firebaseapp.com",
  projectId: "team-10-original-app",
  storageBucket: "team-10-original-app.appspot.com",
  messagingSenderId: "520306411694",
  appId: "1:520306411694:web:9e5e1caeafae987fe9053f",
  measurementId: "G-2ZT2ZX97V3",
}
// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig)
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app)
