function calcular(){
    let material = document.getElementById("material").value;
    let tempo = document.getElementById("tempo").value;
    let sv = document.getElementById("qtd").value;
    let saida = document.getElementById("saida");
  
    let result = 0;
    
    if(material.value == "papel" && tempo.value == "mes"){
        result = (sv * 1) * 4.2;
    }else if (material.value == "papel" && tempo.value == "ano"){
        result = (sv * 2) * 52;
    }
   

    saida.innerHTML = `De acordo com os dados fornecidos o consumo de ${material} por ${tempo} consumido foi de ${result} kg.`;

}

var i = setInterval(function () {
    
    clearInterval(i);
  
    // O código desejado é apenas isto:
    document.getElementById("loading").style.display = "none";
    document.getElementById("conteudo").style.display = "inline";

}, 3000);