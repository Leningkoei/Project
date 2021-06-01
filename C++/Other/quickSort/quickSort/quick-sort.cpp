#include "quick-sort.h"
#include <iostream>
using namespace std;
QuickSort::~QuickSort() {
    cout << "sorted data =" << "\t";
    this->printData();
    cout << "deleted this quick sort" << endl;
}
QuickSort::QuickSort() {
    this->data = NULL;
    this->dataLength = 0;
}
QuickSort::QuickSort(int* data, int dataLength) {
    this->data = data;
    this->dataLength = dataLength;
}
void QuickSort::doQuickSort(int bgn, int end) {
    if (bgn >= end) {
        return;
    }
    int flag;
    int i;
    int j;
    flag = this->data[bgn];
    for (i = bgn, j = end - 1; i < j;) {
        //      查找1个value小于flag的索引j;
        for (; i < j && this->data[j] >= flag; j--);
        this->data[i] = this->data[j];
        //      查找1个value大于flag的索引;
        for (; i < j && this->data[i] <= flag; i++);
        this->data[j] = this->data[i];
    }
    this->data[i] = flag;
    this->printData();
    this->doQuickSort(bgn, i);
    this->doQuickSort(i + 1, end);
}
void QuickSort::printData() {
    int i;
    for (i = 0; i < this->dataLength; i++) {
        cout << "\t" << this->data[i];
    }
    cout << endl;
}
