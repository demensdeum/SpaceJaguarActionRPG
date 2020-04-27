rm -rf build/linuxStatic/temp || true
mkdir build/linuxStatic/temp
cp build/linuxStatic/FlameSteelEngineProject/FlameSteelEngineProject build/linuxStatic/temp
rsync -avu --delete "project/resources/" "build/linuxStatic/FlameSteelEngineProject/"  
cp build/linuxStatic/temp/FlameSteelEngineProject build/linuxStatic/FlameSteelEngineProject/FlameSteelEngineProject
rm -rf build/linuxStatic/temp
cd build/linuxStatic/FlameSteelEngineProject/
./FlameSteelEngineProject

