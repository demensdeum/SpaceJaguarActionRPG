#ifndef CUBEBUILDTESTCUBEBUILDER_H_
#define CUBEBUILDTESTCUBEBUILDER_H_

#include <FlameSteelCore/Object.h>
#include <FlameSteelCommonTraits/SerializedModel.h>

namespace FlameSteelEngine {
namespace GameToolkit {
namespace Utils {

class CubeBuilder {

public:
    shared_ptr<Object> makeCube(float x, float y, float z, int red = 255, int green = 0, int blue = 0);

private:
    shared_ptr<FSEGTSerializedModel> serializedModel;

    void putFloorAtXYZ(int x, int y, int z);
    void putCeilAtXYZ(int x, int y, int z);

    void putRightWallAtXYZ(int x, int y, int z);
    void putLeftWallAtXYZ(int x, int y, int z);

    void putBackWallAtXYZ(int x, int y, int z);
    void putFrontWallAtXYZ(int x, int y, int z);


    void putDotAtXYZ(float x, float y, float z, float u, float v);
    void putIndexes(int first, int second, int third);

};
};
};
};

#endif