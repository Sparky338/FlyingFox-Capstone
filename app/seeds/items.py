from app.models import db, Item

# adds the items in the store
def seed_items():
    beginner_suit = Item (
        item_name='beginner_suit',
        price="1000.00",
        description="A wingsuit perfect for beginners",
        category="Wingsuit"
    )

    tracking_suit = Item (
        item_name='tracking_suit',
        price="800.00",
        description="A track suit perfect for beginners",
        category="Tracking suit"
    )

    onepiece_tracking_suit = Item (
        item_name='onepiece_tracking_suit',
        price="100.00",
        description="A track suit perfect for getting ready to wingsuit",
        category="Tracking suit"
    )
