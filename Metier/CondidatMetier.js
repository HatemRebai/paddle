
var Candidats = {

    nom: "",
    prenom: "",
    email: "",
    tel: "",
    adress: "",
    level: "",
    idc: Math.floor(Math.random() * 1000)
}
function ajoutCandidat() {
    var tableau = JSON.parse(localStorage.getItem("ERP"));
    Candidats.nom = document.getElementById("nomc").value;
    Candidats.prenom = document.getElementById("prenomc").value;
    Candidats.email = document.getElementById("emailc").value;
    Candidats.tel = document.getElementById("telc").value;
    Candidats.nom = document.getElementById("nomc").value;
    Candidats.level = document.getElementById("levelc").value;
    Candidats.adress = document.getElementById("addrc").value;
    
    if (tableau == null) {
        tableau = []
    }
  ERP.Condidat = tableau[3]     
  if (ERP.Condidat == null) {
    ERP.Condidat = []
}
      
console.log(Candidats)
console.log(ERP.Condidat)
ERP.Condidat.push(Candidats)
    
   
    tableau[3] = ERP.Condidat;
    localStorage.setItem("ERP", JSON.stringify(tableau));
    document.getElementById("nomc").value = null;
    document.getElementById("prenomc").value = null;
    document.getElementById("emailc").value = null;
    document.getElementById("telc").value = null;
    document.getElementById("nomc").value = null;
    document.getElementById("levelc").value = null;
    document.getElementById("addrc").value = null;

}

function show() {
    var tableau = JSON.parse(localStorage.getItem("ERP"));
    if (tableau == null) {
        tableau = [];
    } else {
        ERP.Condidat = tableau[3];
    }
    var htmlc = '';
    for (let index = 0; index < ERP.Condidat.length; index++) {
        htmlc += '<div class="col-md-4 col-sm-4">'
        htmlc += '<div class="panel panel-success">'
        htmlc += '<div class="panel-heading">' + ERP.Condidat[index].idc + '</div>'
        htmlc += '<div class="panel-body">'
        htmlc += '<p>' + ERP.Condidat[index].nom + '</p>'
        htmlc += '<p>' + ERP.Condidat[index].prenom + '</p>'
        htmlc += '<p>' + ERP.Condidat[index].email + '</p>'
        htmlc += '<p>' + ERP.Condidat[index].adress + '</p>'
        htmlc += '<p>' + ERP.Condidat[index].level + '</p>'
        htmlc += '</div>'
        htmlc += '<div class="panel-footer">'
        htmlc += '<p>' + ERP.Condidat[index].tel + '</p>'
        htmlc += '<p><button onclick="modifier(' + ERP.Condidat[index].idc + ')">modif</button>'
        htmlc += '</div>'
        htmlc += '</div>'
        htmlc += '</div>'
        document.getElementById('listc').innerHTML = htmlc;
    }
    htmlc = '';
    //    location.href='Candidats.html' ne fonctionne pas;


}
function modifier(idc) {
    localStorage.setItem('upd', idc);
    location.href = "./AjoutCondidats.html"
}
function modif(){
    var udc = JSON.parse(localStorage.getItem('upd'));
    var tab = JSON.parse(localStorage.getItem('ERP'));
   
    tab[3].forEach(element => {
        if (element.idc == udc) {
            element.nom = document.getElementById("nomc").value;
            element.prenom = document.getElementById("prenomc").value;
            element.email = document.getElementById("emailc").value;
            element.tel = document.getElementById("telc").value;
            element.adress = document.getElementById("addrc").value;
            element.level = document.getElementById("levelc").value;

           
        }
    });
    localStorage.setItem("ERP", JSON.stringify(tab));
}
function remplir() {
    var udc = JSON.parse(localStorage.getItem('upd'));
    var tab = JSON.parse(localStorage.getItem('ERP'));
  console.log(tab)
  if(tab[3]!=null){
    tab[3].forEach(element => {
        if (element.idc == udc) {
            console.log(element)
            document.getElementById("nomc").value = element.nom;
            document.getElementById("prenomc").value = element.prenom;
            document.getElementById("emailc").value = element.email;
            document.getElementById("telc").value = element.tel;
            document.getElementById("addrc").value = element.adress;
            document.getElementById("levelc").value = element.level;
        }
    });
    }
}