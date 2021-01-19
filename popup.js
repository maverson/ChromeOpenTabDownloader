var foundLinks = [];
var fileTypes = ["apng", "avif", "gif", "jpg", "jfif", "pjpeg", ".pjp", "jpeg", "png", "svg", "webp"];
function displayURLs() {
    var urlTable = document.getElementById("urls");

}

function gatherURLs(tabs) {

}
//using a url filter for the time being, eventually switch to a document property search
//test if case adjustments needed
function filterURLs() {
    for (var i = 0; i < foundLinks.length; i++) {
        for (var f = 0; f < fileTypes.length; f++)
        {
            if(foundLinks[i].toLocaleLowerCase().endsWith(`.${fileTypes[f]}`)) {

            }
            else if(foundLinks[i].startsWith(`.${fileTypes[f]}`)) {

            }
            else if(foundLinks[i].search(`.${fileTypes[f]}`)) {//fix

            }
            else {
                foundLinks = foundLinks.splice(i, 1);
                i--;
            }
        }
    }
}

function downloadURLs() {
foundLinks.forEach(download)
}

function download(input) {
    chrome.downloads.download({
        url: input
        }
    )
}

window.onload = function() {
    document.getElementById('filter').onkeyup = filterURLs;//does not account for auto fillers see if a: setInterval with ObserveInputValue on the input when in focus then remove when out of focus
    document.getElementById('download').onclick = downloadURLs;

    chrome.tabs.query({}, tabs => {
        let temp;
        for (temp in tabs) {
            if(tabs[temp].status = complete) {
                foundLinks += tabs[temp].url;
            }
        }
    });

}