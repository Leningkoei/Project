package school.exprement_01.ClassMethod.src;
public class ClassMethod {
	public static void main(String[] args) {
		m();
		m2(2);
		m3('3', 4);
		m4(4, 6);
		int i = m4(4, 6);
		System.out.println(i);
		ClassMethod t = new ClassMethod();
		System.out.println("Max = "+t.Max(3,4));
		System.out.println("Min = "+t.Min(3,4));
	}
	
	public static void m() {
		System.out.println("ok");
		System.out.println("hello");
	}
	
	public static void m2(int i) {
		if(i > 3) 
			return;
		System.out.println(i);
	}
	
	public static void m3(int i, int j) {
        // 字符"3"的ASCII码值是51;
		System.out.println(i + j);
	}
	
	public static int m4(int i, int j) {
		return i > j ? i : j;
	}
	
	public int Max(int a, int b) {
      return a > b ? a : b;
    }
  
    public int Min(int a, int b) {
        return a < b ? a : b;
    }
}
