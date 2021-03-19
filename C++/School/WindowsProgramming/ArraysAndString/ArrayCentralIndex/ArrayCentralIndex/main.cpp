#include <iostream>

using namespace std;

int main()
{
	int nums[] = { 2, 3, 4, 1, 2, 3, 4 };

	int n;
	int i;
	int j;
	int m;
	int sum1;
	int sum2;
	int result = -1;

	n = sizeof(nums) / sizeof(nums[0]);

	for (m = 0; m < n; m++)
	{
		sum1 = 0;
		sum2 = 0;

		for (i = 0; i < m; i++)
		{
			sum1 = sum1 + nums[i];
		}

		for (i = m + 1; i < n; i++)
		{
			sum2 = sum2 + nums[i];
		}

		if (sum1 == sum2)
		{
			result = m;

			break;
		}

		cout << "sum1 = " << sum1 << endl;
		cout << "sum2 = " << sum2 << endl;
	}

	cout << result << endl;

	return 0;
}