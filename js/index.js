function calcular(){
    let lata = document.getElementById("lata");
    let vidro = document.getElementById("vidro");
    let papel = document.getElementById("papel");
    let garrafa = document.getElementById("garrafa");
    let sv = Number(document.getElementById("Sv"));
    let saida = document.getElementById("saida");
    let mes = document.getElementById("mes");
    let ano = document.getElementById("ano");

 alert("ola estou aqui");

}

var i = setInterval(function () {
    
    clearInterval(i);
  
    // O código desejado é apenas isto:
    document.getElementById("loading").style.display = "none";
    document.getElementById("conteudo").style.display = "inline";

}, 3000);