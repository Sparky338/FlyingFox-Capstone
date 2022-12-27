from app.models import db, Purchases_Items

def seed_purchases_items():
    first_demo = Purchases_Items (
        purchase_id="1",
        item_id="1",
        quantity="1"
    )
    first_nikko = Purchases_Items (
        purchase_id="2",
        item_id="3",
        quantity="1"
    )
    second_demo = Purchases_Items (
        purchase_id="3",
        item_id="2",
        quantity="1"
    )
    first_crystal = Purchases_Items (
        purchase_id="4",
        item_id="3",
        quantity="1"
    )
    second_nikko = Purchases_Items (
        purchase_id="5",
        item_id="5",
        quantity="1"
    )
    third_demo = Purchases_Items (
        purchase_id="6",
        item_id="3",
        quantity="1"
    )
    three_demo = Purchases_Items (
        purchase_id="6",
        item_id="12",
        quantity="1"
    )
    first_Andy = Purchases_Items (
        purchase_id="7",
        item_id="7",
        quantity="1"
    )
    first_Christian = Purchases_Items (
        purchase_id="8",
        item_id="2",
        quantity="1"
    )
    first_julie = Purchases_Items (
        purchase_id="9",
        item_id="2",
        quantity="1"
    )
    first_corinne = Purchases_Items (
        purchase_id="10",
        item_id="9",
        quantity="1"
    )
    second_julie = Purchases_Items (
        purchase_id="11",
        item_id="3",
        quantity="1"
    )
    third_nikko = Purchases_Items (
        purchase_id="12",
        item_id="1",
        quantity="5"
    )
    second_Andy = Purchases_Items (
        purchase_id="13",
        item_id="11",
        quantity="1"
    )
    first_keri = Purchases_Items (
        purchase_id="14",
        item_id="5",
        quantity="1"
    )
    one_keri = Purchases_Items (
        purchase_id="14",
        item_id="8",
        quantity="1"
    )
    first_bobbie = Purchases_Items (
        purchase_id="15",
        item_id="12",
        quantity="1"
    )
    one_bobbie = Purchases_Items (
        purchase_id="15",
        item_id="10",
        quantity="1"
    )
    onest_bobbie = Purchases_Items (
        purchase_id="15",
        item_id="4",
        quantity="1"
    )
    first_marnie = Purchases_Items (
        purchase_id="16",
        item_id="12",
        quantity="1"
    )
    final_Demo = Purchases_Items (
        purchase_id="17",
        item_id="10",
        quantity="2"
    )

    db.session.add(first_demo)
    db.session.add(first_nikko)
    db.session.add(second_demo)
    db.session.add(first_crystal)
    db.session.add(second_nikko)
    db.session.add(third_demo)
    db.session.add(three_demo)
    db.session.add(first_Andy)
    db.session.add(first_Christian)
    db.session.add(first_julie)
    db.session.add(first_corinne)
    db.session.add(second_julie)
    db.session.add(third_nikko)
    db.session.add(second_Andy)
    db.session.add(first_keri)
    db.session.add(one_keri)
    db.session.add(first_bobbie)
    db.session.add(one_bobbie)
    db.session.add(onest_bobbie)
    db.session.add(first_marnie)
    db.session.add(final_Demo)


    db.session.commit()

# Uses a raw SQL query to TRUNCATE the items table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_purchases_items():
    db.session.execute('TRUNCATE purchases_items RESTART IDENTITY CASCADE;')
    db.session.commit()
