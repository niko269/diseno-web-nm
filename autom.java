ejercicio realizar un prog en java sobre un cajero automatico con las sig operaciones:
consultar saldo, retirar dinero, depositar dinero y salir del cajero.
tener en cuenta que al momento de retirar/depositar dinero, se debe validar el importe. La simulacion de impresion por
pantalla debe ser visualmente atractivo y añadir un nombre ficticio al banco 

package trabajo;
import java.util.Scanner;
public class Trabajo {
    public static void main(String[] args) {
    Scanner sc;
    sc=new Scanner (System.in);
        int num = 0;
        int saldo = 500;
    do{
    System.out.println("--------------------------");
    System.out.println("--hola xxxxx, bienvenido--");
    System.out.println("--al banco valamadaragan--");
    System.out.println("--------------------------");
    System.out.println("---ingrese la operacion---");
    System.out.println("----que desee aplicar:----");
    System.out.println("--------------------------");
    System.out.println("----consultar saldo=1 ----");
    System.out.println("----retirar dinero=2------");
    System.out.println("----depositar dinero=3----");
    System.out.println("----salir del cajero=4----");
    System.out.println("--------------------------");
     num =sc.nextInt();
    
    switch (num){
case 1: System.out.println("su saldo es de: "+saldo);  break;
        
case 2: System.out.println("ingrese cuanto quiere retirar: ");
int re=sc.nextInt();  saldo=saldo-re;
System.out.println("dinero retirado, su saldo es de: "+saldo);  break;
        
case 3: System.out.println("ingrese cuanto quiere depositar: ");
int de=sc.nextInt();  saldo=saldo+de;
System.out.println("deposito exitoso, su saldo es de: "+saldo ); break;

case 4: System.out.println("gracias por usar nuestros servicios"); System.out.println("   saliendo del sistema...   ");  break;
        
default:System.out.println("no existe otra funcion");
    
}}while (num!=4); 
    }}
