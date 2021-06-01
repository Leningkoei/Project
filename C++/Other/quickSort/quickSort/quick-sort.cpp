#include "main.h"
#include "quick-sort.h"
#include <iostream>
using namespace std;
QuickSort::~QuickSort() {
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
    int k;
    QuickSort* quickSort;
    flag = this->data[bgn];
    for (i = bgn + 1, j = end, k = 0; i < j;) {
//        cout << i << ", " << j << endl;
        if (this->data[i] < flag) {
            i++;
        }
        if (this->data[j] > flag) {
            j--;
        }
        if (this->data[i] > flag && this->data[j] < flag) {
            this->data[i - 1] = this->data[j];
            this->data[j] = this->data[i];
            i++;
            j--;
            k++;
            /*
            for (int k = 0; k < this->dataLength; k++) {
                cout << this->data[k];
            }
            cout << endl;
            */
        }
    }
//    cout << endl;
    this->data[k] = this->data[j];
    this->data[j] = flag;
    for (k = 0; k < this->dataLength; k++) {
        cout << this->data[k];
    }
    cout << endl;
//    cout << i << endl;
//    cout << j << endl;
    quickSort = new QuickSort(this->data, this->dataLength);
    quickSort->doQuickSort(bgn, i - 1);
    quickSort->doQuickSort(j + 1, end);
}
