// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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

  // apiKey: "AIzaSyCsaiyXXHD2K5LwIAC3OqR7ONref269ATI",
  // authDomain: "independent-service-prov-a311f.firebaseapp.com",
  // projectId: "independent-service-prov-a311f",
  // storageBucket: "independent-service-prov-a311f.appspot.com",
  // messagingSenderId: "900742211889",
  // appId: "1:900742211889:web:28fc043066a97958326810"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;