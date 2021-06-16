const container = document.getElementById("container");
const buttoun = document.getElementById("buttoun");
const mast = document.getElementById("mast");
const sail1 = document.getElementById("sail-1");
const sail2 = document.getElementById("sail-2");
buttoun.addEventListener("click", sail);

function sail() {
    buttoun.innerText = 'İyi Yolculuklar'
    buttoun.style.setProperty("border-radius", "10px 10px 100px 100px");
    mast.style.setProperty("transform", " translate(170px, 48px) rotatez(-0deg)");
    setTimeout(hoist, 500);
}

function hoist() {
    sail1.style.setProperty("transform", "translatex(16px) scaley(1)");
    sail2.style.setProperty("transform", "translate(-104px, -145px) scaley(1)");
    setTimeout(sailaway, 1000);
}

function sailaway() {
    container.style.setProperty("transform", "translatex(calc(100vw - 150px)");
}