from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired


class EditPurchase(FlaskForm):
    quantity = IntegerField('quantity', validators=[DataRequired()])
