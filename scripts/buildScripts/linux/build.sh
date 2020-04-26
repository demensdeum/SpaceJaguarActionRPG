buildDirectory=build/linux
mkdir -p $buildDirectory || true
cp project/cmake/linuxStatic-CMakeLists.txt $buildDirectory/CMakeLists.txt
FLAME_STEEL_PROJECT_ROOT_DIRECTORY=${PWD}
FLAME_STEEL_PROJECT_ROOT_DIRECTORY_RESOURCES=${PWD}/project/resources/
mkdir $buildDirectory/FlameSteelEngineProject || true
cp project/resources/* $buildDirectory/FlameSteelEngineProject/
cd $buildDirectory
cmake -DFLAME_STEEL_PROJECT_ROOT_DIRECTORY=${FLAME_STEEL_PROJECT_ROOT_DIRECTORY} .
make -j$(nproc)
