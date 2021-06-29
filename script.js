"use strict";
//get the bojects from HTML where we will display our countervalues
const firstCounter = document.querySelector(".firstCounter");
//
const casClock = function () {
  setInterval(() => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const min = String(now.getMinutes()).padStart(2, "0");
    const sec = String(now.getSeconds()).padStart(2, "0");

    firstCounter.textContent = `${hours}:${min}:${sec}`;
  }, 1000);
};
//function call
casClock();
