#include "sort.h"
#include <iostream>
using namespace std;
Sort::~Sort() {
    this->printData();
    cout << "deleted sort" << endl;
}
Sort::Sort() {
    this->data = NULL;
    this->dataLength = 0;
}
Sort::Sort(int* data, int dataLength) {
    this->data = data;
    this->dataLength = dataLength;
}
void Sort::doSort() {
    bool flag;
    int i;
    int j;
    int m;
    int n;
    this->printData();
    for (i = 0, n = this->dataLength - 1; i < n; i++, n--) {
        for (j = n; i < j; j--) {
            if (this->data[j - 1] > this->data[j]) {
                swap(j - 1, j);
                flag = true;
                this->printData();
            }
        }
        for (m = i; m < n; m++) {
            if (this->data[m] > this->data[m + 1]) {
                swap(m, m + 1);
                flag = true;
                this->printData();
            }
        }
        if (!flag) {
            break;
        }
    }
}
void Sort::printData() {
    int i;
    for (i = 0; i < this->dataLength; i++) {
        cout << '\t' << this->data[i];
    }
    cout << endl;
}
void Sort::swap(int x, int y) {
    int temp;
    temp = this->data[x];
    this->data[x] = this->data[y];
    this->data[y] = temp;
}
