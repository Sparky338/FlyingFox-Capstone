from app.models import db, Review

def seed_reviews():
    dashreview = Review (
        user_id="1",
        item_id="1",
        purchase_id="1",
        first_name="Demo",
        last_name="Lition",
        review="This is an amazing wingsuit! Helped me so much to learn the basics.",
        image_url="https://www.rockskymarket.com/9498-thickbox_default/squirrel-sprint-wingsuit-jumpsuits.jpg"
    )
    second_demo = Review (
        user_id="1",
        item_id="2",
        purchase_id="2",
        first_name="Demo",
        last_name="Lition",
        review="This wingsuit rocks! so much more power than the Dash.",
        image_url="https://www.rockskymarket.com/9504/squirrel-swift-3-wingsuit-jumpsuits.jpg"
    )
    third_demo = Review (
        user_id="1",
        item_id="3",
        purchase_id="3",
        first_name="Demo",
        last_name="Lition",
        review="This wingsuit is even better! I love flying with my friends in it!",
        image_url="https://www.rockskymarket.com/9514-thickbox_default/squirrel-atc-2-wingsuit-jumpsuits.jpg"
    )
    three_demo = Review (
        user_id="1",
        item_id="12",
        purchase_id="3",
        first_name="Demo",
        last_name="Lition",
        review="I love this parachute. inflates evenly, quickly, and softly. So easy to pack as well!",
        image_url="https://www.rockskymarket.com/7410/epicene-canopies.jpg"
    )
    firstNikko = Review (
        user_id="10",
        item_id="3",
        purchase_id="4",
        first_name="Nikko",
        last_name="Mamallo",
        review="The BTC is a great suit. I won't get rid of it, even after I upgrade to the Sideshow!",
        image_url="https://www.skydivemag.com/new/wp-content/uploads/2019/02//27b4992f-d312-4868-a840-b3048a4d2bbd.jpg"
    )
    secondNikko = Review (
        user_id="10",
        item_id="5",
        purchase_id="5",
        first_name="Nikko",
        last_name="Mamallo",
        review="As expected, the Sideshow is amazing and sturdy! Lives up to the reputation that is given to it.",
        image_url="https://www.rockskymarket.com/9515/squirrel-freak-3-wingsuit-jumpsuits.jpg"
    )
    thirdNikko = Review (
        user_id="10",
        item_id="1",
        purchase_id="7",
        first_name="Nikko",
        last_name="Mamallo",
        review="A great suit to teach new pilots. I got five in different sizes to help make it more accessible to new jumpers.",
        image_url="https://www.rockskymarket.com/9498-thickbox_default/squirrel-sprint-wingsuit-jumpsuits.jpg"
    )
    firstCrystal = Review (
        user_id="4",
        item_id="3",
        purchase_id="8",
        first_name="Crystal",
        last_name="Hadel",
        review=" It fits like a glove with the perfect amount of tension when I point my toes. Arm length is perfect and great fit on the torso.",
        image_url="https://squirrel.ws/img/review_photos/388/388_thumb.jpg"
    )
    firstAndy = Review (
        user_id="9",
        item_id="7",
        purchase_id="8",
        first_name="Andy",
        last_name="Farington",
        review="A perfect suit to help win in the RedBull Aces Wingsuit Race. Do you need any more convincing?",
        image_url="https://www.rockskymarket.com/9526/squirrel-c-race-wingsuit-jumpsuits.jpg"
    )
    secondAndy = Review (
        user_id="9",
        item_id="11",
        purchase_id="13",
        first_name="Andy",
        last_name="Farington",
        review="This BASE canopy is great. A lot less 180s into a cliff face...",
        image_url="https://www.rockskymarket.com/9434/squirrel-hayduke-hd-base-gear.jpg"
    )
    firstChristian = Review (
        user_id="5",
        item_id="2",
        purchase_id="9",
        first_name="Christian",
        last_name="Warren",
        review="I love flying the River. I get to practice the skills that I've learned and learn new things on an easy platform.",
        image_url="https://static.wixstatic.com/media/90bdb5_ef6eb71c40834ba3aea8c81972ea6eda~mv2.jpg/v1/fill/w_560,h_560,al_c,lg_1,q_80,enc_auto/90bdb5_ef6eb71c40834ba3aea8c81972ea6eda~mv2.jpg"
    )
    firstJulie = Review (
        user_id="7",
        item_id="2",
        purchase_id="10",
        first_name="Julie",
        last_name="Lynn",
        review="The River is great. Flying with others in this suit is the best feeling ever!",
        image_url="https://www.skydivemag.com/new/wp-content/uploads/2021/01/thrash-gordon-selfie-squirrel-SMI.jpg"
    )
    secondJulie = Review (
        user_id="7",
        item_id="3",
        purchase_id="11",
        first_name="Julie",
        last_name="Lynn",
        review="The BTC is Fantastic. I can do so much more and keep up with others easier. What a blast!",
        image_url="https://www.cypres.aero/wp-content/uploads/2019/03/captures-e%CC%81cran-freak-2-Marine-1-1.jpg"
    )
    firstCorinne = Review (
        user_id="6",
        item_id="9",
        purchase_id="12",
        first_name="Corinne",
        last_name="Bennett",
        review="I love flying the Mutant. Such a great flight that can be had and can keep up with the wingsuiters too!",
        image_url="https://squirrel.ws/img/suits/gallery/mutation/gallery/7-Mutation-580x620@2x.jpg"
    )



    db.session.add(dashreview)
    db.session.add(second_demo)
    db.session.add(firstNikko)
    db.session.add(firstCrystal)
    db.session.add(secondNikko)
    db.session.add(firstAndy)
    db.session.add(firstChristian)
    db.session.add(firstJulie)
    db.session.add(thirdNikko)
    db.session.add(firstCorinne)
    db.session.add(three_demo)
    db.session.add(third_demo)
    db.session.add(secondJulie)
    db.session.add(secondAndy)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the items table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
