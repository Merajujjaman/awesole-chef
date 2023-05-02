// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcSD2dsTUg01Lm9PAMfL-45blNorO8zQg",
  authDomain: "awesome-chef-meraj.firebaseapp.com",
  projectId: "awesome-chef-meraj",
  storageBucket: "awesome-chef-meraj.appspot.com",
  messagingSenderId: "1077276390292",
  appId: "1:1077276390292:web:7f18cb8e7a733fda3d5581"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app ;