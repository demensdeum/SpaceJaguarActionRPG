find . -type f -name CMakeLists.txt | xargs perl -pi -e 's/Debug/Release/g;'
