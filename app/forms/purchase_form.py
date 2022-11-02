from flask_wtf import FlaskForm
from wtforms import FloatField
from wtforms.validators import DataRequired



class CreatePurchase(FlaskForm):
    price = FloatField('price', validators=[DataRequired()])
