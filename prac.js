console.log("1");
var H=parseInt(prompt("ingrese las horas: "));
var M=parseInt(prompt("ingrese los minutos: "));
var S=parseInt(prompt("ingrese los segundos: "));

var total=(H*3600)+(M*60)+S;

console.log("los segundos totales son: "+total);

/*console.log("2");
var a=parseFloat(prompt("ingrese el numero: "));
var b=parseFloat(prompt("ingrese otro numero: "));
var c=parseFloat(prompt("ingrese el ultimo numero: "));

if (a===b||a===c||b===c) {
	console.log("deben ser diferentes numeros...");
}else{
	var X=Math.max(a,b,c);
}

console.log("el numero mayor es: "+X);

console.log("3");
var total=parseInt(prompt("ingrese el total de estudiantes: "));
var H=parseInt(prompt("ingrese la cantidad de hombres: "));
var M=parseInt(prompt("ingrese la cantidad de mujeres: "));

var PH=(H/total)*100;
var PM=(M/total)*100;

console.log("el posentaje de hombres es: "+PH+ "%" );
console.log(" el de las mujeres es: "+PM+ "%");

console.log("4");
var Ca = parseInt(prompt("ingrese la cantidad de cuestionarios a: "));
var Cb = parseInt(prompt("ingrese la cantidad de cuestionarios b: "));
var Cc = parseInt(prompt("ingrese la cantidad de cuestionarios c: "));

var TTM = (Ca * 5) + (Cb * 8) + (Cc * 6);

var H = Math.floor(TTM / 60);
var M = TTM % 60;

console.log(`se tardará ${H.toFixed(2)} horas y ${M.toFixed(2)} minutos en corregir las pruebas`);

console.log("5");
var MT=parseInt(prompt("ingrese el monto total de la compra: "));

var D=MT*0.15;
var MF=MT-D;

console.log("El monto final es: "+MF );

console.log("6");
var N=parseInt(prompt("ingrese el numero: "));
if (N%2 == 0) {
	console.log("su numero es par");
}else{
	console.log("su numero es impar");
}

console.log("7");
var N=parseInt(prompt("ingrese la nota 1: "));
var M=parseInt(prompt("ingrese la nota 2: "));
var P=parseInt(prompt("ingrese la nota 3: "));

if (N+M+P >= 70) {
	console.log("pasaste");
}else{
	console.log("no pasaste");
}

console.log("8");

var mt = parseInt(prompt("ingrese el monto de compra: "));

if (mt > 100) {
	var d = mt * 0.20;
	var mf = mt - d;
	console.log("su monto final es: $" + mf.toFixed(2));
} else {
	console.log("su monto final es: $" + mt.toFixed(2));
}

console.log("9");

var a=parseInt(prompt("ingrese el primer num: "));
var b=parseInt(prompt("ingrese el segundo num: "));

if (a>b) {
	t=a-b;
	console.log("la cuenta es: "+t);
}else{
	if (a<b) {
		t=a+b
		console.log("la cuenta es: "+t);
	}else{
		t=a*b;
		console.log("la cuenta es: "+t);
	}}

	console.log("10");
	var a=parseInt(prompt("ingrese cuantos kilos de manzana quiere: "));
	var b=10.0;
	if (a<=2) {
		des=0;
	}else{
		if (a<=5) {
			des=0.10;
		}else{
			if (a<=10) {
				des=0.15;
			}else{
				des=0.20;       
			}}}

			var mp=(a*b)*(1-des);

			console.log("el monto a pagar es: "+mp.toFixed(2));

			console.log("11");
			var a=parseFloat(prompt("ingrese el numero: "));
			var b=parseFloat(prompt("ingrese otro numero: "));
			var c=parseFloat(prompt("ingrese el ultimo numero: "));

			if (a===b||a===c||b===c) {
				console.log("deben ser diferentes numeros...");
			}else{
				var X=Math.max(a,b,c);
			}

			console.log("el numero mayor es: "+X);

			console.log("12");
			var a=parseInt(prompt("ingrese la operacion deseada: "));

			switch (a) {
				case 1:
				var A=parseInt(prompt("ingrese el primer num: "));
				var B=parseInt(prompt("ingrese el segundo num: "));
				r=A+B;
				console.log("el resultado es: "+r);
				break;
				case 2:
				var A=parseInt(prompt("ingrese el primer num: "));
				var B=parseInt(prompt("ingrese el segundo num: "));
				r=A-B;
				console.log("el resultado es: "+r);
				break;
				case 3:
				var A=parseInt(prompt("ingrese el primer num: "));
				var B=parseInt(prompt("ingrese el segundo num: "));
				r=A*B;
				console.log("el resultado es: "+r);
				break;
				case 4: 
				console.log("saliendo...");
				break;
				default:
				console.log("comando denegado.");
				break;
			}
		*/