
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
        int num = 5;
        int factorial = 1;

        for (int i = 1; i <= num; i++) {
            factorial *= i;
        }

        System.out.println("Factorial: " + factorial);
    }
}

public class Main {
    public static void main(String[] args) {
        int[] numbers = {5, 2, 8, 1, 3};

        for (int i = 0; i < numbers.length - 1; i++) {
            for (int j = 0; j < numbers.length - i - 1; j++) {

                if (numbers[j] > numbers[j + 1]) {
                    int temp = numbers[j];
                    numbers[j] = numbers[j + 1];
                    numbers[j + 1] = temp;
                }
            }
        }

        for (int num : numbers) {
            System.out.print(num + " ");
        }
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

public class Main {
    public static void main(String[] args) {
        int[] numbers = {12, 45, 7, 89, 34};

        int largest = numbers[0];

        for (int i = 1; i < numbers.length; i++) {
            if (numbers[i] > largest) {
                largest = numbers[i];
            }
        }

        System.out.println("Largest: " + largest);
    }
}

public class Main {
    public static void main(String[] args) {
        String text = "Adwaith Asokan";
        int count = 0;

        for (int i = 0; i < text.length(); i++) {
            char ch = Character.toLowerCase(text.charAt(i));

            if (ch == 'a' || ch == 'e' || ch == 'i' ||
                ch == 'o' || ch == 'u') {
                count++;
            }
        }

        System.out.println("Vowels: " + count);
    }
}

public class Main {
    public static void main(String[] args) {
        int n = 10;
        int a = 0;
        int b = 1;

        for (int i = 0; i < n; i++) {
            System.out.print(a + " ");

            int next = a + b;
            a = b;
            b = next;
        }
    }
}

public class Main {
    public static void main(String[] args) {
        String text = "madam";
        String reverse = "";

        for (int i = text.length() - 1; i >= 0; i--) {
            reverse += text.charAt(i);
        }

        if (text.equals(reverse)) {
            System.out.println("Palindrome");
        } else {
            System.out.println("Not Palindrome");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 20, 40, 10};

        for (int i = 0; i < numbers.length; i++) {
            for (int j = i + 1; j < numbers.length; j++) {
                if (numbers[i] == numbers[j]) {
                    System.out.println("Duplicate: " + numbers[i]);
                }
            }
        }
    }
}
