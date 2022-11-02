from flask import Blueprint
from flask_login import current_user, login_required
from app.models import db, Item, Purchase

purchase_routes = Blueprint("purchases", __name__)

@purchase_routes.route("")
@login_required
def get_user_purchases():
    """Get all purchases of the current user"""
    purchases = Purchase.query.filter_by(user_id=current_user.id)
    return {'purchases': [p.to_dict() for p in purchases]}


@purchase_routes.route("", methods="POST")
@login_required
def add_user_purchases():
    """Add items from local session cart to user purchases"""
    purchaser_id = current_user.id
    