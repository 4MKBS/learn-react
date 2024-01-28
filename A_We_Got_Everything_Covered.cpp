#include <bits/stdc++.h>
#define optimize() ios_base::sync_with_stdio(0);cin.tie(0);cout.tie(0);
#define endl '\n'
using namespace std;

int main() {
    optimize();
    int t;
    cin >> t;
    while(t--) {
        int n,m;
        cin >> n>>m;
        
        for(int i=0;i<n;i++){
            char ch ='a';
            for(int j=0;j<m;j++)     
            {
                
                cout<<ch;
                ch++;
            }
            
            
        }
        cout<<endl;
        
    }

    return 0;
}