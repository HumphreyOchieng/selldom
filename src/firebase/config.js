import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
	apiKey: "AIzaSyA0CYkWcKxJKmJoq9ehooR0A5mQ7Uk6FbM",
	authDomain: "selldom-95d2b.firebaseapp.com",
	databaseURL: "https://selldom-95d2b.firebaseio.com",
	projectId: "selldom-95d2b",
	storageBucket: "selldom-95d2b.appspot.com",
	messagingSenderId: "4983445156",
	appId: "1:4983445156:web:1266c82b1aad84f1147831",
	measurementId: "G-6Q78JFPPTM"
}
firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore();
const auth = firebase.auth();

const settings = {
	timestampsInSnapshots: true
};
db.settings(settings);

// firebase collections
const postsCollection = db.collection('posts');

export {
	db,
	auth,
	postsCollection
}