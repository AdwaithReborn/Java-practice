
public class Main {
    public static void main(String[] args) {
        int num = 12345;
        int reverse = 0;

        while (num != 0) {
            int digit = num % 10;
            reverse = reverse * 10 + digit;
            num = num / 10;
        }

        System.out.println(reverse);
    }
}

public class Main {
    public static void main(String[] args) {
        int num = 29;
        boolean prime = true;

        if (num <= 1) {
            prime = false;
        }

        for (int i = 2; i < num; i++) {
            if (num % i == 0) {
                prime = false;
                break;
            }
        }

        System.out.println(prime ? "Prime" : "Not Prime");
    }
}
