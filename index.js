
var paths = {};

function getFolderContents(folder, callback) {
    var rFolder = new XMLHttpRequest();
    rFolder.open("GET", folder, true);
    //rFolder.overrideMimeType("text/html; UTF-8")
    rFolder.onreadystatechange = function() {
        if (rFolder.readyState === 4 && rFolder.status == "200") {
            callback(rFolder.responseText);
        }
    }
    rFolder.send(null);
}

function fillPaths(dr1, dr2){

}

function generateImage(){

}

getFolderContents('./Sprites/_SAFE/', function(files){
    console.log(files);
    console.log("beep");
});
generateImage();