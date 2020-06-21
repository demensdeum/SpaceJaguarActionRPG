#!/bin/bash

set -x
set -e

export ANDROID_HOME=/home/demensdeum/Android/Sdk/
export ANDROID_NDK_HOME=/home/demensdeum/Android/android-ndk-r21-beta2/

ROOT=${PWD}
FLAMESTEELFRAMEWORKPATH="project/include/FlameSteelFramework/"
BUILDDIRECTORY="build/android"
ANDROIDJNIDIRECTORY="$BUILDDIRECTORY/android-jni"
ANDROIDPROJECTDIRECTORY="$ANDROIDJNIDIRECTORY/android-project"
ANDROIDJNIJNIDIRECTORY="$ANDROIDPROJECTDIRECTORY/app/jni"
ANDROIDJNIINCLUDEDIRECTORY="$ANDROIDJNIJNIDIRECTORY/include"

rm -rf $BUILDDIRECTORY || true
mkdir -p $BUILDDIRECTORY || true

cp -R scripts/buildScripts/android/resources/android-jni $ANDROIDJNIDIRECTORY
mkdir $ANDROIDJNIINCLUDEDIRECTORY

cp -R $FLAMESTEELFRAMEWORKPATH/FlameSteelBattleHorn/src/FlameSteelBattleHorn $ANDROIDJNIINCLUDEDIRECTORY/FlameSteelBattleHorn/
cp -R $FLAMESTEELFRAMEWORKPATH/FlameSteelCommonTraits/src/FlameSteelCommonTraits $ANDROIDJNIINCLUDEDIRECTORY/FlameSteelCommonTraits/
cp -R $FLAMESTEELFRAMEWORKPATH/FlameSteelCore/src/FlameSteelCore $ANDROIDJNIINCLUDEDIRECTORY/FlameSteelCore/
cp -R $FLAMESTEELFRAMEWORKPATH/FlameSteelEngineGameToolkit/src/FlameSteelEngineGameToolkit $ANDROIDJNIINCLUDEDIRECTORY/FlameSteelEngineGameToolkit/
cp -R $FLAMESTEELFRAMEWORKPATH/FlameSteelEngineGameToolkitFSGL/src/FlameSteelEngineGameToolkitFSGL $ANDROIDJNIINCLUDEDIRECTORY/FlameSteelEngineGameToolkitFSGL/
cp -R $FLAMESTEELFRAMEWORKPATH/FSGL/src/FSGL $ANDROIDJNIINCLUDEDIRECTORY/FSGL/
cp -R project/include/json $ANDROIDJNIINCLUDEDIRECTORY
cp -R project/include/glm $ANDROIDJNIINCLUDEDIRECTORY
cp -R project/src/* $ANDROIDJNIINCLUDEDIRECTORY

mkdir -p $ANDROIDJNIJNIDIRECTORY/FlameSteelBattleHorn/src/
cp -R $FLAMESTEELFRAMEWORKPATH/FlameSteelBattleHorn/src/ $ANDROIDJNIJNIDIRECTORY/FlameSteelBattleHorn/
cp $FLAMESTEELFRAMEWORKPATH/FlameSteelBattleHorn/Android.mk $ANDROIDJNIJNIDIRECTORY/FlameSteelBattleHorn/

mkdir -p $ANDROIDJNIJNIDIRECTORY/FlameSteelCommonTraits/src/
cp -R $FLAMESTEELFRAMEWORKPATH/FlameSteelCommonTraits/src/ $ANDROIDJNIJNIDIRECTORY/FlameSteelCommonTraits/
cp $FLAMESTEELFRAMEWORKPATH/FlameSteelCommonTraits/Android.mk $ANDROIDJNIJNIDIRECTORY/FlameSteelCommonTraits/

mkdir -p $ANDROIDJNIJNIDIRECTORY/FlameSteelCore/src/
cp -R $FLAMESTEELFRAMEWORKPATH/FlameSteelCore/src/ $ANDROIDJNIJNIDIRECTORY/FlameSteelCore/
cp $FLAMESTEELFRAMEWORKPATH/FlameSteelCore/Android.mk $ANDROIDJNIJNIDIRECTORY/FlameSteelCore/

mkdir -p $ANDROIDJNIJNIDIRECTORY/FlameSteelEngineGameToolkit/src/
cp -R $FLAMESTEELFRAMEWORKPATH/FlameSteelEngineGameToolkit/src/ $ANDROIDJNIJNIDIRECTORY/FlameSteelEngineGameToolkit/
cp $FLAMESTEELFRAMEWORKPATH/FlameSteelEngineGameToolkit/Android.mk $ANDROIDJNIJNIDIRECTORY/FlameSteelEngineGameToolkit/

mkdir -p $ANDROIDJNIJNIDIRECTORY/FSGL/src/
cp -R $FLAMESTEELFRAMEWORKPATH/FSGL/src/ $ANDROIDJNIJNIDIRECTORY/FSGL/
cp $FLAMESTEELFRAMEWORKPATH/FSGL/Android.mk $ANDROIDJNIJNIDIRECTORY/FSGL/

mkdir -p $ANDROIDJNIJNIDIRECTORY/FlameSteelEngineGameToolkitFSGL/src/
cp -R $FLAMESTEELFRAMEWORKPATH/FlameSteelEngineGameToolkitFSGL/src/ $ANDROIDJNIJNIDIRECTORY/FlameSteelEngineGameToolkitFSGL/
cp $FLAMESTEELFRAMEWORKPATH/FlameSteelEngineGameToolkitFSGL/Android.mk $ANDROIDJNIJNIDIRECTORY/FlameSteelEngineGameToolkitFSGL/

mkdir -p $ANDROIDPROJECTDIRECTORY/app/src/main/assets/
cp project/resources/* $ANDROIDPROJECTDIRECTORY/app/src/main/assets/ || true

cp -R project/src/ $ANDROIDJNIJNIDIRECTORY/src/

cd project
fschest resources
cd $ROOT
rm -rf $ANDROIDPROJECTDIRECTORY/app/src/main/assets
mkdir $ANDROIDPROJECTDIRECTORY/app/src/main/assets/
mv project/files.fschest $ANDROIDPROJECTDIRECTORY/app/src/main/assets/

cd $ANDROIDPROJECTDIRECTORY
ls
./gradlew clean
./gradlew build
./gradlew assemble

cd $ROOT

rm build/android/app-debug.apk || true
rm build/android/app-release-unsigned.apk || true

cp $ANDROIDPROJECTDIRECTORY/app/build/outputs/apk/debug/app-debug.apk build/android/
cp $ANDROIDPROJECTDIRECTORY/app/build/outputs/apk/release/app-release-unsigned.apk build/android/
