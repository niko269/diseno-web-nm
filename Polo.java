package polomor;
import java.util.ArrayList;

public class Polo {
    public static void main(String[] args) {
    
     Circulo cir1 = new Circulo(2);
     Cuadrado cuad1=new Cuadrado(4);
     Rectangulo rec1=new Rectangulo(3,6);
     Circulo cir2=new Circulo (4);
     Cuadrado cuad2=new Cuadrado (6);
    
double areaTotal=cir1.getArea()+cuad1.getArea()+rec1.calcularArea()+
cir2.calcularArea()+cuad2.calcularArea();
        System.out.println("area total: "+areaTotal);
        
    double perimetroTotal=cir1.calcularPerimetro()+cuad1.calcularPerimetro()+
    rec1.calcularPerimetro()+cir2.calcularPerimetro()+cuad2.calcularPerimetro();
        System.out.println("perimetro total: "+perimetroTotal);
     }}
    