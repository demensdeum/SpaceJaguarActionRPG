cmake_minimum_required(VERSION 3.5)

SET(CMAKE_SYSTEM_NAME Darwin)
SET(CMAKE_C_COMPILER o64-clang)
SET(CMAKE_CXX_COMPILER o64-clang++)
SET(CMAKE_LINKER x86_64-apple-darwin19-ld CACHE FILEPATH "Linker")
SET(OSXCROSS_MP_INC 1)

project(FlameSteelEngineProject)

set(FSEGT_PROJECT_NAME FlameSteelEngineProject)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_BUILD_TYPE Debug)

set(CMAKE_CXX_FLAGS "-Werror -Wall -Wextra -Werror=return-type -framework OpenGL")

set(CMAKE_CXX_FLAGS_DEBUG "-g")
set(CMAKE_CXX_FLAGS_RELEASE "-O3")

set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/${FSEGT_PROJECT_NAME})
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/${FSEGT_PROJECT_NAME})
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/${FSEGT_PROJECT_NAME})
set(CMAKE_EXECUTABLE_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/${FSEGT_PROJECT_NAME})

if (NOT FLAME_STEEL_PROJECT_ROOT_DIRECTORY)
    message(FATAL_ERROR "No FLAME_STEEL_PROJECT_ROOT_DIRECTORY variable provided")
endif()

include_directories(
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

target_link_libraries(${FSEGT_PROJECT_NAME} SDL2 GLEW SDL2_ttf SDL2_mixer SDL2_image)
