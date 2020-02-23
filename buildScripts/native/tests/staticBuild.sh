rm -rf build || true
buildDirectory=build/staticNative
mkdir -p $buildDirectory
cmake -DFLAME_STEEL_PROJECT_TEMPLATE_ROOT_DIRECTORY=${PWD} project/staticBuild/native/CMakeLists.txt -B $buildDirectory
cd $buildDirectory
make
