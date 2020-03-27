var paths = {};
var dr1button = document.getElementById(dr1spoiler);
var dr2button = document.getElementById(dr2spoiler);

var flagimg = document.getElementById(flag);
var spriteimg = document.getElementById(sprite);

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

generateImage();