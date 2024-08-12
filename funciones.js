var dias=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];

function semanita()
{

   for (let index = 0; index < dias.length; index++) {
   document.write(dias[index],"<br>");
    
   } 

} //fin semanita

   //llamando la funcion
   //semanita();


//crear una funcion que imprima 10 veces una frase

var texto="buenos dias";
var k=1; //inicializando

function frase()
{
while(k<=10)
{

document.write(texto,"<br>");

k++; //actualizado
}//fin while
}



//crear una funcion que imprima los valores de 10000 hasta 100000 en rangos de 100
var inicio=10000;
var fin=100000;

function serie()
{
    for (let index = inicio; index<=fin; index=index+100) {
        
     document.write(index,"--");   
    }
}



var inicio=10000;
var fin=100000;

function serie2()
{
    for (let index = fin; index>=inicio; index=index-1000) {
        
     document.write(index,"--");   
    }
}