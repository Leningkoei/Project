#include "sort.h"
int main() {
    Sort* sort;
    int list[10] = { 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 };
    sort = new Sort(list, 10);
    int listKai[5] = { 4, 290, 23, 654, 65 };
    sort = new Sort(listKai, 5);
    sort->doSort();
    delete sort;
    return 0;
}
