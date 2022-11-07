from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class CreateReview(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    item_id = IntegerField('user_id', validators=[DataRequired()])
    purchase_id = IntegerField('user_id', validators=[DataRequired()])
    first_name = StringField('first name', validators=[DataRequired()])
    last_name = StringField('last name', validators=[DataRequired()])
    review = StringField('review', validators=[DataRequired()])
    image_url = StringField('image_url')


class EditReview(FlaskForm):
    first_name = StringField('first name', validators=[DataRequired()])
    last_name = StringField('last name', validators=[DataRequired()])
    review = StringField('review', validators=[DataRequired()])
    image_url = StringField('image_url')
