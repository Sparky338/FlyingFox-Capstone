from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

# add import and set variable to access flask environment
import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get('SCHEMA')


date_str = str(datetime.now())
date = datetime.now().strftime('%m/%d/%Y')
db = SQLAlchemy()

# add function to add a prefix to table names in production environment only
def add_prefix_for_prod(attr):
    if environment == "production":
        return f"{SCHEMA}.{attr}"
    else:
        return attr
