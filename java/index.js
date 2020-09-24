alert("puta puedes por la re puta funcionar");
var bt = document.getElementById("btpro");

bt.addEventListener("click",() => {
    var txt1 = document.getElementById("n1");
    var txt2 = document.getElementById("n2");
    var txt3 = document.getElementById("n3");
    var res = document.getElementById("res");
    var res2 = document.getElementById("res2");
    var res3 = document.getElementById("res3");
    var res4 = document.getElementById("res4");

    var suma = parseFloat(txt1.value) + parseFloat(txt2.value) + parseFloat(txt3.value);
   if (isNaN(suma)){
       if ((txt1)<1 && (txt1)>=8){
        res2.innerHTML = "la nota numero 1 no es valida";
    }else if((txt2)>1 && (txt2)>=8){
        res3.innerHTML = "la nota numero 2 no es valida";
    }else if((txt3)>1 && (txt3)>=8){
        res4.innerHTML = "la nota numero 3 no es valida";
    }
    res.innerHTML ="hubo un error";
   }else{
       res.innerHTML = "el resultado es :"+suma;
   }
  
    
});