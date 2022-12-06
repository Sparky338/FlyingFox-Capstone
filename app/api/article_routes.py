from flask import Blueprint, request
from flask_login import current_user, login_required
from app.models import db, Article
from app.forms import CreateArticle, EditArticle

purchase_routes = Blueprint("articles", __name__)

@purchase_routes.route("")
def get_articles():
    """Get all articles"""
    
