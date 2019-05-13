#include<iostream>
using namespace std;
class college
{
	private:
		char name;
		int rollno;
	public: 
	    void study(){
	    	cout<<"Time to study!";
		}

};
class student : public college {
	private:
	char name;
	int rollno;
	public:
	 void study() {
	 	cout<<"Time to study!";
	 }

};

int main()

{
	student s;
	s.study();
}
