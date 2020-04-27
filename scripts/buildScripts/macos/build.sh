source ~/Apps/osxcross.sh
export OSXCROSS_MP_INC=1
export OSXCROSS_NO_INCLUDE_PATH_WARNINGS=1
buildDirectory=build/macos
mkdir -p $buildDirectory || true
cp scripts/buildScripts/macos/resources/CMakeLists.txt $buildDirectory/CMakeLists.txt
FLAME_STEEL_PROJECT_ROOT_DIRECTORY=${PWD}
FLAME_STEEL_PROJECT_ROOT_DIRECTORY_RESOURCES=${PWD}/project/resources/
mkdir $buildDirectory/FlameSteelEngineProject || true
cp project/resources/* $buildDirectory/FlameSteelEngineProject/
cd $buildDirectory
cmake -DFLAME_STEEL_PROJECT_ROOT_DIRECTORY=${FLAME_STEEL_PROJECT_ROOT_DIRECTORY} -DOSXCROSS=1 .
make -j$(nproc)

