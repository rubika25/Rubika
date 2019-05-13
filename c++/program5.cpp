#include<iostream>
#include<string>
using namespace std;
void reversestr(string& str);
int main()
{
	cout<<"enter a string:";
	string a;
	cin>>a;
	int len=a.size();
	string str2(a,len-3,len);
	reversestr(str2);
	cout<<str2;
	return 0;
}
void reversestr(string& str)
{
	int n = str.length();
	for(int i = 0;i < n / 2;i++)
	  swap(str[i],str[n -i -1]);
}
