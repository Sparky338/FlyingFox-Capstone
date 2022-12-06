from .db import db, environment, SCHEMA, add_prefix_for_prod, date_str


class Article(db.Model):
    __tablename__ = 'articles'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    article_title = db.Column(db.String(255), nullable=False)
    article = db.Column(db.String(4000), nullable=False)
    image_url = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.String(50), nullable=False, default=date_str)

    #relationships
    # images = db.relationship("Image", back_populates="items", cascade = "all, delete", lazy=False)

    def to_dict(self):
        return {
            'id': self.id,
            'article_name': self.item_name,
            'article': self.article,
            'image_url': self.image_url
        }
