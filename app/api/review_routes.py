from flask import Blueprint, jsonify, request
from app.models import User, db, Review, Purchase
from flask_login import login_required
from app.forms import CreateReview, EditReview

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

    if form.validate_on_submit():
        review = Review()
        form.populate_obj(review)

        db.session.add(review)
        db.session.commit()

        return {'reviews': review.to_dict()}
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
        return {'reviews': review.to_dict()}
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
