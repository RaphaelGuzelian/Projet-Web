class Produit{
    constructor(taille,sauce,ingredient){
        this.taille = taille;
        this.sauce = sauce;
        this.ingredient  = ingredient;
    }   
}

let reine = new Produit("moyen","tomate","FromLarChamp");
let margherita= new Produit("moyen","tomate","From");

function check(){
    if (window.location.search==="?id=1"){
        /*console.log(reine.taille,reine.sauce,reine.ingredient)*/
        document.getElementById('tomate')==check
    }
    else if (window.location.search==="?id=2"){
        /*console.log(margherita.taille,margherita.sauce,margherita.ingredient)*/ 
    }
}

check()









/*
listepizza=[reine,margherita];
for(let truc of listepizza){ 
    if(truc.id == produit_id){
        console.log(truc[i]);
    }
*/
 
