"use strict";

// Debug function togle in console
var debug = true;

// Declare all variables
var i, contentElems;

/* wait until all phonegap/cordova is loaded then call onDeviceReady*/
document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady() {
    StatusBar.overlaysWebView(false); // force ios to show status bar

    showLogOnPannel();
}
function showLogOnPannel() {

	// Get all elements with class="tabContent" and hide them
    contentElems = document.getElementsByClassName("pannelContent");
    for (i = 0; i < contentElems.length; i++) {
        contentElems[i].style.display = "none";
    }

    // Show the logOn pannel
	document.getElementById('logOnPannelId').style.display = "block";
}

function showPannel(pannelName) {

    // Get all elements with class="tabContent" and hide them
    contentElems = document.getElementsByClassName("pannelContent");
    for (i = 0; i < contentElems.length; i++) {
        contentElems[i].style.display = "none";
    }

    // Show the current pannel
    document.getElementById(pannelName).style.display = "block";
}		

function logOn(pannelName, form){

    if (!form.checkValidity()) {
        alert("Please fill in all feilds.");
    }

    else{
        var userName = document.getElementById("userNameInputId").value;
        var password = document.getElementById("passwordInputId").value;

        if (debug === true){
            console.log(userName);
            console.log(password);
        }
        
        // Database validation that the user credentials are correct
        // Test values w/o database
        if (userName === "jdcolem5" && password === "password") {
            showPannel(pannelName);
        }
        else if (userName === "jfdanie1" && password === "password") {
            showPannel(pannelName);
        }
        else if (userName === "ksarsam" && password === "password") {
            showPannel(pannelName);
        }
        else if (userName === "jcpratt" && password === "password") {
            showPannel(pannelName);
        }
        else if (userName === "qhnguye4" && password === "password") {
            showPannel(pannelName);
        }
        else{
            alert("User Name or Password was incorrect.")
            document.getElementById("userNameInputId").value = "";
            document.getElementById("passwordInputId").value = "";
        }
    }
}

function takePicture(pannelName){
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI
    });
    function onSuccess(imgData){

        showPannel(pannelName);

        // shows picture that was taken
        var image = document.getElementById("img");
        image.src = imgData;
    }
    function onFail(msg){
        alert('Failed because: ' + msg);
    }
}