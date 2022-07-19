from PIL import Image

import os
import secrets

def save_picture(picture):
    random_hex = secrets.token_hex(8)
    _, f_ext = os.path.splitext(picture.filename)
    picture_fn = random_hex + f_ext
    picture_path = os.path.join('static/pics', picture_fn)

    output_size = (125, 125)
    i = Image.open(picture)
    i.thumbnail(output_size)
    i.save(picture_path)

    return picture_fn
