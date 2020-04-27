set -e
buildDirectory=build/webassembly
source ~/Sources/emsdk/emsdk_env.sh
mkdir -p $buildDirectory || true
cp scripts/buildScripts/webassembly/resources/CMakeLists.txt $buildDirectory/CMakeLists.txt
FLAME_STEEL_PROJECT_ROOT_DIRECTORY=${PWD}
FLAME_STEEL_PROJECT_ROOT_DIRECTORY_RESOURCES=${PWD}/project/resources/
mkdir $buildDirectory/FlameSteelEngineProject || true
cp scripts/buildScripts/webassembly/resources/index.html $buildDirectory/FlameSteelEngineProject/
cd $buildDirectory
emcmake cmake -DRESOURCES_PATH=${FLAME_STEEL_PROJECT_ROOT_DIRECTORY_RESOURCES} -DEMSCRIPTEN=1 -DFLAME_STEEL_PROJECT_ROOT_DIRECTORY=${FLAME_STEEL_PROJECT_ROOT_DIRECTORY} .
emmake make -j$(nproc)
