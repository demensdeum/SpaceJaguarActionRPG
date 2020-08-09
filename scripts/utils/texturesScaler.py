import os
import math
from PIL import Image

print("Power of two converter textures converter")
directory = "resources"
for filename in os.listdir(directory):
    if filename.endswith(".texture"):     
        filePath = os.path.join(directory, filename)
        image = Image.open(filePath)
        width, height = image.size
        maximalNumber = max(width, height)			
        maximalNumber = 2 ** int(round(math.log(maximalNumber, 2)))
        newSize = (maximalNumber, maximalNumber)
        outfile =  filePath
        image = image.resize(newSize, Image.ANTIALIAS)
        image.save(outfile, "PNG")
