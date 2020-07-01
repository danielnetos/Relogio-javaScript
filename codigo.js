
function relogio(){

    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();
    var res = document.getElementById("relogio");

    if(hora <10){

        hora = "0" + hora;
    }
    if(min <10){

        min = "0" + min;
    }
    if(seg <10){

        seg = "0" + seg;
    }

    res.innerHTML = hora +":" + min + ":" + seg;
}
window.setInterval("relogio()",1000);