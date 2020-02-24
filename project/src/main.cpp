#include <iostream>
#include <Controllers/MainController/MainController.h>

using namespace std;
using namespace FlameSteelEngineProject;

int main(int argc, char *argv[]) {
    
    auto controller = make_shared<MainController>();
    controller->start();
    cout << argc << ";" << argv << endl;
    
}
