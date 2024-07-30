// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDiWQLlTP8PGyqnpYzM1dn59gA00RE4bVk",
    authDomain: "image-gallary-3a919.firebaseapp.com",
    projectId: "image-gallary-3a919",
    storageBucket: "image-gallary-3a919.appspot.com",
    messagingSenderId: "643439140898",
    appId: "1:643439140898:web:fcfb4722deb13cf246ea7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };