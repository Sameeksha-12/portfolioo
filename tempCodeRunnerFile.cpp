#include<iostream>
#include<vector>
#include<cmath>
using namespace std;

int coverPoints(vector<int> &A, vector<int> &B) {
    int N = A.size();
    int dx =0;
    int dy=0;
    int diag =0;
    int finalDist=0;
    for(int i=0;i<N-1;i++){
        dx = abs(A[i+1]-A[i]);
        dy = abs(B[i+1]-B[i]);
        diag = max(dx,dy);
        finalDist += diag;
    }
    
    return finalDist;
}

int main(){
    vector<int> A = {0,1,1};
    vector<int> B = {0,1,2};
    cout<<coverPoints(A,B);

    return 0;
}
