//include html
function includeHTML(elementId = 'changeme', html = './pages/ValClient.html') {
    let thatElement = document.getElementById(elementId);

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                thatElement.innerHTML = this.responseText;
            }

            if (this.status == 404) {
                return includeHTML(elementId, '../404.html');
            }
        }
    }

    xhttp.open("GET", html, false);
    xhttp.send();
}

includeHTML('changeme', './pages/ValClient.html');