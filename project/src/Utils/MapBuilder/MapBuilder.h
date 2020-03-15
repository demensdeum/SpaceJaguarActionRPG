#ifndef SPACEJAGUARMAPBUILDER_H_
#define SPACEJAGUARMAPBUILDER_H_

#include <FlameSteelCore/Object.h>
#include <FlameSteelCommonTraits/SerializedModel.h>

namespace FlameSteelEngine {
namespace GameToolkit {
namespace Utils {

class MapBuilder {

public:
    shared_ptr<Object> makeMap(float x, float y, float z);

private:
    shared_ptr<FSEGTSerializedModel> serializedModel;

    void putCeilAtXYZ(int x, int y, int z);

    void putDotAtXYZ(float x, float y, float z, float u, float v);
    void putIndexes(int first, int second, int third);

};
};
};
};

#endif