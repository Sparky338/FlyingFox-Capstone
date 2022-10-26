from app.models import db, Item

# adds the items in the store
def seed_items():
    Dash = Item (
        item_name='Dash',
        price="1000.00",
        description="A wingsuit perfect for novices. Perfect for learning the basics. Minimum 200 overall skydive jumps.",
        category="Wingsuit"
    )

    River = Item (
        item_name='River',
        price="1100.00",
        description="A wingsuit perfect for beginners. Good all around performance, flocking ability, and acrobatics. Minimum 200 overall skydive jumps.",
        category="Wingsuit"
    )

    BTC = Item (
        item_name='BTC',
        price="1200.00",
        description="A wingsuit perfect for intermediate pilots. Great all around performance, flocking ability, and acrobatics. Minimum 75 jumps in a beginner wingsuit.",
        category="Wingsuit"
    )

    Prince = Item (
        item_name='Prince',
        price="1200.00",
        description="A wingsuit perfect for intermediate pilots. Ideal for acrobatics and backflying. Minimum 75 jumps in a beginner wingsuit.",
        category="Wingsuit"
    )

    Sideshow = Item (
        item_name='Sideshow',
        price="1300.00",
        description="A wingsuit perfect for advanced pilots. Amazing flocking ability, performance, and acrobatics. Minimum 200 jumps in an intermediate wingsuit.",
        category="Wingsuit"
    )

    Beast = Item (
        item_name='Beast',
        price="1500.00",
        description="A wingsuit perfect for expert pilots. Excels in all disciplines. Minumum 200 jumps in an advanced wingsuit.",
        category="Wingsuit"
    )

    Racer = Item (
        item_name='Racer',
        price="1500.00",
        description="A wingsuit perfect for expert pilots interested in competition. Excels in speed and responsive inputs. Ideal for professional competition. Minumum 200 jumps in an advanced wingsuit.",
        category="Wingsuit"
    )

    Daiko = Item (
        item_name='Daiko',
        price="800.00",
        description="A two piece track suit perfect for beginners and BASE jumping.",
        category="Tracking suit"
    )

    Mutant = Item (
        item_name='Mutant',
        price="1100.00",
        description="A one piece tracking suit perfect for getting ready to wingsuit.",
        category="Tracking suit"
    )

    SFG = Item (
        item_name='SFG',
        price="1200.00",
        description="A one piece track suit perfect for flying fast and long distances. Comparable performance to a beginner wingsuit. Experience with one piece tracking suit highly recommended.",
        category="Tracking suit"
    )

    Haymaker = Item (
        item_name='Haymaker',
        price="2200.00",
        description="A parachute speciafically made for BASE jumping. Opens quickly and on heading, with easy controlability.",
        category="Parachute"
    )

    Epicenter = Item (
        item_name='Epicenter',
        price="2200.00",
        description="A parachute speciafically made for wingsuits. Opens rapidly, softly, and on heading, with easy controlability.",
        category="Parachute"
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

    db.session.commit()
    

# Uses a raw SQL query to TRUNCATE the items table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_items():
    db.session.execute('TRUNCATE items RESTART IDENTITY CASCADE;')
    db.session.commit()
