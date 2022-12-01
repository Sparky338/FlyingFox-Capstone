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
    second_demo = Purchase (
        user_id="1",
        price="1100.00",
        first_name="Demo",
        last_name="lition",
        address="123 AppAcademy Way",
        address2="",
        city="SanFrancisco",
        state="CA",
        zipCode="94105"
    )
    third_demo = Purchase (
        user_id="1",
        price="3400.00",
        first_name="Demo",
        last_name="lition",
        address="123 AppAcademy Way",
        address2="",
        city="SanFrancisco",
        state="CA",
        zipCode="94105"
    )
    first_nikko = Purchase (
        user_id="10",
        price="1200.00",
        first_name="Nikko",
        last_name="Mamallo",
        address="123 Pilot Pl",
        address2="",
        city="Shelton",
        state="WA",
        zipCode="98584"
    )
    second_nikko = Purchase (
        user_id="10",
        price="1300.00",
        first_name="Nikko",
        last_name="Mamallo",
        address="123 Pilot Pl",
        address2="",
        city="Shelton",
        state="WA",
        zipCode="98584"
    )
    third_nikko = Purchase (
        user_id="10",
        price="5000.00",
        first_name="Nikko",
        last_name="Mamallo",
        address="123 Pilot Pl",
        address2="",
        city="Shelton",
        state="WA",
        zipCode="98584"
    )
    first_crystal = Purchase (
        user_id="4",
        price="1200.00",
        first_name="Crystal",
        last_name="Hadel",
        address="261 Helicopter Hwy",
        address2="",
        city="Perris",
        state="CA",
        zipCode="92599"
    )
    first_Andy = Purchase (
        user_id="9",
        price="1500.00",
        first_name="Andy",
        last_name="Farrington",
        address="321 BASE Blvd",
        address2="apt 5",
        city="Moab",
        state="UT",
        zipCode="84532"
    )
    first_christian = Purchase (
        user_id="5",
        price="1100.00",
        first_name="Christian",
        last_name="Warren",
        address="321 BASE Blvd",
        address2="apt 3",
        city="Moab",
        state="UT",
        zipCode="84532"
    )
    first_Julie = Purchase (
        user_id="7",
        price="1100.00",
        first_name="Julie",
        last_name="Lynn",
        address="321 BASE Blvd",
        address2="apt 3",
        city="Moab",
        state="UT",
        zipCode="84532"
    )
    second_Julie = Purchase (
        user_id="7",
        price="1200.00",
        first_name="Julie",
        last_name="Lynn",
        address="321 BASE Blvd",
        address2="apt 3",
        city="Moab",
        state="UT",
        zipCode="84532"
    )
    first_corinne = Purchase (
        user_id="6",
        price="1100.00",
        first_name="Julie",
        last_name="Lynn",
        address="321 BASE Blvd",
        address2="apt 3",
        city="Moab",
        state="UT",
        zipCode="84532"
    )
    second_Andy = Purchase (
        user_id="9",
        price="2200.00",
        first_name="Andy",
        last_name="Farrington",
        address="321 BASE Blvd",
        address2="apt 5",
        city="Moab",
        state="UT",
        zipCode="84532"
    )
    first_Keri = Purchase (
        user_id="8",
        price="2100.00",
        first_name="Keri",
        last_name="Bell",
        address="270 Swoop St",
        address2="",
        city="Shelton",
        state="WA",
        zipCode="98584"
    )
    first_bobbie = Purchase (
        user_id="3",
        price="4600.00",
        first_name="Bobbie",
        last_name="Bo",
        address="270 Swoop St",
        address2="",
        city="Shelton",
        state="WA",
        zipCode="98584"
    )
    first_Marnie = Purchase (
        user_id="2",
        price="2200.00",
        first_name="Marnie",
        last_name="Marlo",
        address="Twin Otter Pl",
        address2="",
        city="Eloy",
        state="AZ",
        zipCode="85131"
    )


    db.session.add(first_demo)
    db.session.add(second_demo)
    db.session.add(third_demo)
    db.session.add(first_nikko)
    db.session.add(second_nikko)
    db.session.add(third_nikko)
    db.session.add(first_crystal)
    db.session.add(first_Andy)
    db.session.add(first_christian)
    db.session.add(first_Julie)
    db.session.add(first_corinne)
    db.session.add(second_Julie)
    db.session.add(second_Andy)
    db.session.add(first_Keri)
    db.session.add(first_bobbie)
    db.session.add(first_Marnie)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the items table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_purchases():
    db.session.execute('TRUNCATE items RESTART IDENTITY CASCADE;')
    db.session.commit()
