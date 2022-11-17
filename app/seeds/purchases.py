from app.models import db, Purchase

def seed_purchases():
    first_demo = Purchase (
        user_id="1",
        price="1000.00",
        first_name="Demo",
        last_name="lition",
        address="123 AppAcademy Way",
        address2="",
        city="SanFrancisco",
        state="CA",
        zipCode="94105"
    )

    db.session.add(first_demo)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the items table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_purchases():
    db.session.execute('TRUNCATE items RESTART IDENTITY CASCADE;')
    db.session.commit()
