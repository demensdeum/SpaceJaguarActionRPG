buildDirectory=build/linuxStatic
mkdir -p $buildDirectory || true
cp project/cmake/linuxStatic-CMakeLists.txt $buildDirectory/CMakeLists.txt
FLAME_STEEL_PROJECT_ROOT_DIRECTORY=${PWD}
cd $buildDirectory
cmake -DFLAME_STEEL_PROJECT_ROOT_DIRECTORY=${FLAME_STEEL_PROJECT_ROOT_DIRECTORY} .
make -j$(nproc)
