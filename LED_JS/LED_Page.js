window.addEventListener("load", setup);

function setup() {
    deletedefaults();
    document.getElementsByTagName("form")[0].addEventListener("submit", gatherinfo);

}

function gatherinfo {
    var name = document.getElementById('Name').value;
    var emails = document.getElementById('Email').value;
    var Programname = document.getElementById('PName').value;

}