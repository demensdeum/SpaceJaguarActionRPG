find . -type f -name CMakeLists.txt | xargs perl -pi -e 's/Release/Debug/g;'
