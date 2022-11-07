from app.models import db, Image

def seed_images():
    Dash = Image(
        item_id ="1",
        image_url=""
    )

    River = Image(
        item_id ="2",
        image_url=""
    )

    BTC = Image(
        item_id ="3",
        image_url=""
    )

    Prince = Image(
        item_id ="4",
        image_url=""
    )

    Sideshow = Image(
        item_id ="5",
        image_url=""
    )

    Beast = Image(
        item_id ="6",
        image_url=""
    )

    Racer = Image(
        item_id ="7",
        image_url=""
    )

    Daiko = Image(
        item_id ="8",
        image_url=""
    )

    Mutant = Image(
        item_id ="9",
        image_url=""
    )

    SFG = Image(
        item_id ="10",
        image_url=""
    )

    Haymaker = Image(
        item_id ="11",
        image_url=""
    )

    Epicenter = Image(
        item_id ="12",
        image_url=""
    )

    Dash_review = Image(
        review_id ="1",
        image_url=""
    )

    db.session.add(Dash)
    db.session.add(River)
    db.session.add(BTC)
    db.session.add(Prince)
    db.session.add(Sideshow)
    db.session.add(Beast)
    db.session.add(Racer)
    db.session.add(Daiko)
    db.session.add(Mutant)
    db.session.add(SFG)
    db.session.add(Haymaker)
    db.session.add(Epicenter)
    db.session.add(Dash_review)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the items table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_items():
    db.session.execute('TRUNCATE items RESTART IDENTITY CASCADE;')
    db.session.commit()
