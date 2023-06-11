// variaveis que buscando dentro do windows os elementedos a serem  usados no carrossel

var setaDireita = window.document.getElementById("seta-dir");
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaEsquerda = window.document.getElementById("seta-esq")



// funcão que faz o display mostrar o iten oculto e ocultar o que esta aparecendo
function RolarParaDireita() {
    Bruna.style = "display:flex"
    Leonardo.style = "display:none"
    setaDireita.style = "display:none"
    setaEsquerda.style = " display:flex"
}
function RolarParaEsquerda() {
    Bruna.style = "display:none"
    Leonardo.style = "display:flex"
    setaDireita.style = "display:flex"
    setaEsquerda.style = " display:none"
}

