window.addEventListener("load", setup);

function setup() {
    document.getElementById("testers").addEventListener("click", gathers);
    document.getElementsByTagName("form")[0].addEventListener("submit", gatherinfo);


}

function gatherinfo() {
    var exporter = new FormData(document.getElementById('form'));
    console.log(exporter + "hello");
    var urls = "";



}

function gathers() {
    var doc = new FormData(document.getElementById('led_f'))

    var xml = new XMLHttpRequest();
    xml.onreadystatechange = responder;
    var name = document.getElementById("Name").value;
    var emails = document.getElementById("Email").value;
    var Programname = document.getElementById("PName").value;
    doc.append(name);
    doc.append(emails);
    var file = document.getElementById("Prog").value;
    var j = name;
    xml.open('Post', 'http://172.16.42.116:4006/create', true);
    xml.send(doc);



    document.getElementById("test").innerHTML = file;
    console.log(file, Programname, emails, name);

    function responder() {
        if (xml.readyState === XMLHttpRequest.DONE) {
            var status = xml.status;
            if (status === 0 || (status >= 200 && status < 400)) {
                // The request has been completed successfully

                console.log(xml.responseText);
            } else {
                // Oh no! There has been an error with the request!
                console.log("error");
            }
        }
    }
}