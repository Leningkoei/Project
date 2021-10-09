package school.exprement_01.Third.src;
import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
public class Third {
    public static void main(String[] args) {
        // System.out.println(test());
        /**
         * 注意thisFile是根目录Project的相对路径;
         * +----dirs
         *      +---A
         *          +---B
         *          |   +---E
         *          |   +---F.txt
         *          |
         *          +---C
         *          |   +---G
         *          |   +---H
         *          |   +---I.txt
         *          |
         *          +---D.txt
         */
        File thisFile = new File("./Java/school/exprement_01/Third/dirs");
        int[] myNumArray = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
        String[] myCharArray = { "a", "b", "c", "d", "e", "f", "g", "h", "i", "j" };
        ArrayList<Integer> myArrayList = new ArrayList<Integer>();
        HashMap<String, Integer> myHashMap = new HashMap<String, Integer>();
        travelDir(thisFile, 0);
        travelArray(myNumArray, myCharArray, myArrayList, myHashMap);
        travelArrayList(myArrayList);
        travelHashMap(myHashMap);
    }
    private static void travelDir(File root, Integer level) {
        File[] subFiles = root.listFiles();
        String tabs = "";
        Integer levelCopy = level;
        while (levelCopy-- > 0) {
            tabs += "\t";
        }
        tabs += "+-------";
        System.out.println(tabs + root.getName());
        if (subFiles != null) {
            for (File subFile : subFiles) {
                travelDir(subFile, level + 1);
            }
        }
    }
    // 遍历array;
    private static void travelArray(int[] nums, String[] chars, ArrayList<Integer> arrayList, HashMap<String, Integer> hashMap) {
        // 普通遍历;
        System.out.print("array's 普通遍历:\t\t");
        for (int i = 0; i < nums.length; i++) {
            hashMap.put(chars[i], nums[i]);
            System.out.print(nums[i] + "\t");
        }
        System.out.print("\n");
        // foreach遍历
        System.out.print("array's foreach遍历:\t\t");
        for (int num : nums) {
            arrayList.add(num);
            System.out.print(num + "\t");
        }
        System.out.print("\n");
    }
    // 遍历array list;
    private static void travelArrayList(ArrayList<Integer> arrayList) {
        // 普通遍历;
        System.out.print("array list's 普通遍历:\t\t");
        for (int i = 0; i < arrayList.size(); i++) {
            System.out.print(arrayList.get(i) + "\t");
        }
        System.out.print("\n");
        // 迭代器遍历;
        System.out.print("array list's 迭代器遍历:\t");
        Iterator<Integer> it = arrayList.iterator();
        while (it.hasNext()) {
            System.out.print(it.next() + "\t");
        }
        System.out.print("\n");
        //  foreach遍历;
        System.out.print("array list's foreach遍历: \t");
        for (Integer value : arrayList) {
            System.out.print(value + "\t");
        }
        System.out.print("\n");
    }
    // 遍历hash map;
    private static void travelHashMap(HashMap<String, Integer> hashMap) {
        // 迭代器遍历;
        System.out.print("hash map's 迭代器遍历:\t\t");
        Iterator<HashMap.Entry<String, Integer>> it = hashMap.entrySet().iterator();
        while (it.hasNext()) {
            System.out.print(it.next() + "\t");
        }
        System.out.print("\n");
        // foreach遍历;
        System.out.print("hash map's foreach遍历:\t\t");
        for (HashMap.Entry<String, Integer> keyValue : hashMap.entrySet()) {
            System.out.print(keyValue + "\t");
        }
        System.out.print("\n");
    }
}
