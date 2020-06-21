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

cd project
fschest resources
cd $ROOT
rm -rf $ANDROIDPROJECTDIRECTORY/app/src/main/assets
mkdir $ANDROIDPROJECTDIRECTORY/app/src/main/assets/
mv project/files.fschest $ANDROIDPROJECTDIRECTORY/app/src/main/assets/

cd $ANDROIDPROJECTDIRECTORY
ls
#./gradlew clean
./gradlew build
./gradlew assemble

cd $ROOT

rm build/android/app-debug.apk || true
rm build/android/app-release-unsigned.apk || true

cp $ANDROIDPROJECTDIRECTORY/app/build/outputs/apk/debug/app-debug.apk build/android/
cp $ANDROIDPROJECTDIRECTORY/app/build/outputs/apk/release/app-release-unsigned.apk build/android/
