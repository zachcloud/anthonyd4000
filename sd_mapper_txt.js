"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Anthony Davis
   Date:   11/1/18

*/

/* Date/Time */
var thisTime = new Date();
var dateStr = thisTime.toLocaleDateString();
var timeStr = thisTime.toLocaleTimeString();

/* Display Date/Time */
 document.getElementById("timeStamp").innerHTML = dateStr + " " + timeStr;


var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
var month = thisMonth;
var hour = thisHour;
var mapNum = (2 * month + hour) % 24;
var imgStr = "<img src='sd_sky"+mapNum+".png' />";
imgStr.replace("Map", mapNum);

/* Map */

document.getElementById("planisphere").insertAdjacentHTML('afterBegin', imgStr);

