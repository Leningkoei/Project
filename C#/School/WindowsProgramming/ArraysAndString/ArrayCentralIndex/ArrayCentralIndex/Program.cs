using System;

namespace ArrayCentralIndex
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] nums = { 1, 7, 3, 6, 5, 6 };
            int result = Solution.PivotIndex(nums);
            Console.WriteLine("输入nums = { 1, 7, 3, 6, 5, 6 }");
            Console.WriteLine($"输出nums = {result}");
        }
    }
}
