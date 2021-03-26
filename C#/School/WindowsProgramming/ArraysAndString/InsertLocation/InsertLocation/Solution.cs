using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InsertLocation
{
    public class Solution
    {
        public int SearchInsert(int[] nums, int target)
        {
            //声明变量
            int n;
            int left;
            int right;
            int mid;

            //求数组元素个数
            n = nums.Length;

            //初始化左值和右值
            left = 0;
            right = n - 1;
            mid = 0;

            //如果目标值在数组左值和右值之间
            if (target >= nums[left] && target <= nums[right])
            {
                //当目标值在数组左值和右值之间时继续循环
                while (target >= nums[left] && target <= nums[right])
                {
                    //数组中间值 = (左值 + 右值) / 2
                    mid = (left + right) / 2;

                    //如果目标值 > 中间值
                    if (target > nums[mid])
                    {
                        //左值向右缩小1索引
                        left++;
                    }

                    //如果目标值 < 中间值
                    else if (target < nums[mid])
                    {
                        //右值向左缩小1索引
                        right--;
                    }

                    //如果目标值 == 中间值
                    else
                    {
                        //返回中间值的索引
                        return mid;
                    }
                }
            }

            //如果目标值 > 数组右值
            else if (target > nums[right])
            {
                //返回值为n
                return n;
            }

            //如果目标值 < 数组左值
            else
            {
                //返回值为0
                return 0;
            }

            //没有提前返回 << 目标值不在数组中, 返回最终中间索引值 + 1
            return (mid + 1);

        }
    }
}
