cmake_minimum_required(VERSION 3.5)

SET(CMAKE_SYSTEM_NAME Darwin)
SET(CMAKE_C_COMPILER arm-apple-darwin11-clang)
SET(CMAKE_CXX_COMPILER arm-apple-darwin11-clang++)
SET(CMAKE_LINKER arm-apple-darwin11-ld)

project(FlameSteelEngineProject)

set(FSEGT_PROJECT_NAME FlameSteelEngineProject)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_BUILD_TYPE Debug)

set(CMAKE_CXX_FLAGS "-Werror -Wall -Wextra -Werror=return-type")

set(CMAKE_CXX_FLAGS_DEBUG "-g")
set(CMAKE_CXX_FLAGS_RELEASE "-O3")

set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/${FSEGT_PROJECT_NAME})
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/${FSEGT_PROJECT_NAME})
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/${FSEGT_PROJECT_NAME})
set(CMAKE_EXECUTABLE_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/${FSEGT_PROJECT_NAME})

add_definitions(-DCUBE_ART_PROJECT_ANDROID_NDK_BUILD)

if (NOT FLAME_STEEL_PROJECT_ROOT_DIRECTORY)
    message(FATAL_ERROR "No FLAME_STEEL_PROJECT_ROOT_DIRECTORY variable provided")
endif()

include_directories(
    /home/demensdeum/Sources/cctools-port/usage_examples/ios_toolchain/target/SDK/iPhoneOS9.1.sdk/usr/include/c++/
    /home/demensdeum/Sources/SDL/include
    /home/demensdeum/Sources/SDL_mixer/
    /home/demensdeum/Sources/SDL_image/
    ${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/project/src/
    ${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/project/include/
    ${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/project/include/FlameSteelFramework/FlameSteelCore/src/
    ${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/project/include/FlameSteelFramework/FlameSteelEngineGameToolkit/src/
    ${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/project/include/FlameSteelFramework/FSGL/src/
    ${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/project/include/FlameSteelFramework/FlameSteelEngineGameToolkitFSGL/src/
    ${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/project/include/FlameSteelFramework/FlameSteelBattleHorn/src/
    ${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/project/include/FlameSteelFramework/FlameSteelCommonTraits/src/
)

file(GLOB_RECURSE SOURCE_FILES
    "${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/project/src/*.cpp"
    "${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/project/include/FlameSteelFramework/FlameSteelCore/src/*.cpp"
    "${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/project/include/FlameSteelFramework/FlameSteelEngineGameToolkit/src/*.cpp"
    "${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/project/include/FlameSteelFramework/FSGL/src/*.cpp"
    "${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/project/include/FlameSteelFramework/FlameSteelEngineGameToolkitFSGL/src/*.cpp"
    "${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/project/include/FlameSteelFramework/FlameSteelBattleHorn/src/*.cpp"
    "${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/project/include/FlameSteelFramework/FlameSteelCommonTraits/src/*.cpp"
)

add_executable(${FSEGT_PROJECT_NAME} ${SOURCE_FILES})

target_link_libraries(
    ${FSEGT_PROJECT_NAME} 
    ${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/scripts/buildScripts/ios/resources/libs/libclang_rt.ios.a
    ${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/scripts/buildScripts/ios/resources/libs/libSDL2.a 
    ${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/scripts/buildScripts/ios/resources/libs/libSDL2_mixer.a 
    ${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/scripts/buildScripts/ios/resources/libs/libSDL2_image.a 
    "${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/scripts/buildScripts/ios/resources/libs/CoreServices.framework"
    "${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/scripts/buildScripts/ios/resources/libs/ImageIO.framework"
    "${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/scripts/buildScripts/ios/resources/libs/Metal.framework"
    "${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/scripts/buildScripts/ios/resources/libs/AVFoundation.framework"
    "${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/scripts/buildScripts/ios/resources/libs/GameController.framework"
    "${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/scripts/buildScripts/ios/resources/libs/CoreMotion.framework"
    "${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/scripts/buildScripts/ios/resources/libs/CoreGraphics.framework"
    "${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/scripts/buildScripts/ios/resources/libs/AudioToolbox.framework"
    "${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/scripts/buildScripts/ios/resources/libs/CoreAudio.framework"
    "${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/scripts/buildScripts/ios/resources/libs/QuartzCore.framework"
    "${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/scripts/buildScripts/ios/resources/libs/OpenGLES.framework"
    "${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/scripts/buildScripts/ios/resources/libs/UIKit.framework"
    "${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/scripts/buildScripts/ios/resources/libs/Foundation.framework"
    )
