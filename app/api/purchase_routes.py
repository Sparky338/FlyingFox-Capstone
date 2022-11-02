from flask import Blueprint, request
from flask_login import current_user, login_required
from app.models import db, Item, Purchase
# from ..forms.purchase_form import CreatePurchase

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
    # print("request here", request.json)
    cart_id = request.json['cartItemsId']
    cart_qty = request.json['cartQuantities']

    purchaser_id = current_user.id


    if form.validate_on_submit():
        purchase = Purchase()
        # form.populate_obj(purchase)
        purchase.user_id = purchaser_id
        purchase.item_id = [i.to_dict() for i in cartItemsId]
        purchase.quantity = [q.to_dict() for q in cartQuantities]

        db.session.add(purchase)
        db.session.commit()
        return {'purchases': purchase.to_dict()}
    # else:
    #     return {'errors': form.errors}, 400
