from .db import db

class Purchase(db.Model):
    __tablename__ = 'purchases'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    # total price
    price = db.Column(db.Float, nullable = False)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    address = db.Column(db.String, nullable=False)
    address2 = db.Column(db.String)
    city = db.Column(db.String, nullable=False)
    state = db.Column(db.String, nullable=False)
    zipCode = db.Column(db.String, nullable=False)

    #relationships
    purchases_items = db.relationship("Purchases_Items", back_populates="purchases")
    reviews = db.relationship("Review")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'price': self.price,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'address': self.address,
            'address2': self.address2,
            'city': self.city,
            'state': self.state,
            'zipCode': self.zipCode,
            'reviews': [r.to_dict() for r in self.reviews],
            'purchases_items': [pi.to_dict() for pi in self.purchases_items],
        }
