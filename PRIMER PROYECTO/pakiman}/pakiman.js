
class pakiman
{
	constructor(nombre, vida, ataque)
	{
		this.imagen = new Image();
		this.nombre = nombre;
		this.vida = vida;
		this.ataque = ataque;

		this.imagen.src = imagenes[this.nombre];
	}
	hablar()
	{
		alert(this.nombre);
	}	
	mostrar()
	{
		document.body.appendChild(this.imagen);
		document.write("<br><strong>" + this.nombre + "</strong><br>");
        document.write("vida: " + this.vida + "<br />");
        document.write("ataque: " + this.ataque + "<hr />");
	}
}
