const imgs = document.getElementById("imgs");
let cpt = 0;
const left = document.getElementById("left");
const right = document.getElementById("right");
const text = document.getElementById("text");
const avis = document.getElementById("avis");
const allText = ["Text1", "Text2", "Text3", "Text4", "Text5"];

left.addEventListener("click", () => {
    if (cpt == 0) {
        cpt = 4;
        imgs.style.transform = `translateX(-${100 *cpt}%)`;
    } else {
        cpt--;
        imgs.style.transform = `translateX(-${100 *cpt}%)`;
    }
    text.innerHTML = `<h3>${allText[cpt]}</h3>`;
});

right.addEventListener("click", liveAction);

function liveAction () {
    cpt++;
    if (cpt == 5) {
        cpt = 0;
    }
    console.log(cpt);
    imgs.style.transform = `translateX(-${100 *cpt}%)`;
    text.innerHTML = `<h3>${allText[cpt]}</h3>`;
}

setInterval(liveAction,5000);