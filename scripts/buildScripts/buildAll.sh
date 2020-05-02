rm -rf build
for system in scripts/buildScripts/* ; do
    if [ -d "$system" ]; then
        echo "Building $system"
        $system/build.sh
    fi
done

echo "Build all success"
