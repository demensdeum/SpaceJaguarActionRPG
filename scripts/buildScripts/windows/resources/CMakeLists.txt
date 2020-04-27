cmake_minimum_required(VERSION 3.5)

set(CMAKE_C_COMPILER clang)
set(CMAKE_CXX_COMPILER clang++)

project(FlameSteelEngineProject)

set(FSEGT_PROJECT_NAME FlameSteelEngineProject)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_BUILD_TYPE Debug)

set(CMAKE_CXX_FLAGS "-Werror -Wall -Wextra -Werror=return-type")

set(CMAKE_CXX_FLAGS_DEBUG "-g")
set(CMAKE_CXX_FLAGS_RELEASE "-O3")

SET(CMAKE_SYSTEM_NAME Windows)
SET(CMAKE_C_COMPILER i686-w64-mingw32-gcc)
SET(CMAKE_CXX_COMPILER i686-w64-mingw32-g++)
SET(CMAKE_RC_COMPILER i686-w64-mingw32-windres)
set(CMAKE_RANLIB i686-w64-mingw32-ranlib)

add_definitions(-DFSGL_LEGACY_OPENGL=1 -DMINGW32=1)

set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/${FSEGT_PROJECT_NAME})
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/${FSEGT_PROJECT_NAME})
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/${FSEGT_PROJECT_NAME})
set(CMAKE_EXECUTABLE_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/${FSEGT_PROJECT_NAME})

if (NOT FLAME_STEEL_PROJECT_ROOT_DIRECTORY)
    message(FATAL_ERROR "No FLAME_STEEL_PROJECT_ROOT_DIRECTORY variable provided")
endif()

include_directories(
    ${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/scripts/buildScripts/windows/resources/include/
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
                        -static-libgcc
                        -static-libstdc++
                        ${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/scripts/buildScripts/windows/resources/lib/glew32.lib
                        opengl32
                        mingw32
                        ${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/scripts/buildScripts/windows/resources/lib/libSDL2main.a
                        ${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/scripts/buildScripts/windows/resources/lib/SDL2.dll 
                        ${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/scripts/buildScripts/windows/resources/lib/SDL2_mixer.dll 
                        ${FLAME_STEEL_PROJECT_ROOT_DIRECTORY}/scripts/buildScripts/windows/resources/lib/SDL2_image.dll
)
