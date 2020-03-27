
var paths = {};

function getFolderContents(folder, callback) {
    var rFolder = new XMLHttpRequest();
    rFolder.open("GET", folder, true);
    rFolder.overrideMimeType("text/html")
    rFolder.send(null);
    var ret = rFolder.responseText;
    return ret.split('\n');
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