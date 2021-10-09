package school.exprement_01.Second.src;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Comparator;
public class Second {
    public static void main(String[] args) {
        Calendar day0 = Calendar.getInstance();
        Calendar day1 = Calendar.getInstance();
        Calendar day2 = Calendar.getInstance();
        Calendar[] days = { day0, day1, day2 };
        day0.set(2021, 10, 8);
        day1.set(2021, 9, 8);
        day2.set(2021, 9, 10);
        sortArgs(args);
        sortDays(days);
        System.out.println(Arrays.toString(args));
        for (Calendar day : days) {
            System.out.println(day.get(Calendar.YEAR) + "/" + day.get(Calendar.MONTH) + "/" + day.get(Calendar.DATE));
        }
    }
    private static void sortArgs(String[] args) {
        Arrays.sort(args, new Comparator<String>() {
            public int compare(String a, String b) {
                return a.compareTo(b);
            }
        });
    }
    private static void sortDays(Calendar[] days) {
        Arrays.sort(days);
    }
}
