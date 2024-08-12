let servicio, forma, costo,frecuente, desc;
//captura de datos

alert("Servicios disponibles");
servicio=parseInt(prompt("Ingrese 1-Alisado \n 2-Uñas \n 3-Tintes \n 4-Depilación laser \n 5-Facial"));
while(servicio<1 || servicio>5)
    {
    servicio=parseInt(prompt("Ingrese correctamente \n 1-Alisado \n 2-Uñas \n 3-Tintes \n 4-Depilación laser \n 5-Facial"));
    }
   
    desc=costo*0.25;
    forma=parseInt(prompt("Ingrese la forma de pago \n 1-credito \n 2-efectivo "));
    while(forma<1 || forma>2)
        {
            forma=parseInt(prompt("Ingrese la forma de pago"));
        }

        switch(servicio)
        {
            case 1:
                {
           costo=50;
           break;
                }
             case 2:
                 {
             costo=25;
             break;
                 }
            case 3:
              {
             costo=35;
              break;
                 }
            case 4:
                {
            costo=100;
            break;
                }

          default:
            {
                costo=75;
                break;
            }
        }//fin sw

        //impresion
        if(forma==1 && servicio==1)
        {
            document.write("Usted se hizo un alisado<br>");
            document.write("Usted ha cancelado con tarjeta de crédito<br>");
            document.write("El costo incial del servicio es de:  "+(costo)+"<br>");
            document.write("Se le hará un recargo de 10% "+(costo*0.10).toFixed(2)+"<br>");
            document.write("Se le hará un descuento del 25% por ser cliente frecuente "+(costo*0.25)+"<br>");
            document.write("El pago total es de:   "+(costo*1.10));
        }

        if(forma==1 && servicio==2)
        {
            document.write("Usted se hizo las uñas<br>");
            document.write("Usted ha cancelado con tarjeta de crédito<br>");
            document.write("El costo incial del servicio es de:  "+(costo)+"<br>");
            document.write("Se le hará un recargo de 10% "+(costo*0.10).toFixed(2)+"<br>");
            document.write("Se le hará un descuento del 25% por ser cliente frecuente "+(costo*0.25)+"<br>");
            document.write("El pago total es de:  "+(costo*1.10));
        }

        if(forma==1 && servicio==3)
        {
            document.write("Usted se hizo un tinte<br>");
            document.write("Usted ha cancelado con tarjeta de crédito<br>");
            document.write("El costo incial del servicio es de:  "+(costo)+"<br>");
            document.write("Se le hará un recargo de 10% "+(costo*0.10).toFixed(2)+"<br>");
            document.write("Se le hará un descuento del 25% por ser cliente frecuente "+(costo*0.25)+"<br>");
            document.write("El pago total es de:  "+(costo*1.10));
        }

        if(forma==1 && servicio==4)
        {
            document.write("Usted se hizo una depilación laser<br>");
            document.write("Usted ha cancelado con tarjeta de crédito<br>");
            document.write("El costo incial del servicio es de:  "+(costo)+"<br>");
            document.write("Se le hará un recargo de 10% "+(costo*0.10).toFixed(2)+"<br>");
            document.write("Se le hará un descuento del 25% por ser cliente frecuente "+(costo*0.25)+"<br>");
            document.write("El pago total es de:  "+(costo*1.25));
        }

        if(forma==1 && servicio==5)
        {
            document.write("Usted se hizo un facial<br>");
            document.write("Usted ha cancelado con tarjeta de crédito<br>");
            document.write("El costo incial del servicio es de:  "+(costo)+"<br>");
            document.write("Se le hará un recargo de 10% "+(costo*0.10).toFixed(2)+"<br>");
            document.write("Se le hará un descuento del 25% por ser cliente frecuente "+(costo*0.25)+"<br>");
            document.write("El pago total es de:  "+(costo*1.25));
        }

        else if(forma==2 && servicio==1)
        {
            document.write("Usted se hizo un alisado<br>");
            document.write("Usted ha cancelado con efectivo<br>");
            document.write("El pago total es de:  "+costo);
        }

        else if(forma==2 && servicio==2)
        {
            document.write("Usted se hizo las uñas<br>");
            document.write("Usted ha cancelado con efectivo<br>");
            document.write("El pago total es de:  "+costo);
        }

        else if(forma==2 && servicio==3)
        {
            document.write("Usted se hizo un tinte<br>");
            document.write("Usted ha cancelado con efectivo<br>");
            document.write("El pago total es de:   "+costo);
        }

        else if(forma==2 && servicio==4)
        {
            document.write("Usted se hizo una depilación laser<br>");
            document.write("Usted ha cancelado con efectivo<br>");
            document.write("El pago total es de:   "+costo);
        }

        else if(forma==2 && servicio==5)
        {
            document.write("Usted se hizo un facial<br>");
            document.write("Usted ha cancelado con efectivo<br>");
            document.write("El pago total es de:   "+costo);
        }


        //Descuento


        if(forma==1 && servicio==1 && desc==1)
        {
            document.write("Usted se hizo un alisado<br>");
            document.write("Usted ha cancelado con tarjeta de crédito<br>");
            document.write("El costo incial del servicio es de:  "+(costo)+"<br>");
            document.write("Se le hará un recargo de 10% "+(costo*0.10).toFixed(2)+"<br>");
            document.write("Se le hará un descuento del 25% por ser cliente frecuente "+(costo*0.25)+"<br>");
            document.write("El pago total es de:   "+(costo*1.10));
        }

        if(forma==1 && servicio==2 && desc==1)
        {
            document.write("Usted se hizo las uñas<br>");
            document.write("Usted ha cancelado con tarjeta de crédito<br>");
            document.write("El costo incial del servicio es de:  "+(costo)+"<br>");
            document.write("Se le hará un recargo de 10% "+(costo*0.10).toFixed(2)+"<br>");
            document.write("Se le hará un descuento del 25% por ser cliente frecuente "+(costo*0.25)+"<br>");
            document.write("El pago total es de:  "+(costo*1.10));
        }

        if(forma==1 && servicio==3 && desc==1)
        {
            document.write("Usted se hizo un tinte<br>");
            document.write("Usted ha cancelado con tarjeta de crédito<br>");
            document.write("El costo incial del servicio es de:  "+(costo)+"<br>");
            document.write("Se le hará un recargo de 10% "+(costo*0.10).toFixed(2)+"<br>");
            document.write("Se le hará un descuento del 25% por ser cliente frecuente "+(costo*0.25)+"<br>");
            document.write("El pago total es de:  "+(costo*1.10));
        }

        if(forma==1 && servicio==4 && desc==1)
        {
            document.write("Usted se hizo una depilación laser<br>");
            document.write("Usted ha cancelado con tarjeta de crédito<br>");
            document.write("El costo incial del servicio es de:  "+(costo)+"<br>");
            document.write("Se le hará un recargo de 10% "+(costo*0.10).toFixed(2)+"<br>");
            document.write("Se le hará un descuento del 25% por ser cliente frecuente "+(costo*0.25)+"<br>");
            document.write("El pago total es de:  "+(costo*1.25));
        }

        if(forma==1 && servicio==5 && desc==1)
        {
            document.write("Usted se hizo un facial<br>");
            document.write("Usted ha cancelado con tarjeta de crédito<br>");
            document.write("El costo incial del servicio es de:  "+(costo)+"<br>");
            document.write("Se le hará un recargo de 10% "+(costo*0.10).toFixed(2)+"<br>");
            document.write("Se le hará un descuento del 25% por ser cliente frecuente "+(costo*0.25)+"<br>");
            document.write("El pago total es de:  "+(costo*1.25));
        }

        else if(forma==2 && servicio==1 && desc==1)
        {
            document.write("Usted se hizo un alisado<br>");
            document.write("Usted ha cancelado con efectivo<br>");
            document.write("Se le hará un recargo de 10% "+(costo*0.10).toFixed(2)+"<br>");
            document.write("Se le hará un descuento del 25% por ser cliente frecuente "+(costo*0.25)+"<br>");
            document.write("El pago total es de:  "+costo);
        }

        else if(forma==2 && servicio==2 && desc==1)
        {
            document.write("Usted se hizo las uñas<br>");
            document.write("Usted ha cancelado con efectivo<br>");
            document.write("Se le hará un recargo de 10% "+(costo*0.10).toFixed(2)+"<br>");
            document.write("Se le hará un descuento del 25% por ser cliente frecuente "+(costo*0.25)+"<br>");
            document.write("El pago total es de:  "+costo);
        }

        else if(forma==2 && servicio==3 && desc==1)
        {
            document.write("Usted se hizo un tinte<br>");
            document.write("Usted ha cancelado con efectivo<br>");
            document.write("Se le hará un recargo de 10% "+(costo*0.10).toFixed(2)+"<br>");
            document.write("Se le hará un descuento del 25% por ser cliente frecuente "+(costo*0.25)+"<br>");
            document.write("El pago total es de:   "+costo);
        }

        else if(forma==2 && servicio==4 && desc==1)
        {
            document.write("Usted se hizo una depilación laser<br>");
            document.write("Usted ha cancelado con efectivo<br>");
            document.write("Se le hará un recargo de 10% "+(costo*0.10).toFixed(2)+"<br>");
            document.write("Se le hará un descuento del 25% por ser cliente frecuente "+(costo*0.25)+"<br>");
            document.write("El pago total es de:   "+costo);
        }

        else if(forma==2 && servicio==5 && desc==1)
        {
            document.write("Usted se hizo un facial<br>");
            document.write("Usted ha cancelado con efectivo<br>");
            document.write("Se le hará un recargo de 10% "+(costo*0.10).toFixed(2)+"<br>");
            document.write("Se le hará un descuento del 25% por ser cliente frecuente "+(costo*0.25)+"<br>");
            document.write("El pago total es de:   "+costo);
        }
    