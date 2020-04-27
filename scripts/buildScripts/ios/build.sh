if ! ([[ "$OSTYPE" == "darwin"* ]]); then
    echo "OSType is not darwin, build on macos only."
    exit 1
fi
