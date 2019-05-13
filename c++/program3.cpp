#include<iostream>
#include<string>
using namespace std;
int main()
{
	string str("Hello world");
	string str1("world");
	string str2("Rohith");
	str.replace(str.find(str1),str1.length(),str2);
	cout<<str;
	return 0;
}
