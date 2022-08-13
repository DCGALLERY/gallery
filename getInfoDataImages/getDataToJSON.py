from PIL import Image
import glob
import cv2
import os

def load_images_from_folder(folder):
    images = []
    for filename in os.listdir(folder):
        img = cv2.imread(os.path.join(folder,filename))
        # if filetype.is_image(img):
        if img is not None:
            h, w, *_ = img.shape
            print(f"Dimensions: {h}x{w} | Image name: {filename}")
            images.append(img)
    return images

    
    
load_images_from_folder("C:/Users/dinhc/OneDrive - actvn.edu.vn/Desktop/C Quynh Final")