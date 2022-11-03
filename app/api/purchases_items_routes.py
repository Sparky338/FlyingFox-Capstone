from flask import Blueprint, request
from flask_login import current_user, login_required
from app.models import db, Purchases_Items

purchases_items_routes = Blueprint("purchases_items", __name__)


@purchases_items_routes.route("")
@login_required
def get_user_purchases_items():
    """Get all purchases_items"""
    purchases_items = Purchases_Items
    return {'purchases_items': [pi.to_dict() for pi in purchases_items]}
