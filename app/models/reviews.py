from .db import db
class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    item_id = db.Column(db.Integer, db.ForeignKey("items.id", ondelete="CASCADE"), nullable=False)
    purchase_id = db.Column(db.Integer, db.ForeignKey("purchases.id", ondelete="CASCADE"), nullable=False)
    review = db.Column(db.String(1000), nullable=False)
    image = db.Column(db.String(1000))

    #relationships
    user = db.relationship("User", back_populates="reviews")
    item = db.relationship("Item", back_populates="reviews")
    purchase = db.relationship("Purchase", back_populates="reviews")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'item_id': self.item_id,
            'purchase_id' : self.purchase_id,
            'review': self.review,
            'image': self.image
        }
