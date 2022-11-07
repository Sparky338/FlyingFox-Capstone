from .db import db


class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    item_id = db.Column(db.Integer, db.ForeignKey("items.id", ondelete="CASCADE"), nullable=False)
    purchase_id = db.Column(db.Integer, db.ForeignKey("purchases.id", ondelete="CASCADE"), nullable=False)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    review = db.Column(db.String(1000), nullable=False)
    image_id = db.Column(db.String(255))

    #relationships
    # user = db.relationship("User", back_populates="reviews")
    items = db.relationship("Item", back_populates="reviews")
    purchase = db.relationship("Purchase", back_populates="reviews")
    image = db.relationship("Image", back_populates="reviews")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'item_id': self.item_id,
            'purchase_id' : self.purchase_id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'review': self.review,
            'image': self.image
        }
