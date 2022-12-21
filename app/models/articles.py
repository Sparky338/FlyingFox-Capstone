from .db import db, environment, SCHEMA, add_prefix_for_prod, date_str


class Article(db.Model):
    __tablename__ = 'articles'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    article_title = db.Column(db.String(255), nullable=False)
    article = db.Column(db.String(4000), nullable=False)
    image_url = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.String(50), nullable=False, default=date_str)

    def to_dict(self):
        return {
            'id': self.id,
            'article_title': self.article_title,
            'article': self.article,
            'image_url': self.image_url,
            'created_at': self.created_at
        }
