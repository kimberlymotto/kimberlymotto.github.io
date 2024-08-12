var dinero=0;
var j=1000;

dinero=parseFloat(prompt("Ingrese una cantidad   "));
 while(dinero<1000 || dinero>100000) 
{

    dinero=parseFloat(prompt("Ingrese una cantidad mayor a 1000   "));

}//fin while



var j=0; //inicializar


document.write("<center>TABLA DE EQUIVALENCIAS</center><br><br>")
document.write("__________________________________________________________________________________________________________<br>");
document.write("DOLARES-------------------------------BTC------------------------------------------------------------------------------------ETH<br>");
document.write("__________________________________________________________________________________________________________<br>");

while(j<dinero)  //comprobando
{
document.write("$"+j+"---------------------------------"+j/57810+"---------------------------------"+j/3062);
document.write("<br><br>");

j++;
}

