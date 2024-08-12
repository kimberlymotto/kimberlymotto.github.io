var si,i,d,sf,n,r,descuentu,emple;
var Gerente=0,Empleado=0;


function tabla (si,i,d,sf,n){
    document.write('<b>PLANILLA DE EMPLEADOS</b><br><br>');
			document.write('<table border=2>');
			document.write('<tr><td>Número obrero</td><td>Nombre Obrero</td><td>Cargo</td><td>Salario inicial</td><td>Descuento</td><td>Uniforme</td><td>Salario Final</td></tr>');
n=parseInt(prompt("ingrese la cantidad de empleados"));
            
			for (i=1;i<=n;i++)
				{
					emple=prompt('Digite el nombre del obrero número '+i+'');
                     r=prompt('Digite su cargo \n 1-Gerente  \n 2-Empleado')
                     if(r==1)
                     {
                        r='Gerente'
                        descuentu=50;
                        Gerente++;

                     }
                     else if(r==2)
                     {
                        r='Empleado'
                        descuentu=25;
                        Empleado++;
                     }
                     else
                     {
                        r=prompt('Digite su cargo bien su rango \n 1-Gerente  \n 2-Empleado')  
                     }
        
					si=prompt('Digite el salario inicial','');
                    while(si<=365)
                    {
                        si=prompt('Digite un salario mayor a 365','');
                    }
					d=si*0.05;
					sf=(si-d)-descuentu;
                    sf=sf+n;
                     var tota=sf/n;

					document.write('<tr><td>'+i+'</td><td>'+emple+'</td><td>'+r+'</td><td>$'+si+'</td><td>$'+d+'</td><td>$'+descuentu+'</td><td>$'+sf+'</td></tr>');
                    
				}
			document.write('</table>');
            document.write("el monto total de los salarios es :"+tota.toFixed(2));
            document.write("<br>");
            document.write("el monto total del primer descuentos es :"+d.toFixed(2));
            document.write("<br>");
            document.write("el monto total del primer descuentos por uniforme es :"+descuentu.toFixed(2));
            document.write("<br>");
            document.write("el total de gerentes es :"+Gerente);
            document.write("<br>");
            document.write("el total de empleados es :"+Empleado);
            document.write("<br>");



}
	