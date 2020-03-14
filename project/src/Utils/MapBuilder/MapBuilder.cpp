#include "MapBuilder.h"
#include <sstream>
#include <FlameSteelCore/FSCUtils.h>
#include <FlameSteelEngineGameToolkit/Utils/Factory.h>
#include <iostream>
#include <chrono>

using namespace std;
using namespace FlameSteelCore::Utils;
using namespace FlameSteelEngine::GameToolkit;
using namespace FlameSteelEngine::GameToolkit::Utils;

static const float MapBuilderSize = 1;

shared_ptr<Object> MapBuilder::makeCube(float x, float y, float z) {

    auto cube = make_shared<Object>();
    serializedModel = Factory::makeSerializedModel();
    serializedModel->append(make_shared<string>("Flame Steel Graphics Library Model @ Demens Deum\nModel version = Happy Sasquatch (1.0)\nMesh"));

	auto t1 = std::chrono::high_resolution_clock::now();

	for (auto x = 0; x < 100; x++) {
		for (auto y = 0; y < 100; y++) {
			    putCeilAtXYZ(x, 0, y);
		}
	}

	auto t2 = std::chrono::high_resolution_clock::now();
	auto duration = std::chrono::duration_cast<std::chrono::microseconds>( t2 - t1 ).count();
	std::cout << duration;


    serializedModel->append(make_shared<string>("\nMaterial - Texture path = com.demensdeum.spacejaguar.grass.texture"));

    auto keyStream = stringstream();
    keyStream << x;
    keyStream << ",";
    keyStream << y;
    keyStream << ",";
    keyStream << z;

    auto key = keyStream.str();

    cube->setClassIdentifier(make_shared<string>("Cube"));
    cube->setInstanceIdentifier(make_shared<string>(key));

    cube->addComponent(serializedModel);
    
    /*auto surfaceMaterial = Factory::makeSurfaceMaterial(64, 64);
    auto surface = surfaceMaterial->material->surface;
    if (surface == nullptr) {
        throwRuntimeException(string("Surface inside of SurfaceMaterial is nullptr"));
    }

    SDL_FillRect(surface, NULL, SDL_MapRGB(surface->format, red, green, blue));

    cube->addComponent(surfaceMaterial);*/

    auto position = Factory::makePosition(x, y, z);
    cube->addComponent(position);

    auto rotation = Factory::makeRotation(0, 0, 0);
    cube->addComponent(rotation);

    auto scale = Factory::makeScale(1,1,1);
    cube->addComponent(scale);

    auto brightness = Factory::makeBrightness(1.0);
    cube->addComponent(brightness);

    return cube;

};

void MapBuilder::putCeilAtXYZ(int gridX, int gridY, int gridZ) {

    if (serializedModel.get() == nullptr) {
        throwRuntimeException(string("Serialized model nil"));
    }

    auto dotsCount = serializedModel->dotsCount;

    float x = gridX;
    float y = gridY;
    float z = gridZ;

    float size = MapBuilderSize;

    putDotAtXYZ(x, y, z, 0, 1);
    putDotAtXYZ(x + size, y, z, 0, 0);
    putDotAtXYZ(x + size, y, z + size, 1, 0);
    putDotAtXYZ(x, y, z + size, 1, 1);

    putIndexes(dotsCount + 2, dotsCount, dotsCount + 3);
    putIndexes(dotsCount, dotsCount + 2, dotsCount + 1);
};

void MapBuilder::putDotAtXYZ(float x, float y, float z, float u, float v) {
    if (serializedModel.get() == nullptr) {
        throwRuntimeException(string("Serialized model nil"));
    }

    serializedModel->append(make_shared<string>(string("\nVertex - x = ")));
    serializedModel->append(make_shared<string>(to_string(x)));

    serializedModel->append(make_shared<string>(string(", y = ")));
    serializedModel->append(make_shared<string>(to_string(y)));

    serializedModel->append(make_shared<string>(string(", z = ")));
    serializedModel->append(make_shared<string>(to_string(z)));

    serializedModel->append(make_shared<string>(string(", u = ")));
    serializedModel->append(make_shared<string>(to_string(u)));

    serializedModel->append(make_shared<string>(string(", v = ")));
    serializedModel->append(make_shared<string>(to_string(v)));

    serializedModel->dotsCount += 1;
};

void MapBuilder::putIndexes(int first, int second, int third) {

    if (serializedModel.get() == nullptr) {
        throwRuntimeException(string("Serialized model nil"));
    }

    auto indexesStream = stringstream();
    indexesStream << string("\nIndex = ");
    indexesStream << first;
    indexesStream << ", ";
    indexesStream << second;
    indexesStream << ", ";
    indexesStream << third;

    auto indexes = indexesStream.str();

    serializedModel->append(make_shared<string>(indexes));
};
