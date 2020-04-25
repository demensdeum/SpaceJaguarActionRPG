rm build/staticNative/FlameSteelEngineProject/* || true
buildDirectory=build/staticNative
mkdir -p $buildDirectory || true
cmake -DFLAME_STEEL_PROJECT_TEMPLATE_ROOT_DIRECTORY=${PWD} project/staticBuild/native/CMakeLists.txt -B $buildDirectory
cd $buildDirectory
make -j$(nproc)
