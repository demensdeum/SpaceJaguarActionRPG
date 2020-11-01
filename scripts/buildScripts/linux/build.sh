set -x
buildDirectory=build/linux
mkdir -p $buildDirectory || true
cp scripts/buildScripts/linux/resources/CMakeLists.txt $buildDirectory/CMakeLists.txt
FLAME_STEEL_PROJECT_ROOT_DIRECTORY=${PWD}
FLAME_STEEL_PROJECT_ROOT_DIRECTORY_RESOURCES=${PWD}/project/resources/
mkdir $buildDirectory/FlameSteelEngineProject || true
cp project/resources/textures/* $buildDirectory/FlameSteelEngineProject/
cp project/resources/scripts/* $buildDirectory/FlameSteelEngineProject/
cp project/resources/models/* $buildDirectory/FlameSteelEngineProject/
cd $buildDirectory
cmake -DFLAME_STEEL_PROJECT_ROOT_DIRECTORY=${FLAME_STEEL_PROJECT_ROOT_DIRECTORY} .
make -j$(nproc)
