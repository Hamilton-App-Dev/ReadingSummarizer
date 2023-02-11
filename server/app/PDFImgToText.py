import cv2
import pytesseract
import numpy as np

def grayscale(image: np.ndarray):
    return cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

def noise_removal(image: np.ndarray):
    kernel = np.ones((1, 1), np.uint8)
    image = cv2.dilate(image, kernel, iterations=1)
    kernel = np.ones((1, 1), np.uint8)
    image = cv2.erode(image, kernel, iterations=1)
    image = cv2.morphologyEx(image, cv2.MORPH_CLOSE, kernel)
    image = cv2.medianBlur(image, 3)
    return (image)

def preprocess_image(image: np.ndarray):
    grey_image = grayscale(image)
    thresh, bw_image = cv2.threshold(grey_image, 210, 230, cv2.THRESH_BINARY)
    image = noise_removal(bw_image)
    return image

def read_images(img_files: list):
    text = ""
    for img_file in img_files:
        image = cv2.imread(img_file)
        processed_image = preprocess_image(image)
        text += pytesseract.image_to_string(processed_image)
    return text
