from .db import db, environment, SCHEMA, add_prefix_for_prod
# from flask_login import UserMixin

class Image(db.Model):
    __tablename__ = 'images'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    item_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("items.id"), ondelete="CASCADE"), nullable=True)
    review_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("reviews.id"), ondelete="CASCADE"), nullable=True)
    image_url = db.Column(db.String(255), nullable=False)

    #relationships
    items = db.relationship("Item" , back_populates="images")
    reviews = db.relationship("Review")

    def to_dict(self):
        return {
            'id': self.id,
            'item_id': self.item_id,
            'review_id': self.review_id,
            'image_url': self.image_url
        }
