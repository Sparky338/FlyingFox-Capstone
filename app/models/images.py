from .db import db
from flask_login import UserMixin

class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    item_id = db.Column(db.Integer, db.ForeignKey("items.id", ondelete="CASCADE"), nullable=True)
    review_id = db.Column(db.Integer, db.ForeignKey("reviews.id", ondelete="CASCADE"), nullable=True)
    image_url = db.Column(db.String(255), nullable=False)

    #relationships
    item = db.relationship("Item" , back_populates="images")
    review = db.relationship("Review" , back_populates="images")

    def to_dict(self):
        return {
            'id': self.id,
            'item_id': self.item_id,
            'review_id': self.review_id,
            'image_url': self.image_url
        }
