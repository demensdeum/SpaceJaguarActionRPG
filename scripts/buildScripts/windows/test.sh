rm -rf ~/.wine/drive_c/Games/SpaceJaguar || true
mkdir ~/.wine/drive_c/Games/SpaceJaguar
cp -r build/windows/FlameSteelEngineProject/* ~/.wine/drive_c/Games/SpaceJaguar
cd ~/.wine/drive_c/Games/SpaceJaguar
wine FlameSteelEngineProject.exe
