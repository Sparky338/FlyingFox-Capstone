from app.models import db, Purchases_Items

def seed_purchases_items():
    first_demo = Purchases_Items (
        purchase_id="1",
        item_id="1",
        quantity="1"
    )

    db.session.add(first_demo)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the items table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_purchases_items():
    db.session.execute('TRUNCATE items RESTART IDENTITY CASCADE;')
    db.session.commit()
