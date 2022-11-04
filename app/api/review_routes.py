from flask import Blueprint, jsonify, request
from app.models import User, db, Review, Purchase
from flask_login import login_required
from app.forms import CreateReviewForm, EditReviewForm

review_routes = Blueprint('review', __name__)

@review_routes.route('')
def get_reviews_by_id():
    pass

@review_routes.route('', methods=["POST"])
@login_required
def create_review():
    """
    Add review
    """
    form = CreateReviewForm()
    review = Review()
    form.populate_obj(review)
    db.session.add(review)
    db.session.commit()

    return {'ok': "ok"}


@review_routes.route('/<int:id>', methods=["PUT"])
@login_required
def edit_review(id):
    """
    Update item by Id
    """
    form = EditReviewForm()
    review = Review.query.filter_by(id=id).first()
    form.populate_obj(review)
    db.session.commit()
    return {'ok': "ok"}


@review_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_review(id):
    """
    Delete item by id
    """
    review = Review.query.filter_by(id=id).first()
    db.session.delete(review)
    db.session.commit()
    return {'ok': "ok"}
