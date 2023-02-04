// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { doc, setDoc, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyANInNst5JswBryP9jxcJ-BdHOngtPtHjI",
	authDomain: "ocr-data-collection.firebaseapp.com",
	projectId: "ocr-data-collection",
	storageBucket: "ocr-data-collection.appspot.com",
	messagingSenderId: "635409376241",
	appId: "1:635409376241:web:62565b1a313795e7a5da50",
	measurementId: "G-S3SW8YY9PK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

function sendData(id, data) {
	setDoc(doc(db, "data", id), data);
}

export { db, sendData };
