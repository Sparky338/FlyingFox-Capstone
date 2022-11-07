from .db import db, environment, SCHEMA, add_prefix_for_prod

class Purchases_Items(db.Model):
    __tablename__ = "purchases_items"
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    # this is a single item in a specific purchase id

    id = db.Column(db.Integer, primary_key=True)
    purchase_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("purchases.id", ondelete="CASCADE")), nullable=False)
    item_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("items.id", ondelete="CASCADE")), nullable=False)
    # quantity of individual items
    quantity = db.Column(db.Integer, nullable=False)

    #relationsips
    purchases = db.relationship("Purchase", back_populates="purchases_items")
    items = db.relationship("Item", back_populates="purchases_items")

    def to_dict(self):
        return {
            'id': self.id,
            'purchase_id': self.purchase_id,
            'item_id': self.item_id,
            'quantity': self.quantity
        }
