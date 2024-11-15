 //arreglo principal
 let arr=[0,1,2,3,4,5,6,7,8,9]
 console.log(arr);
 //1
 function f1(){
console.log("punto 1");
let arreglo=Array.from({length:10}, ()=> Math.floor(Math.random()*100)+1);
console.log(arreglo);}
//2
function f2(){
console.log("punto 2");
let arreglo2=[0,1,2,3,4,5,6,7,8,9];
console.log("primer elemento: ", arreglo2[0]);
console.log("ultimo elemento: ", arreglo2[arreglo2.length-1]);
}//3
function f3(){
console.log("punto 3");
let arreglo3=[0,1,2,3,4,5,6,7,8,9];
arreglo3[2]=9;
console.log(arreglo3);
}
//4
function f4(){
console.log("punto 4");
let arreglo4=[0,1,2,3,4,5,6,7,8,9];
arreglo4.push(10);
console.log(arreglo4);
}
//5
function f5(){
console.log("punto 5");
let arreglo5=[0,1,2,3,4,5,6,7,8,9];
arreglo5.pop();
console.log(arreglo5);
}
//6
function f6(){
console.log("punto 6");
let  arreglo6=[0,1,2,3,4,5,6,7,8,9];
for (let i=0;i<arreglo6.length;i++){
console.log(arreglo6[i]);
}  }
//7
function f7(){
console.log("punto 7");
let arreglo7=[0,1,2,3,4,5,6,7,8,9];
let suma=0;
for (let i = 0; i < arreglo7.length; i++) {
    suma+=arreglo7[i];
}
console.log("suma: "+suma);}
//8 
function f8(){
console.log("punto 8");
let arreglo8=[0,1,2,3,4,5,6,7,8,9];
let duplicado=[arreglo8,arreglo8];
console.log(duplicado);}
//9
function f9(){
console.log("punto 9");
let arreglo9=[0,1,2,3,4,5,6,7,8,9];
let pares=arreglo9.filter((Element)=>Element%2==0);
console.log(pares);
}