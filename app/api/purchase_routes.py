from flask import Blueprint, request
from flask_login import current_user, login_required
from app.models import db, Item, Purchase, Purchases_Items
from app.forms import CreateShipping, EditShipping

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
    """Add items from local session cart and shipping information to user purchases"""
    form = CreateShipping()
    form['csrf_token'].data = request.cookies['csrf_token']

    cart_id_list = request.json['cartItemsId']
    cart_qty_list = request.json['cartQuantities']
    cart_total = request.json['sum']
    shipping_info = request.json['shippingInformation']
    purchaser_id = current_user.id

    if form.validate_on_submit():
        purchase = Purchase()

        form.populate_obj(shipping_info)
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
    else:
        return {'errors': form.errors}, 400


@purchase_routes.route("/<int:id>", methods=["PUT"])
@login_required
def edit_purchase(id):
    """Update the shipping address of a purchase"""
    form = EditShipping()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        purchase = Purchase.query.filter_by(id=id).first()
        form.populate_obj(purchase)
        db.session.commit()
        return
    else:
        return {'errors': form.errors}, 400
