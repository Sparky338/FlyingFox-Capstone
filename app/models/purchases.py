from .db import db

class Purchase(db.Model):
    __tablename__ = 'purchases'
#
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    item_id = db.Column(db.Integer, db.ForeignKey("items.id", ondelete="CASCADE"), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Float, nullable = False)

    #relationships
    # items = db.relationship("Item", back_populates="purchases")
    purchases_items = db.relationship("Item", back_populates="purchases")
    reviews = db.relationship("Review")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'item_id': self.item_id,
            'quantity': self.quantity,
            'price': self.price,
            'review': [r.to_dict() for r in self.reviews]
        }
