#pragma once
class Sort
{
    private:
    int* data;
    int dataLength;
    void printData();
    void swap(int x, int y);
    public:
    ~Sort();
    Sort();
    Sort(int* data, int dataLength);
    void doSort();
};

