const imgs = document.getElementById("imgs");
let cpt = 0;
const left = document.getElementById("left");
const right = document.getElementById("right");
const text = document.getElementById("text");
const avisImage = document.getElementById("avisImage");
const avisText = document.getElementById("avisText");
const allText = ["Une application où vous pouvez tout centraliser et ainsi profiter du plaisir du full remote", "Gardez un oeil sur chaque outil", "Faites passer votre experience full remote à un niveau supérieur", "Combinez efficacité et sécurité dans votre travail", "Konect vous permet de respecter l'environnement."];
const allAvis = ["Ce qui ferait un bon environnement de travail ce serait d’avoir un outil semblable mais avec une centralisation de tous les éléments de manière vraiment simple et surtout d’avoir la possibilité d’avoir des normes Européennes concernant le partage de contenus dans l’entreprise.", " Il faudrait que les recruteurs me laissent libre de travailler comme je veux pendant toute la création et que je leur dise juste comment récupérer mon travail lorsqu’il est terminé. En gardant une messagerie ou autre si j’ai besoin d’informations supplémentaires. ", "Un environnement idéal serait tout simplement quelque chose qui regroupe tous les différents outils qui permettent de faire du full Remote avec les mails, les visios, les messages avec les collègues ou les présentations."];
const allProfile = ["user/user1.jpg", "user/user2.jpg", "user/user3.jpg"];
let avisCpt = 0;

function changeAvis() {
    console.log(avisCpt);
    if(avisCpt == 2) {
        avisCpt = 0;
        avisText.innerHTML = `<h4>"${allAvis[avisCpt]}"</h4>`;
        avisImage.innerHTML = `<img src="${allProfile[avisCpt]}" alt="user" style="width: 300px; height: 450px; border-radius: 50%">`;
    } else {
        avisCpt++;
        avisText.innerHTML = `<h4>"${allAvis[avisCpt]}"</h4>`;
        avisImage.innerHTML = `<img src="${allProfile[avisCpt]}" alt="user" style="width: 300px; height: 450px; border-radius: 50%">`;
    }
}

setInterval(() => {
    changeAvis()
}, 4000);

left.addEventListener("click", () => {
    if (cpt == 0) {
        cpt = 4;
        imgs.style.transform = `translateX(-${100 *cpt}%)`;
    } else {
        cpt--;
        imgs.style.transform = `translateX(-${100 *cpt}%)`;
    }
    text.innerHTML = `<h1>${allText[cpt]}</h1>`;
});

right.addEventListener("click", liveAction);

function liveAction () {
    cpt++;
    if (cpt == 5) {
        cpt = 0;
    }
    console.log(cpt);
    imgs.style.transform = `translateX(-${100 *cpt}%)`;
    text.innerHTML = `<h1>${allText[cpt]}</h1>`;
}

setInterval(liveAction,5000);