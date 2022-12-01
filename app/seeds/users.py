from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        firstName='Demo', lastName='Lition', email='demo@aa.io', password='password')
    marnie = User(
        firstName='Marnie', lastName='Marlo', email='marnie@aa.io', password='password')
    bobbie = User(
        firstName='Bobbie', lastName='Bo', email='bobbie@aa.io', password='password')
    Crystal = User(
        firstName='Crystal', lastName='Hadel', email='crystal@aa.io', password='password')
    Christian = User(
        firstName='Christian', lastName='Warren', email='christian@aa.io', password='password')
    Corinne = User(
        firstName='Corinne', lastName='Bennett', email='corinne@aa.io', password='password')
    Julie = User(
        firstName='Julie', lastName='Lynn', email='julie@aa.io', password='password')
    Keri = User(
        firstName='Keri', lastName='Bell', email='keri@aa.io', password='password')
    Andy = User(
        firstName='Andy', lastName='Farrington', email='andy@aa.io', password='password')
    Nikko = User(
        firstName='Nikko', lastName='Mamallo', email='nikko@aa.io', password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(Crystal)
    db.session.add(Christian)
    db.session.add(Corinne)
    db.session.add(Julie)
    db.session.add(Keri)
    db.session.add(Andy)
    db.session.add(Nikko)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
