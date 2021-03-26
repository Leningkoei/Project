using System;

namespace InsertLocation
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] nums = { 1, 3, 5, 6 };
            int target = 5;
            Solution solution = new();
            int result = solution.SearchInsert(nums, target);
            Console.WriteLine("输入nums = { 1, 3, 5, 6 }, target = 5");
            Console.WriteLine($"输出target在nums的插入位置 = {result}");
        }
    }
}
