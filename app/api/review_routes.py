from flask import Blueprint, jsonify, request, url_for
from app.models import User, db, Review, Purchase, Image
from flask_login import login_required
from app.forms import CreateReview, EditReview
from app.api.image_routes import upload_image
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)


review_routes = Blueprint('reviews', __name__)

@review_routes.route('')
def get_all_reviews():
    """Get all reviews"""
    reviews = Review.query.all()
    return {'reviews': [r.to_dict() for r in reviews]}


@review_routes.route('/<int:id>')
def get_reviews_by_item_id(id):
    """Get reviews by the item's id"""
    reviews = Review.query.filter_by(item_id=id)
    return {'reviews': [r.to_dict() for r in reviews]}


@review_routes.route('', methods=["POST"])
@login_required
def create_review():
    """
    Add a review
    """
    form = CreateReview()
    form['csrf_token'].data = request.cookies['csrf_token']

    # review_image = request.json['image_url']

    if form.validate_on_submit():
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

        review = Review()
        form.populate_obj(review)
        review.image_url = url

        db.session.add(review)
        db.session.commit()


        # for image in review_image:
            # image = Image()
            # image.review_id = review.id
            # image.image_url =
        # url_for('upload_image', review_id = review.id, image = review_image)


        return review.to_dict()
    else:
        return {'errors': form.errors}, 400



@review_routes.route('/<int:id>', methods=["PUT"])
@login_required
def edit_review(id):
    """
    Update item by Id
    """
    form = EditReview()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        review = Review.query.filter_by(id=id).first()
        form.populate_obj(review)
        db.session.commit()
        return review.to_dict()
    else:
        return {'errors': form.errors}, 400


@review_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_review(id):
    """
    Delete item by id
    """
    review = Review.query.filter_by(id=id).first()
    db.session.delete(review)
    db.session.commit()
    return {'message': "Deleted Successfully"}
