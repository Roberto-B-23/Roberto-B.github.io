var teclas =
{
UP: 38,
DOWN:40,
LEFT:37,
RIGHT:39
};

document.addEventListener("keydown", dibujarTeclado);

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 400;
var y = 200;
dibujarLinea("green", x-2,y-2,x+2,y+2, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo )
{
	lienzo.beginPath();
    lienzo.strokeStyle  = color;
    lienzo.lineWidth=3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo( xfinal, yfinal );
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var colorcito = "green"
  var movimiento= 5;
   switch(evento.keyCode)
    {

      case teclas.UP:
	  dibujarLinea(colorcito,x,y,x,y- movimiento,papel);
	  y=y - movimiento;
	  break;
	  case teclas.DOWN:
		  dibujarLinea(colorcito,x,y,x,y+ movimiento,papel);
	  y=y + movimiento;
	  break;
      case teclas.LEFT:
	  dibujarLinea(colorcito,x,y,x- movimiento,y,papel);
	  x=x- movimiento;
	  break;
	   case teclas.RIGHT:
	 dibujarLinea(colorcito,x,y,x+ movimiento,y,papel);
	  x=x + movimiento;
	  break;
	 
	  
	  default:
	  console.log("otra tecla");
	  break;
    }



 
}