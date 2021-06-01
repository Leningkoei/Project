#include "quick-sort-kai.h"
#include <string>
using namespace std;
int main() {
    QuickSortKai* quickSortKai;
    string list[] = { "aaaaaaa", "aaaaaa", "aaaaa", "aaaa", "aaa", "aa", "a" };
    quickSortKai = new QuickSortKai(list, 7);
    quickSortKai->doQuickSortKai(0, 7);
    delete quickSortKai;
}
