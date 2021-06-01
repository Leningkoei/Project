#pragma once
class QuickSort
{
    private:
    int* data;
    int dataLength;
    void printData();
    public:
    ~QuickSort();
    QuickSort();
    QuickSort(int* data, int dataLength);
    //      区间是左闭右开的;
    void doQuickSort(int bgn, int end);
};

