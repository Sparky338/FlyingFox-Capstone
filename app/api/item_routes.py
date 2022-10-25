from flask import Blueprint
from app.models import db, Item

item_routes = Blueprint('items', __name__)

@item_routes.route("")
def get_items():
    """Get all items"""
    # return {'items': }
    pass
