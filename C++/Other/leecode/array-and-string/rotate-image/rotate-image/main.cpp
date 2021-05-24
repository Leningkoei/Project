#include <iostream>
using namespace std;
int main(){
    int halfImageSize;
    int imageSize;
    int i;
    int j;
    imageSize = 4;
    int image0[4][4] = {
        { 0, 1, 2, 3 },
        { 4, 5, 6, 7 },
        { 8, 9, 10, 11 },
        { 12, 13, 14, 15 }
    };
    imageSize = 5;
    int image[5][5] = {
        { 0, 1, 2, 3, 4 },
        { 5, 6, 7, 8, 9 },
        { 10, 11, 12, 13, 14 },
        { 15, 16, 17, 18, 19 },
        { 20, 21, 22, 23, 24 }
    };
    void swapAB(int &a, int &b);
    for (i = 0; i < imageSize; i++){
        for (j = 0; j < imageSize; j++){
            if (i < j){
                swapAB(image[i][j], image[j][i]);
            }
        }
    }
    halfImageSize = imageSize / 2;
    for (i = 0; i < imageSize; i++){
        for (j = 0; j < halfImageSize; j++){
            swapAB(image[i][j], image[i][imageSize - 1 - j]);
        }
    }
    for (i = 0; i < imageSize; i++){
        for (j = 0; j < imageSize; j++){
            cout << '\t' << image[i][j];
        }
        cout << endl;
    }
    return 0;
}
void swapAB(int &a, int &b){
    int temp;
    temp = a;
    a = b;
    b = temp;
}
