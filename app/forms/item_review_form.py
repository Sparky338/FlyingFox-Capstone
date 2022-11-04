from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


class CreateReview(FlaskForm):
    review = StringField('review', validators=[DataRequired()])
    image_url = StringField('image_url')


class EditReview(FlaskForm):
    review = StringField('review', validators=[DataRequired()])
    image_url = StringField('image_url')
