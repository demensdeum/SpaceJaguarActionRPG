if [ -z "$1" ]
  then
    echo "No code sign key argument provided, check README file"
    exit 1
fi
rm -rf ipa
rm -rf temp || true
mkdir temp
mkdir ipa
mkdir temp/Payload
mkdir temp/Payload/SpaceJaguar.app
cp resources/* temp/Payload/SpaceJaguar.app
cp provision/embedded.mobileprovision temp/Payload/SpaceJaguar.app/embedded.mobileprovision
cp pkginfo/PkgInfo temp/Payload/SpaceJaguar.app/PkgInfo
/usr/bin/codesign --force --sign $1 --entitlements entitlements/entitlements.plist --timestamp=none temp/Payload/SpaceJaguar.app
cd temp
zip SpaceJaguar.zip -r Payload
cd ..
mv temp/SpaceJaguar.zip ipa/SpaceJaguar.ipa
rm -rf temp
