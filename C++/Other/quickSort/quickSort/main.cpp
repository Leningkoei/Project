#include "quick-sort.h"
#include <iostream>
using namespace std;
int main() {
    QuickSort* quickSort;
    int list[] = { 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 };
    quickSort = new QuickSort(list, 10);
    quickSort->doQuickSort(0, 10);
    delete quickSort;
    return 0;
}
