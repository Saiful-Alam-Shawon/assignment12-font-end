// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};

// const firebaseConfig = {
//     apiKey: "AIzaSyC9XQlvXRGIU5iBcYsvsjaKPmXzlWxdzrk",
//     authDomain: "assign12-9ab94.firebaseapp.com",
//     projectId: "assign12-9ab94",
//     storageBucket: "assign12-9ab94.appspot.com",
//     messagingSenderId: "253114817014",
//     appId: "1:253114817014:web:79cc7d4a396a646e160fd7"
// }

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;