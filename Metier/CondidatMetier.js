// class Personne {
      
//     constructor(nom, prenom, email,tel,addrress,categorie) {
//         this.nom=nom;
//         this.prenom=prenom;
//         this.email=email;
//         this.tel=tel;
//         this.address=addrress;
//         this.categorie=categorie;
//  }

// }
 
// var js = document.createElement("script");
// js.type = "text/javascript";
// include("Enties/Personne.js") ;
// document.body.appendChild(js);
// document.onload();
// class Condidat extends Personne  {
    
//     constructor(){
        
//     }
//     name() {
//         console.log(nom);
//     }
// }

class CondidatMetier {
     
    constructor (){
        var condidat = new Condidat("hhhhh");
       this.condidat=condidat;
        document.getElementById("t").innerHTML=this.condidat.name();
        } 
}
 