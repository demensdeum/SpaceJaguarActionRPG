cmake_minimum_required(VERSION 3.5)

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

if (NOT RESOURCES_PATH)
    message(FATAL_ERROR "No RESOURCES_PATH variable provided")
endif()

set(CMAKE_CXX_FLAGS "--bind -Wall -Wextra -Werror=return-type -s USE_SDL=2 -s USE_SDL_TTF=2 -s USE_SDL_IMAGE=2 -s USE_LIBPNG=1 -s ASSERTIONS=1 -s SDL2_IMAGE_FORMATS='[\"png\"]' -s DISABLE_EXCEPTION_CATCHING=0 --preload-file ${RESOURCES_PATH}@/ --no-heap-copy -s ALLOW_MEMORY_GROWTH=1 -s EXIT_RUNTIME=1")

add_definitions( -DFSGL_LEGACY_OPENGL=1 )

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

target_link_libraries(${FSEGT_PROJECT_NAME} GL GLEW)
