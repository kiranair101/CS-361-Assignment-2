import time
from PIL import Image

PIPELINE_PATH = '/Users/elikurlbaum/PycharmProjects/kiran/pipeline.txt'
IMAGES_PATH = '/Users/elikurlbaum/PycharmProjects/kiran/Images/'

while True:
    f = open(PIPELINE_PATH, 'r')
    images = f.read()
    f.close()

    if images != "":
        images = images.split(',')
        for image in images:
            try:
                im = Image.open(rf"{IMAGES_PATH}{image}.jpeg")
                im.show()
            except FileNotFoundError:
                print("An exception occurred.")
        f = open(PIPELINE_PATH, 'w')
        f.close()
        print("Successfully displayed exercise images.")
        break

    time.sleep(1)
