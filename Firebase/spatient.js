// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getDatabase, ref, set, child, get, onValue } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIgyOP_bPFqZsA_a51sQ6rQNty-YzLpCo",
  authDomain: "username-1-479ae.firebaseapp.com",
  databaseURL: "https://username-1-479ae-default-rtdb.firebaseio.com",
  projectId: "username-1-479ae",
  storageBucket: "username-1-479ae.appspot.com",
  messagingSenderId: "992632152965",
  appId: "1:992632152965:web:bda3f8c3863f1080405aec",
  measurementId: "G-PKDNLED6JY"
};

// Initialize Firebase ----------------------------
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const dbRef = ref(getDatabase(app));


//References ---------------------
//let pid = document.getElementById("pid");
//let name = document.getElementById("name");
//let contact = document.getElementById("contact");
//let address = document.getElementById("address");
//let pcp = document.getElementById("pcp");
//let nextvisit = document.getElementById("nextvisit");
//let editbtn = document.getElementById("editbtn");


// Write Data -----------------------------------

//Write to RTDB
document.getElementById("sub").addEventListener('click', function writeUserData( pid, name, contact, address, pcp, nextvisit) {
  pid = document.getElementById("userId").value
  name = document.getElementById("name").value
  contact = document.getElementById("contact").value 
  address = document.getElementById("address").value 
  pcp = document.getElementById("pcp").value 
  nextvisit = document.getElementById("nextvisit").value 

      set(ref(db, 'PatientLogs/' + pid), {
          pid: pid,
          name: name,
          contact: contact,
          address: address,
          pcp: pcp,
          nextvisit: nextvisit

}); }
)
/*
import { getDatabase, ref, set } from "firebase/database";

function writeUserData(userId, username, email, name) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: username,
    email: email,
    name : name
  }).then((onFullFilled)=>{
      console.log("Writed");
  },(onRejected)=>{
      console.log(onRejected);
  });
}

writeUserData(101, "Abdo", "email@gmail.com", "abdo101")

*/