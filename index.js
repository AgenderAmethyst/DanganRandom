var paths = {};
var dr1button;
var dr2button;

var flagimg;
var spriteimg;

function updatePaths() {
    paths = safe_paths;
    if (dr1button.checked){
        paths = paths.concat(dr1_paths);
    }
    if (dr2button.checked){
        paths = paths.concat(dr2_paths);
    }
}

function generateImage(){
    updatePaths();
    spriteimg.src = paths[Math.floor(Math.random()*paths.length)]
    flagimg.src = flag_paths[Math.floor(Math.random()*flag_paths.length)]
}

window.onload = function() {
    dr1button = document.getElementById('dr1spoiler');
    dr2button = document.getElementById("dr2spoiler");

    flagimg = document.getElementById("flag");
    spriteimg = document.getElementById("sprite");
}

generateImage();