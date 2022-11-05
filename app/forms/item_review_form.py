from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


class CreateReview(FlaskForm):
    first_name = StringField('first name', validators=[DataRequired()])
    last_name = StringField('last name', validators=[DataRequired()])
    review = StringField('review', validators=[DataRequired()])
    image_url = StringField('image_url')


class EditReview(FlaskForm):
    first_name = StringField('first name', validators=[DataRequired()])
    last_name = StringField('last name', validators=[DataRequired()])
    review = StringField('review', validators=[DataRequired()])
    image_url = StringField('image_url')
