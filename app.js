
var boxOfImg = document.getElementById("boxOfImg");

var largeImg = document.getElementById("largeImg");


function openSignbtn(img) {
    boxOfImg.style.display = "flex";
    largeImg.src = img;
}

function crossSign() {
    boxOfImg.style.display = "none";
}
