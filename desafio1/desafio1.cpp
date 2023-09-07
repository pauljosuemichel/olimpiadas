#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

int main() {
    const int originalNum = 60;
    int num = 60;
    int primos[11] = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31};
    int sum = 0;

    for (int i = 0; i < 11; i++) {
        while (num % primos[i] == 0) {
            sum += num / primos[i];
            num = num / primos[i];
        }
    }

    cout << sum + originalNum;
    return 0;
}