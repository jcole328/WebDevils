"use strict";

// Declare all variables
var i, contentElems;

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