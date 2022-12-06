from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired


class CreateArticle(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    article_title = StringField('article title', validators=[DataRequired()])
    article = StringField('article', validators=[DataRequired()])
    image_url = StringField('image', validators=[DataRequired()])


class EditArticle(FlaskForm):
    article_title = StringField('article title', validators=[DataRequired()])
    article = StringField('article', validators=[DataRequired()])
