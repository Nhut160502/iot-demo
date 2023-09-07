const firebaseConfig = {
  apiKey: "AIzaSyDkPgQvDfsMgGz7Ej8rCtyCkyjM2SvloKU",
  authDomain: "iot-memo-9c2eb.firebaseapp.com",
  projectId: "iot-memo-9c2eb",
  storageBucket: "iot-memo-9c2eb.appspot.com",
  messagingSenderId: "951815212287",
  appId: "1:951815212287:web:1c48c82f9d1ab4442990ca",
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// Database Paths
var dataFloatPath = "float";
var dataIntPath = "int";
var dataBoolPath = "bool";
// Get a database reference
const databaseFloat = database.ref(dataFloatPath);
const databaseInt = database.ref(dataIntPath);
const databaseBool = database.ref(dataBoolPath);
// Variables to save database current values
var floatReading;
var intReading;
var boolReading;
// Attach an asynchronous callback to read the data
databaseFloat.on(
  "value",
  (snapshot) => {
    floatReading = snapshot.val();
    console.log(floatReading);
    document.getElementById("reading-float").innerHTML = floatReading;
  },
  (errorObject) => {
    console.log("The read failed: " + errorObject.name);
  }
);
databaseInt.on(
  "value",
  (snapshot) => {
    intReading = snapshot.val();
    console.log(intReading);
    document.getElementById("reading-int").innerHTML = intReading;
  },
  (errorObject) => {
    console.log("The read failed: " + errorObject.name);
  }
);

databaseBool.on(
  "value",
  (snapshot) => {
    intReading = snapshot.val();
    console.log(intReading);
    document.getElementById("reading-bool").innerHTML = intReading;
  },
  (errorObject) => {
    console.log("The read failed: " + errorObject.name);
  }
);

function writeUserData(data) {
  firebase.database().ref("bool").set(data);
}
