var sexo=new Array(6);
var trabajo=new Array(6);
var sueldo=new Array(6);
var edad=new Array(6);
var hombreN;
var MujeresN;
var PorcH;
var PorcM;
var sueldoPH;
var sueldoPM;




sexo=parseInt(prompt("Ingrese su genero \n 1-Femenino \n 2-Masculino"));
while(sexo<1 || sexo>2)
{
sexo=parseInt(prompt("Ingrese su genero \n 1-Femenino \n 2-Masculino"));
}

trabajo=parseInt(prompt("Posee trabajo \n 1-si \n 2-no"));  
while(trabajo<1 || trabajo>2)
{
trabajo=parseInt(prompt("Posee trabajo \n 1-si \n 2-no"));
}

sueldo=parseInt(prompt("Cual es su sueldo:  "));
while(sueldo<600 || sueldo>2000)
{
sueldo=parseInt(prompt("Cual es su sueldo:  "));
}

edad=parseInt(prompt("Cual es su edad:  "));
while(edad<18 || edad>40)
{
edad=parseInt(prompt("Cual es su edad:  "));
}



opc=parseInt(prompt("Eliga una opción \n 1-Porcentaje de hombres \n 2-Porcentaje de mujeres \n 3-sueldo hombre \n 4-sueldo mujeres \n 5-edad hombres \n 6-edad mujeres \n 7-toda la informacion")+"<br>")
while(opc<1 || opcion>6)
{
    opcion=parseInt(prompt("Eliga una opción \n 1-Porcentaje de hombres \n 2-Porcentaje de mujeres \n 3-sueldo hombre \n 4-sueldo mujeres \n 5-edad hombres \n 6-edad mujeres \n 7-toda la informacion")+"<br>")
}


if(sexo[i]==1 && trabaja[i]==2)
{
    hombresN=hombresN+1;
}
else if(sexo[i]==2 && trabaja[i]==2){
    mujeresN++
}













if(opc==7)
{

    document.write("_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________<br>");
    document.write("Porcentaje hombres-------------------------------Porcentaje mujeres-----------------------------Sueldo Hombres-----------------------------Sueldo mujeres-----------------------------Edad Hombres-----------------------------Edad Mujeres<br>");
    document.write("_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________<br>");

    while(j<hombres)  
    {
    document.write(porc[j].toFixed(2)+"---------------------------------"+sueldo[j].toFixed(2)+"---------------------------------"+edad[j]);
    document.write("<br><br>");
    



    j++;
    }

    
    while(j<mujeres)  
    {
    document.write(porc[j].toFixed(2)+"---------------------------------"+sueldo[j].toFixed(2)+"---------------------------------"+edad[j]);
    document.write("<br><br>");
    



    j++;
    }

}

