var bt2 =document.getElementById("btace");
var bt = document.getElementById("btpro");
var bt3 = document.getElementById("btotal");

bt.addEventListener("click",() => {
    var txt1 = document.getElementById("n1");
    var txt2 = document.getElementById("n2");
    var txt3 = document.getElementById("n3");
    var res = document.getElementById("res");
    var res2 = document.getElementById("res2");
    var res3 = document.getElementById("res3");
    var res4 = document.getElementById("res4");
    var aprobo = document.getElementById("apro");

    var suma = parseFloat(txt1.value) + parseFloat(txt2.value) + parseFloat(txt3.value);
    var promedio = suma/3; 
    var prodecimal = promedio.toFixed(1);
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
       res.innerHTML = "el promedio es:"+prodecimal;
   }
  
    
});
bt2.addEventListener("click",() =>{

});
bt3.addEventListener("click",() =>{

});