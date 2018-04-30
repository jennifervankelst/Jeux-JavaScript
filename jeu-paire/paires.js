let numClick = 0;
let premier;
let second;
let partie = 0;

let cards = [];
cards[0] = "ane.jpg";
cards[1] = "chat.jpg";
cards[2] = "chien.jpg";
cards[3] = "lama.jpg";
cards[4] = "lapin.jpg";
cards[5] = "ours.jpg";
cards[6] = "ane.jpg";
cards[7] = "chat.jpg";
cards[8] = "chien.jpg";
cards[9] = "lama.jpg";
cards[10] = "lapin.jpg";
cards[11] = "ours.jpg";


//fonction melanger les cartes du tableau
function melanger(tableau) {
    let compteur = tableau.length;
    while (compteur > 0) {
        let index = Math.floor(Math.random() * compteur);
        compteur--;

        let temps = tableau[compteur];
        tableau[compteur] = tableau[index];
        tableau[index] = temps;
    }
    return tableau;
}

let M;
M = melanger(cards);

//quand on clic sur une carte 
function choisi(card) {
    if(numClick == 0) {
        premier = card;
        document.images[card].src = cards[card];
        numClick = 1;
    }
    else if (numClick == 1) {
        numClick = 2;
        second = card;
        document.images[card].src = cards[card];
        timer = setInterval(control, 500);
    }
    else {
        alert("Vous pouvez cliquez que sur une carte!");
    }
}
//controle des mêmes cartes
function control(){
    clearInterval(timer);
    numClick = 0;
    if (cards[second] == cards[premier]) {
        partie++;
        if (partie == 6) {
            alert("Félicitation vous avez trouvé toutes les cartes! :)");
            location.reload();
        }
    }
    else {
        document.images[premier].src = "cheval.jpg";
        document.images[second].src = "cheval.jpg";
        return;
    }
}