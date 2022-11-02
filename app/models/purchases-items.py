from .db import db

class Purchases_Items(db.Model):
    __tablename__= "purchases_items"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    item_id = db.Column(db.Integer, db.ForeignKey("items.id", ondelete="CASCADE"), nullable=False)
    price = db.Column(db.Integer, db.ForeignKey("items.price", ondelete="CASCADE"), nullable=False)
    purchase_id = db.Column(db.Integer, db.ForeignKey("purchases.id", ondelete="CASCADE"), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)

    #relationsips
    items = db.relationship("Item", back_populates="purchases_items")
    purchases = db.relationship("Purchase", back_populates="purchases_items")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'item_id': self.item_id,
            'price': self.price,
            'purchase_id': self.purchase_id,
            'quantity': self.quantity
        }
