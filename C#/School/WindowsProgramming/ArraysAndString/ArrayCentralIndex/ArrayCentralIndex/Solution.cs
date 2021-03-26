using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArrayCentralIndex
{
    public class Solution
    {
        public static int PivotIndex(int[] nums)
        {
            //声明变量
            int n;
            int total;
            int i;
            int left = 0;

            //求数组元素个数
            n = nums.Length;

            //求数组元素和
            total = nums.Sum();

            //遍历数组
            for (i = 0; i < n; i++)
            {
                //如果mid左边之和 + mid右边之和 + mid值 = mid左边之和 * 2 + mid值 == 数组元素和
                if (left * 2 + nums[i] == total)
                {
                    //返回i
                    return i;
                }
                //在遍历中继承出当前的mid左边之和 + 当前mid值, 作为下一个mid左边之和
                left += nums[i];
            }
            //如果Solution没有提前return i, 说明数组不存在中心下标, 返回-1
            return -1;
        }
    }
}
