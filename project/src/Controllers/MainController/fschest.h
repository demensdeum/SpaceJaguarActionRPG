// KISS

#include <stdio.h>
#include <dirent.h>
#include <string.h>
#include <stdlib.h>

void FSCHEST_writeStringToFD(const char *string, FILE *fd) {
    fwrite(string, sizeof(char), strlen(string), fd);
}

size_t FSCHEST_fileSize(char *path) {
    FILE *file = fopen(path, "r");
    fseek(file, 0L, SEEK_END);
    size_t size = ftell(file);
    fclose(file);
    return size;
}

void FSCHEST_writeFileAtPathToFD(char *path, FILE *fd) {
    size_t fileSize = FSCHEST_fileSize(path);
    char *buffer = (char *) malloc(fileSize);
    FILE *file = fopen(path, "rb");
    fread(buffer, sizeof(char), fileSize, file);
    fclose(file);
    fwrite(buffer, sizeof(char), fileSize, fd);
    free(buffer);
}

void FSCHEST_readFileFromFdWithNameOffsetSizeToDestinationDirectory(FILE *inputFile, const char *filename, size_t size, const char *destinationDirectory) {
    printf("readFileFromFdWithNameOffsetSizeToDestinationDirectory\n");
    char outputFilePath[512];
    sprintf(outputFilePath, "%s/%s", destinationDirectory, filename);
    char *buffer = (char *) malloc(size);
    FILE *outputFile = fopen(outputFilePath, "wb");
    fread(buffer, sizeof(char), size, inputFile);
    fwrite(buffer, sizeof(char), size, outputFile);
    fclose(outputFile);
    free(buffer);

}

void FSCHEST_packDirectory(char *path) {

    FILE *outputChest = fopen("files.fschest", "wb");

    struct dirent *dir;
    DIR *directory = opendir(path);

    while ((dir = readdir(directory)) != 0) {
        if (dir->d_type == DT_REG) {
            char *fileName = dir->d_name;
            char filePath[512];
            sprintf(filePath, "%s/%s", path, fileName);
            FSCHEST_writeStringToFD(fileName, outputChest);
            FSCHEST_writeStringToFD("\n", outputChest);
            size_t fileSize = FSCHEST_fileSize(filePath);
            char fileSizeString[256];
            sprintf(fileSizeString, "%zu", fileSize);
            FSCHEST_writeStringToFD(fileSizeString, outputChest);
            FSCHEST_writeStringToFD("\n", outputChest);
            FSCHEST_writeFileAtPathToFD(filePath, outputChest);
        }
    }
    fclose(outputChest);
}


void FSCHEST_extractChestToDirectory(const char *chestPath, const char *destinationDirectory) {
    FILE* file;
    int bufferLength = 256;
    char buffer[bufferLength];
    file = fopen(chestPath, "r");
    int lineCounter = 0;
    char filename[256];
    size_t size = 0;
    while(fgets(buffer, bufferLength, file)) {
        printf("line: %s", buffer);
        if (lineCounter % 2 == 0) {
            sprintf(filename, "%s", buffer);
            filename[strlen(buffer) - 1] = 0;
        }
        else if (lineCounter % 2 == 1) {
            sscanf(buffer, "%zu", &size);
            FSCHEST_readFileFromFdWithNameOffsetSizeToDestinationDirectory(file, filename, size, destinationDirectory);
        }
        lineCounter += 1;
    }
    fclose(file);
}
