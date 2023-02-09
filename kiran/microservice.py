import time

PIPELINE_PATH = '/Users/elikurlbaum/PycharmProjects/kiran/pipeline.txt'
IMAGES_PATH = '/Users/elikurlbaum/PycharmProjects/kiran/Images/'

while True:
    f = open(PIPELINE_PATH, 'r')
    images = f.read()
    f.close()

    if images != "":
        images = images.split(',')
        image_paths = []
        for image in images:
            image_path = f"{IMAGES_PATH}{image}.jpeg"
            image_paths.append(image_path)
        str_image_paths = ','.join(image_paths)

        f = open(PIPELINE_PATH, 'w')
        f.write(str_image_paths)
        f.close()

        print("Successfully sent image path information.")
        break

    time.sleep(1)
