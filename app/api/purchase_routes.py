from flask import Blueprint, request
from flask_login import current_user, login_required
from app.models import db, Item, Purchase, Purchases_Items

purchase_routes = Blueprint("purchases", __name__)

@purchase_routes.route("")
@login_required
def get_user_purchases():
    """Get all purchases of the current user"""
    purchases = Purchase.query.filter_by(user_id=current_user.id)
    return {'purchases': [p.to_dict() for p in purchases]}

@purchase_routes.route("", methods=["POST"])
@login_required
def add_user_purchases():
    """Add items from local session cart to user purchases"""

    cart_id_list = request.json['cartItemsId']
    cart_qty_list = request.json['cartQuantities']
    cart_total = request.json['sum']
    purchaser_id = current_user.id

    #add error handling for missing data

    if cart_id_list:
        purchase = Purchase()

        purchase.user_id = purchaser_id
        purchase.price = cart_total
        db.session.add(purchase)
        db.session.commit()

        for (id, qty) in zip(cart_id_list, cart_qty_list):
            purchases_items = Purchases_Items()
            purchases_items.purchase_id = purchase.id
            purchases_items.item_id = id
            purchases_items.quantity = qty
            db.session.add(purchases_items)

        db.session.commit()
    # else:
    #     return {'errors': form.errors}, 400
