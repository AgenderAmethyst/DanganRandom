var paths = {};
var dr1button;
var dr2button;

var flagimg;
var spriteimg;

function updatePaths() {
    paths = safe_paths;
    if (dr1button.checked){
        paths.push(dr1_paths);
    }
    if (dr2button.checked){
        paths.push(dr2_paths);
    }
    console.log(paths)
}

function generateImage(){
    
}

window.onload = function() {
    dr1button = document.getElementById('dr1spoiler');
    dr2button = document.getElementById("dr2spoiler");

    flagimg = document.getElementById("flag");
    spriteimg = document.getElementById("sprite");
}

generateImage();