const imgs = document.getElementById("imgs");
let cpt = 0;
const left = document.getElementById("left");
const right = document.getElementById("right");

left.addEventListener("click", () => {
    if (cpt == 0) {
        cpt = 4;
        imgs.style.transform = `translateX(-${100 *cpt}%)`;
    } else {
        cpt--;
        console.log(cpt);
        imgs.style.transform = `translateX(-${100 *cpt}%)`;
    }
});

right.addEventListener("click", liveAction);

function liveAction () {
    cpt++;
    if (cpt == 5) {
        cpt = 0;
    }
    console.log(cpt);
    imgs.style.transform = `translateX(-${100 *cpt}%)`;
}

setInterval(liveAction,5000);