import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter length ");
        double length = scanner.nextDouble();
        System.out.println("Enter breadth ");
        double breadth = scanner.nextDouble();
        
        double area = length * breadth;
        
        System.out.println("Area of the rectangle is " + area);
    }
}
