import java.util.Scanner;
import java.util.InputMismatchException;

public class etp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        try {
            System.out.print("Enter an integer: ");
            int userInput = scanner.nextInt();
            System.out.println("You entered: " + userInput);
        } catch (InputMismatchException e) {
            System.out.println("Exception occurred: " + e.getMessage());
            System.out.println("Please enter a valid integer.");
        } finally {
            scanner.close();7
        }
    }
}
