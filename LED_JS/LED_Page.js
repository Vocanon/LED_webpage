window.addEventListener("load", setup);

function setup() {

    document.getElementsByTagName("form")[0].addEventListener("submit", (event) => {
        event.preventDefault();
        gatherinfo();
    });
}

function gatherinfo() {
    form = document.forms.namedItem("forms1")
    const datas = new FormData(form)
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = responder;
    var name = document.getElementById("Name").value;
    var emails = document.getElementById("Email").value;
    var Programname = document.getElementById("PName").value;
    var jsons = JSON.stringify(datas);
    var json = name;
    xml.open('Post', 'http://localhost', true);
    console.log();

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