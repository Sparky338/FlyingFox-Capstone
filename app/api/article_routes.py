from flask import Blueprint, request
from flask_login import current_user, login_required
from app.models import db, Article
from app.forms import CreateArticle, EditArticle

article_routes = Blueprint("articles", __name__)

@article_routes.route("")
def get_articles():
    """Get all articles"""
    articles = Article.query.all()
    return {'articles': [a.to_dict() for a in articles]}

# @article_routes("")
# def get_4_articles():
#     """Get 4 articles"""
#     page = request.args.get('page', 1, type=int)
#     articles = Article.query.paginate(page=page, per_page=4) #all().limit(4)
#     return {'articles':[a.to_dict() for a in articles]}

# @article_routes("/<int:id")
# def get_article_by_id(id):
#     """Get an article by the article's id"""
#     articles = Article.query.filter_by(article_id=id)
#     return {'articles':[a.to_dict() for a in articles]}

# @article_routes('', methods=["POST"])
# @login_required
# def create_article():
#     """Create an article"""
#     form = CreateArticle()
#     form['csrf_token'].data = request.cookies['csrf_token']

#     if form.validate_on_submit():
#         article = Article()
#         form.populate_obj(article)

#         db.session.add(article)
#         db.session.commit()

#         return article.to_dict()
#     else:
#         return {'errors': form.errors}, 400

# @article_routes.route('/<int:id>', methods=["PUT"])
# @login_required
# def edit_article(id):
#     """Update article by Id"""
#     form = EditArticle()
#     form['csrf_token'].data = request.cookies['csrf_token']

#     if form.validate_on_submit():
#         article = Article.query.filter_by(id=id).first()
#         form.populate_obj(article)
#         db.session.commit()

#         return article.to_dict()
#     else:
#         return {'errors': form.errors}, 400

# @article_routes.route('/<int:id>', methods=["DELETE"])
# @login_required
# def delete_article(id):
#     """
#     Delete article by id
#     """
#     article = Article.query.filter_by(id=id).first()
#     db.session.delete(article)
#     db.session.commit()
#     return {'message': "Deleted Successfully"}
