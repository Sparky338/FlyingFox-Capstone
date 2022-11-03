from .db import db

class Purchase(db.Model):
    __tablename__ = 'purchases'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    # total price
    price = db.Column(db.Float, nullable = False)

    #relationships
    # items = db.relationship("Item", back_populates="purchases")
    purchases_items = db.relationship("Purchases_Items", back_populates="purchases")
    reviews = db.relationship("Review")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'price': self.price,
            'review': [r.to_dict() for r in self.reviews]
        }
