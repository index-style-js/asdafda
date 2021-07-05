var firebaseConfig = {
      apiKey: "AIzaSyBxDz4KF9wfwkRgUfBBlH5li4ikOxf1hR0",
      authDomain: "practice-c5aab.firebaseapp.com",
      databaseURL: "https://practice-c5aab-default-rtdb.firebaseio.com",
      projectId: "practice-c5aab",
      storageBucket: "practice-c5aab.appspot.com",
      messagingSenderId: "791348587365",
      appId: "1:791348587365:web:f7d29790a872d6a8a1cf8c",
      measurementId: "G-Z408QQJ1TV"
    };
    firebase.initializeApp(firebaseConfig);

function addRoom(){

room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_room.html"

}
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!"
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - "  + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){

console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout(){

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";

}