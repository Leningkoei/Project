#include "binary-sort-tree.h"
#include <iostream>
using namespace std;
int main(){
    XXSortI* tree0;
    int list[] = { 89, 200, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000 };
    tree0 = new XXSortI(list, 10);
    tree0->printXXSortI();
    delete tree0;
    return 0;
}