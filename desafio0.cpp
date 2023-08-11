#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

string alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
string message = "YO HE LOGRADO ENCENDER UNA CERILLA";
#define N 2
int key1 = 2;
int key2 = 3;
string response = "";

int main() {
    message.erase(remove_if(message.begin(), message.end(), isspace), message.end());
    
    for(int i=0; i<message.size(); i+=N){
        int index = alphabet.find(i);
        response += alphabet[(index + key1) % alphabet.size()];

        if(message.size()-1 >= i+1){
            response += alphabet[(index + key2) % alphabet.size()];
        }
    }

    cout << response << '\n';
    return 0;
}