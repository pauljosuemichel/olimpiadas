#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

string str = "hola";

int count(const string &str) {
    if(str.length() == 1){
        return 1;
    }
    else{
        return 1+count(str.substr(1));
    }
}

int main() {
    string str = "hola";
    int result = count(str);
    cout << result;

    return 0;
}