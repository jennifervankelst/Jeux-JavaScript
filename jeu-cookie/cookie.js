let score = 0;
let prix = 1;
let multiplie = 1; // variable du multiplicateur
let temps = null;

const afficheScore = (new_score) => {
    score = new_score;
    document.querySelector("#affiche").innerHTML = new_score;
}

const afficheMultiplier = (new_multiplie) => {
    multiplie = new_multiplie;
    document.querySelector("#multiplier").innerHTML = "Prochain multiplicateur : x " + multiplie + 
    " pour :  " + prix + " points.";
}

//augmentation du score à chaque click
function augmente() {
    if(Date.now()- temps <= 10000) {
        afficheScore(score+1*multiplie*100);
    }
    else {
        afficheScore(score+1*multiplie);
        document.querySelector('#bonus').removeAttribute("disabled");
        document.querySelector('#bonus').setAttribute("enabled", false);
        // document.querySelector('#bonus').setAttribute("disabled", false);
    }
    if(score >= 20000){
        alert("C'est fini!!! :)");        
    }
}

//fonction d'achat de multiplicateur qui déduit le prix du score
function multiplicateur() {
    if(score >= prix) {
        if(multiplie <= 10) {
            afficheScore(score - prix);
            prix = prix * 2;
            afficheMultiplier(multiplie + 1);
            if(multiplie === 10) {
                document.querySelector("#Multiplicateur").setAttribute("disabled", false);
            }
        }
        
    }
    else {
        alert("Cliquez encore, ce n'est pas assez!");
    }
}
//Autoclick - quand activer, le bouton disparait de la fenêtre
function clicker() {
    if(score >= 200) {
        let temps = setInterval(augmente, 1000); 
        afficheScore(score - 200);
        document.querySelector('#Cliker').setAttribute("disabled", false);
        }
 else {
        alert('Cliquez cliquez!!! \n Allez continuer à cliquer!!!');
    }
}


//bonus
function Bonus() {
    if(score >= 500) {
        afficheScore( score - 500);
        temps = Date.now();
        document.querySelector('#bonus').setAttribute("disabled", true);
        document.querySelector('#bonus').removeAttribute("enabled");
        
        }
        else {
        alert("Mais cliquez encore plus vite!!!")
    }
}

//fonction save - sauvegarde du score
function sauver() {
    localStorage.setItem("score", score);
}

//Chargement du score sauvegardé.
function charger() {
    let monScore = localStorage.getItem("score");
    monScore = parseInt(monScore);
    afficheScore(monScore);
}

