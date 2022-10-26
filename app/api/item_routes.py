from flask import Blueprint
from app.models import db, Item

item_routes = Blueprint('items', __name__)

@item_routes.route("")
def get_items():
    """Get all items"""
    items = Item.query.all()
    return {'items': [i.to_dict() for i in items]}

@item_routes.route("/<int:id>")
def get_item_by_id(id):
    """Get one item by id"""
    item = item.query.filter_by(id=id).all()
    return {item: [i.to_dict() for i in item]}
