import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBd94J-eD6uUNGx7xGr--YYZe0dcBNpSaQ",
  authDomain: "catch-of-the-day-jake-fanelli.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-jake-fanelli.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
