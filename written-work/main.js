/* Blank JavaScript File */


var synopsisBool = false;
var synopsis = null;
var prevSynIndex = 0;
var prevSynType = "none";
var moreBtn = null;

var synJSON = null;

var holders = null;
var mainContainer = null;


window.addEventListener("load", init, true); function init() {
    synopsisBool = false;
    synopsis = document.getElementsByClassName("synopsis");
    synJSON = "synopses.json";

    moreBtn = document.getElementsByClassName("moreBtn");

    holders = document.getElementsByClassName("holder-ver");

    mainContainer = document.querySelector("#main-container");
}

function previewToggle(type, index) {
    if(synopsisBool == false) {
        showSynopsis(type, index);
    } else if(index != prevSynIndex && type == prevSynType) {
        showSynopsis(type, index);
    } else if(type != prevSynType) {
       hideSynopsis(prevSynType, prevSynIndex);
       showSynopsis(type, index);
    } else {
         hideSynopsis(type, index);
    }
}

function showSynopsis(type, index) {
    synopsisBool = true;
    prevSynIndex = index;
    prevSynType = type;

    if(synopsis != null) {

        //get correct synopsis
        for (let i = 0; i < synopsis.length; i++) {
            if(synopsis[i].id == type + "Syn") {
                synopsis[i].hidden = false

                fetch("synopses.json")
                    .then(response => response.json())
                    .then(data => {
                        synopsis[i].innerText = data[0][type][index]
                    })
            }
        }

        //change height of bounding box
        for (let i = 0; i < holders.length; i++) {
            if(type == holders[i].id) {
                mainContainer.style.height = "1100px";

                var holderEl = document.querySelector("#" + holders[i].id);
                holderEl.style.height = "500px";
                holderEl.style.maxHeight = "500px";
            }
        }

        //hide more buttons
        for (let i = 0; i < moreBtn.length; i++) {
            moreBtn[i].hidden = true;
        }
    }
    
}

function hideSynopsis(type, index) {
    synopsisBool = false;

    if (synopsis != null) {
        //hide synopsis
        for (let i = 0; i < synopsis.length; i++) {
            if(synopsis[i].id == type + "Syn") {
                synopsis[i].hidden = true
            }
        }

        //change height of bounding box
        for (let i = 0; i < holders.length; i++) {
            if(type == holders[i].id) {
                mainContainer.style.height = "800px";

                var holderEl = document.querySelector("#" + holders[i].id);
                holderEl.style.height = "230px";
                holderEl.style.maxHeight = "230px";
            }
        }

        //show more buttons
        for (let i = 0; i < moreBtn.length; i++) {
            moreBtn[i].hidden = false;
        }
    }
}