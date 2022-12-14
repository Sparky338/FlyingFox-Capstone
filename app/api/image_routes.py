from flask import Blueprint, request
from app.models import db, Image
from flask_login import current_user, login_required
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)

image_routes = Blueprint("images", __name__)

@image_routes.route('')
def get_all_images():
    """Get all images"""
    images = Image.query.all()
    return {'images': [i.to_dict() for i in images]}

#AWS S3 implementation

@image_routes.route("", methods=["POST"])
@login_required
def upload_image():
    if "image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]
    # flask_login allows us to get the current user from the request
    # New images will only come from reviews because item data is seeded and static.
    # new_image = Image(user=current_user, image_url=url) #review_id=review_id instead of user
    # db.session.add(new_image)
    # db.session.commit()
    return {"url": url}


# url_for to redirect to this route from review, send review id and image url OR lines 13-36 in
# the review post route. After review commited, can access the id by review.id
