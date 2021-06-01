#include "quick-sort-kai.h"
#include <iostream>
using namespace std;
QuickSortKai::~QuickSortKai() {
    cout << "deleted this quick sort" << endl;
}
QuickSortKai::QuickSortKai() {
    this->data = NULL;
    this->dataLength = 0;
}
QuickSortKai::QuickSortKai(string* data, int dataLength) {
    this->data = data;
    this->dataLength = dataLength;
}

void QuickSortKai::doQuickSortKai(int bgn, int end) {
    if (bgn >= end) {
        return;
    }
    string flag;
    int i;
    int j;
    flag = this->data[bgn];
    for (i = bgn, j = end - 1; i < j;) {
        if (i < j && this->data[j] >= flag) {
            j--;
        }
        this->data[i] = this->data[j];
        if (i < j && this->data[i] <= flag) {
            i++;
        }
        this->data[j] = this->data[i];
    }
    this->data[i] = flag;
    this->printData();
    this->doQuickSortKai(bgn, i);
    this->doQuickSortKai(i + 1, end);
}
void QuickSortKai::printData() {
    int i;
    for (i = 0; i < this->dataLength; i++) {
        cout << " " << this->data[i];
    }
    cout << endl;
}
