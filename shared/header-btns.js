var buttons = document.getElementsByClassName('header-buttons');

function pageLoaded(s) {
    for (let i = 0; i < buttons.length; i++) {
        if(buttons[i].id != s) {
            buttons[i].disabled = false;
        } else {
            buttons[i].disabled = true
        }
    }
}