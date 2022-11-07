from .db import db, environment, SCHEMA, add_prefix_for_prod

class Item(db.Model):
    __tablename__ = 'items'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    item_name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable = False)
    description = db.Column(db.String(1000), nullable=False)
    category = db.Column(db.String)

    #relationships
    images = db.relationship("Image", back_populates="items", cascade = "all, delete", lazy=False)
    purchases_items = db.relationship("Purchases_Items", back_populates="items", cascade = "all, delete", lazy=False)
    reviews = db.relationship("Review", back_populates="items", cascade = "all, delete", lazy=False)
    # purchases = db.relationship("Purchase", back_populates="items", cascade = "all, delete", lazy=False)

    def to_dict(self):
        return {
            'id': self.id,
            'item_name': self.item_name,
            'price': self.price,
            'description': self.description,
            'category': self.category,
            'images': [i.to_dict() for i in self.images],
            'reviews': [r.to_dict() for r in self.reviews]
        }
