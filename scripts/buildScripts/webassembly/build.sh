#!/bin/bash
set -e
buildDirectory=build/webassembly
source ~/Sources/emsdk/emsdk_env.sh
mkdir -p $buildDirectory/resources || true
cp scripts/buildScripts/webassembly/resources/CMakeLists.txt $buildDirectory/CMakeLists.txt
FLAME_STEEL_PROJECT_ROOT_DIRECTORY=${PWD}
FLAME_STEEL_PROJECT_ROOT_DIRECTORY_RESOURCES=${PWD}/project/resources/
cp ${FLAME_STEEL_PROJECT_ROOT_DIRECTORY_RESOURCES}/* $buildDirectory/resources/ || true
mkdir $buildDirectory/FlameSteelEngineProject || true
cp scripts/buildScripts/webassembly/resources/index.html $buildDirectory/FlameSteelEngineProject/
cp scripts/utils/texturesScaler.py $buildDirectory
rm $buildDirectory/FlameSteelEngineProject/FlameSteelEngineProject.js || true
cd $buildDirectory
python3 texturesScaler.py
emcmake cmake -DRESOURCES_PATH=resources -DEMSCRIPTEN=1 -DFLAME_STEEL_PROJECT_ROOT_DIRECTORY=${FLAME_STEEL_PROJECT_ROOT_DIRECTORY} .
emmake make -j$(nproc)
