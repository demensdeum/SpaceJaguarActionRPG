PATH=$PATH:~/Sources/cctools-port/usage_examples/ios_toolchain/target/bin
buildDirectory=build/ios
mkdir -p $buildDirectory || true
cp scripts/buildScripts/ios/resources/CMakeLists.txt $buildDirectory/CMakeLists.txt
FLAME_STEEL_PROJECT_ROOT_DIRECTORY=${PWD}
FLAME_STEEL_PROJECT_ROOT_DIRECTORY_RESOURCES=${PWD}/project/resources/
mkdir $buildDirectory/FlameSteelEngineProject || true
cp project/resources/* $buildDirectory/FlameSteelEngineProject/
cd $buildDirectory
cmake -DFLAME_STEEL_PROJECT_ROOT_DIRECTORY=${FLAME_STEEL_PROJECT_ROOT_DIRECTORY} .
make -j$(nproc)
