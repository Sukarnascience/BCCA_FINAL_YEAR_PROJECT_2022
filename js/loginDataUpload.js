/*
 * Title : Write in firebase database
 * Date  : 29-Mar-2022
 * Author: Sukarna Jana
 */

import firebase from "firebase/app";

var firebaseConfig = {
    apiKey: "AIzaSyARGlPoaDtpoeh33sEnSfkVxW_z5YaCq5M",
    authDomain: "bcca3rd-dd99e.firebaseapp.com",
    projectId: "bcca3rd-dd99e",
    storageBucket: "bcca3rd-dd99e.appspot.com",
    messagingSenderId: "90129283592",
    appId: "1:90129283592:web:ab9feddaf48f4336372fbd",
    measurementId: "G-T794V880P0"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

function saveMyDataLocally(){

    var name = document.getElementById("username").value
    var email = document.getElementById("email").value
    var phoneNo = document.getElementById("phoneNo").value
    var adharNo = document.getElementById("adharNo").value
    var address = document.getElementById("address").value
    var password = document.getElementById("password").value
    var rePassword = document.getElementById("rePassword").value

    if(password != rePassword){
        alert("Please check your Password");
    }

    alert("Name :"+name+"\nEmail:"+email+"\nPhone No:"+phoneNo+"\nAdhar No:"+adharNo+"\nAddress:"+address);

    //let userRef = this.database.ref('users/'+adharNo).set({
    this.database.ref('users/'+adharNo).set({
    //var ref = firebase.database().ref('users/'+adharNo).set({
        name : name,
        email : email,
        phoneNo : phoneNo,
        address : address,
        password : password
    })
    //console.log(ref);
    alert("Account Created Successfully");
    
}
