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

@article_routes("")
def get_4_articles():
    """Get 4 articles"""
    articles = Article.query.all().limit(4)
    return {'articles':[a.to_dict() for a in articles]}
