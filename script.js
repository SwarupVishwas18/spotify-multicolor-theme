var card = document.querySelector('#card');
var bodyBack = ["#231514","#282828","#975e57","#eeeeee"];
var cardBack = ["#231514","#121212","#975e57","#eeeeee"];
var textCol = ["#97655d","#ffffff","#fffdff","#000000"]
var shadowCol = ["#895545","#181818","#1a0f0d","#b3b3b3"]
var i = 0

function changeCol(){
    document.body.style.backgroundColor = bodyBack[i];
    card.style.backgroundColor = cardBack[i];
    document.body.style.color = textCol[i];
    card.style.boxShadow = "0px 0px 30px "+shadowCol[i];
    i++;
    if(i>=bodyBack.length){
        i=0
    }
}

card.onclick = changeCol