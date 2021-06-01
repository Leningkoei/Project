#pragma once
class QuickSort
{
    private:
    int* data;
    int dataLength;
    public:
    ~QuickSort();
    QuickSort();
    QuickSort(int* data, int dataLength);
    void doQuickSort(int bgn, int end);
};

