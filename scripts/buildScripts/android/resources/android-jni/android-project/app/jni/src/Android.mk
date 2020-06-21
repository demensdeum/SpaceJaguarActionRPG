LOCAL_PATH := $(call my-dir)

include $(CLEAR_VARS)

LOCAL_MODULE := main

SDL_PATH := ../SDL

LOCAL_C_INCLUDES := $(LOCAL_PATH)/$(SDL_PATH)/include $(LOCAL_PATH)/../FlameSteelCore/src $(LOCAL_PATH)/../project/src $(LOCAL_PATH)/../FlameSteelCommonTraits/src $(LOCAL_PATH)/../FlameSteelEngineGameToolkit/src $(LOCAL_PATH)/../include $(LOCAL_PATH)/../FlameSteelEngineGameToolkitFSGL/src $(LOCAL_PATH)/../FSGL/src

define walk
$(wildcard $(1)) $(foreach e, $(wildcard $(1)/*), $(call walk, $(e)))
endef

ALLFILES = $(call walk, $(LOCAL_PATH)/src)
FILE_LIST := $(filter %.cpp, $(ALLFILES))
$(info FlameSteelEngineProject source code files list)
$(info $(FILE_LIST))
LOCAL_SRC_FILES := $(FILE_LIST:$(LOCAL_PATH)/%=%)

LOCAL_SHARED_LIBRARIES += SDL2
LOCAL_SHARED_LIBRARIES += FlameSteelCore
LOCAL_SHARED_LIBRARIES += FlameSteelCommonTraits
LOCAL_SHARED_LIBRARIES += FlameSteelEngineGameToolkit
LOCAL_SHARED_LIBRARIES += FlameSteelEngineGameToolkitFSGL

LOCAL_LDLIBS := -lGLESv1_CM -lGLESv2 -llog

include $(BUILD_SHARED_LIBRARY)
