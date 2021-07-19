/* Blank JavaScript File */


var synopsisBool;
var synopsis;
var holders;
var mainContainer;


window.addEventListener("load", init, true); function init() {
    synopsisBool = false;
    synopsis = document.getElementById("scriptSynopsis");
    holders = document.getElementsByClassName("holder-ver");

    mainContainer = document.querySelector("#main-container");
}

function previewToggle(type, index) {
    if(synopsisBool == false) {
        showSynopsis(type, index);
    } else {
        hideSynopsis(type, index);
    }
}

function showSynopsis(type, index) {
    synopsisBool = true;
    synopsis.hidden = false

    for (let i = 0; i < holders.length; i++) {
        if(type == holders[i].id) {
            mainContainer.style.height = "1100px";

            var holderEl = document.querySelector("#" + holders[i].id);
            holderEl.style.height = "500px";
            holderEl.style.maxHeight = "500px";
        }
    }
}

function hideSynopsis(type, index) {
    synopsisBool = false;
    synopsis.hidden = true;

    for (let i = 0; i < holders.length; i++) {
        if(type == holders[i].id) {
            mainContainer.style.height = "800px";

            var holderEl = document.querySelector("#" + holders[i].id);
            holderEl.style.height = "230px";
            holderEl.style.maxHeight = "230px";
        }
    }
}