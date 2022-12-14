from flask.cli import AppGroup
from .users import seed_users, undo_users
from .items import seed_items, undo_items
from .purchases import seed_purchases, undo_purchases
from .reviews import seed_reviews, undo_reviews
from .purchases_items import seed_purchases_items, undo_purchases_items
from .images import seed_images, undo_images
from .articles import seed_articles, undo_articles

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding, truncate all tables prefixed with schema name
        db.session.execute(f"TRUNCATE table {SCHEMA}.articles RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.images RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.purchases_items RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.purchases RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.items RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
        # Add a truncate command here for every table that will be seeded.
        db.session.commit()
    seed_users()
    seed_items()
    seed_purchases()
    seed_purchases_items()
    seed_reviews()
    seed_images()
    seed_articles()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_articles()
    undo_images()
    undo_reviews()
    undo_purchases_items()
    undo_purchases()
    undo_items()
    undo_users()
    # Add other undo functions here
