"use strict";

// Declare all variables
var i, contentElems;

/* wait until all phonegap/cordova is loaded then call onDeviceReady*/
document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady() {
    StatusBar.overlaysWebView(false); // force ios to show status bar
    
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