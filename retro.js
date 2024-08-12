var si,i,d,sf,n,dinero;
document.write('<b>PLANILLA DE EMPLEADOS</b><br><br>');
document.write('<table border=1>');
document.write('<tr><td>Número obrero</td><td>Nombre Obrero</td><td>Salario inicial</td><td>Descuento</td><td>Salario final</td></tr>');
for (i=1;i<=3;i++)
    {

     dinero=parseFloat(prompt("Digite el salario inicial del empleado  "));
 while(dinero<1000 || dinero>365) 
{

    dinero=parseFloat(prompt("Ingrese una cantidad mayor a 365  "));

}
        si=prompt('Ingrese el nombre del empleado','');
        d=si*0.05;
        sf=si-d;
        document.write('<tr><td>'+i+'</td><td>'+n+'</td><td>$'+si+'</td><td>$'+d+'</td><td>$'+sf+'</td></tr>');
    }
document.write('</table>');