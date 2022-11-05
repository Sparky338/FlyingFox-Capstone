from app.models import db, Review

def seed_reviews():
    dash_review = Review (
        user_id="1",
        item_id="1",
        purchase_id="1",
        first_name="Demo",
        last_name="Lition",
        review="This is an amazing wingsuit! Helped me so much to learn the basics.",
        image="https://upload.wikimedia.org/wikipedia/commons/d/d8/Wingsuit_Flying_over_Langar_Airfield_UK.jpg"
    )

    db.session.add(dash_review)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the items table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE items RESTART IDENTITY CASCADE;')
    db.session.commit()
