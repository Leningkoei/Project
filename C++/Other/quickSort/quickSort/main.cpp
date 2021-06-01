#include "main.h"
#include "quick-sort.h"
#include <iostream>
using namespace std;
int main() {
    QuickSort* quickSort;
    int list[] = { 6, 8, 7, 9, 0, 1, 3, 2, 4, 5 };
    quickSort = new QuickSort(list, 10);
    quickSort->doQuickSort(0, 9);
    return 0;
}
