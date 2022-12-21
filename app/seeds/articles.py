from app.models import db, Article

def seed_articles():
    article_one = Article(
        article_title="1 Ipsum",
        article="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac tortor dignissim. At ultrices mi tempus imperdiet. Quisque sagittis purus sit amet volutpat consequat mauris. Lectus quam id leo in vitae turpis massa. Cras semper auctor neque vitae. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Amet dictum sit amet justo donec enim diam vulputate. In pellentesque massa placerat duis. Eu augue ut lectus arcu bibendum. Non tellus orci ac auctor augue mauris augue neque gravida. Varius vel pharetra vel turpis nunc eget lorem dolor. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Magna etiam tempor orci eu lobortis elementum. In hendrerit gravida rutrum quisque non tellus orci. Lectus sit amet est placerat in egestas erat imperdiet sed. Tempus iaculis urna id volutpat lacus. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Nibh sed pulvinar proin gravida hendrerit lectus a. Posuere ac ut consequat semper viverra nam. Quam quisque id diam vel quam. Laoreet id donec ultrices tincidunt arcu. Morbi leo urna molestie at elementum eu facilisis sed odio. Mauris sit amet massa vitae tortor. Tortor at risus viverra adipiscing at. Dictum fusce ut placerat orci. Cras sed felis eget velit aliquet sagittis. Neque convallis a cras semper auctor neque vitae tempus. Phasellus egestas tellus rutrum tellus pellentesque. Quam adipiscing vitae proin sagittis nisl rhoncus. Morbi tristique senectus et netus et malesuada. Aliquet nibh praesent tristique magna sit amet purus gravida. Et malesuada fames ac turpis egestas integer eget. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Quisque non tellus orci ac auctor augue mauris augue neque. In tellus integer feugiat scelerisque varius morbi enim nunc. Tellus id interdum velit laoreet id donec ultrices. Orci a scelerisque purus semper eget duis at tellus. Tempor orci dapibus ultrices in iaculis. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Vestibulum morbi blandit cursus risus at ultrices mi tempus. Velit egestas dui id ornare arcu odio. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Eget arcu dictum varius duis at consectetur lorem. Platea dictumst quisque sagittis purus sit. Malesuada fames ac turpis egestas sed tempus urna. Molestie a iaculis at erat pellentesque. Nec feugiat nisl pretium fusce id. Pharetra pharetra massa massa ultricies mi quis. Praesent semper feugiat nibh sed pulvinar proin. Aliquet porttitor lacus luctus accumsan. Sed sed risus pretium quam vulputate. Dictumst quisque sagittis purus sit amet volutpat. Et egestas quis ipsum suspendisse. Orci ac auctor augue mauris augue neque gravida. Ligula ullamcorper malesuada proin libero nunc consequat. Non consectetur a erat nam. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Tortor at auctor urna nunc id cursus. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Lacus laoreet non curabitur gravida arcu. In hendrerit gravida rutrum quisque non tellus.",
        image_url="https://www.fai.org/sites/default/files/sport/image/wingsuit_2.jpg"
    )
    article_two = Article(
        article_title="2 Lorem",
        article="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac tortor dignissim. At ultrices mi tempus imperdiet. Quisque sagittis purus sit amet volutpat consequat mauris. Lectus quam id leo in vitae turpis massa. Cras semper auctor neque vitae. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Amet dictum sit amet justo donec enim diam vulputate. In pellentesque massa placerat duis. Eu augue ut lectus arcu bibendum. Non tellus orci ac auctor augue mauris augue neque gravida. Varius vel pharetra vel turpis nunc eget lorem dolor. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Magna etiam tempor orci eu lobortis elementum. In hendrerit gravida rutrum quisque non tellus orci. Lectus sit amet est placerat in egestas erat imperdiet sed. Tempus iaculis urna id volutpat lacus. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Nibh sed pulvinar proin gravida hendrerit lectus a. Posuere ac ut consequat semper viverra nam. Quam quisque id diam vel quam. Laoreet id donec ultrices tincidunt arcu. Morbi leo urna molestie at elementum eu facilisis sed odio. Mauris sit amet massa vitae tortor. Tortor at risus viverra adipiscing at. Dictum fusce ut placerat orci. Cras sed felis eget velit aliquet sagittis. Neque convallis a cras semper auctor neque vitae tempus. Phasellus egestas tellus rutrum tellus pellentesque. Quam adipiscing vitae proin sagittis nisl rhoncus. Morbi tristique senectus et netus et malesuada. Aliquet nibh praesent tristique magna sit amet purus gravida. Et malesuada fames ac turpis egestas integer eget. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Quisque non tellus orci ac auctor augue mauris augue neque. In tellus integer feugiat scelerisque varius morbi enim nunc. Tellus id interdum velit laoreet id donec ultrices. Orci a scelerisque purus semper eget duis at tellus. Tempor orci dapibus ultrices in iaculis. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Vestibulum morbi blandit cursus risus at ultrices mi tempus. Velit egestas dui id ornare arcu odio. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Eget arcu dictum varius duis at consectetur lorem. Platea dictumst quisque sagittis purus sit. Malesuada fames ac turpis egestas sed tempus urna. Molestie a iaculis at erat pellentesque. Nec feugiat nisl pretium fusce id. Pharetra pharetra massa massa ultricies mi quis. Praesent semper feugiat nibh sed pulvinar proin. Aliquet porttitor lacus luctus accumsan. Sed sed risus pretium quam vulputate. Dictumst quisque sagittis purus sit amet volutpat. Et egestas quis ipsum suspendisse. Orci ac auctor augue mauris augue neque gravida. Ligula ullamcorper malesuada proin libero nunc consequat. Non consectetur a erat nam. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Tortor at auctor urna nunc id cursus. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Lacus laoreet non curabitur gravida arcu. In hendrerit gravida rutrum quisque non tellus.",
        image_url="https://skydivecalifornia.com/wp-content/uploads/what-is-wingsuiting.jpeg"
    )
    article_three = Article(
        article_title="3 Dolor",
        article="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac tortor dignissim. At ultrices mi tempus imperdiet. Quisque sagittis purus sit amet volutpat consequat mauris. Lectus quam id leo in vitae turpis massa. Cras semper auctor neque vitae. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Amet dictum sit amet justo donec enim diam vulputate. In pellentesque massa placerat duis. Eu augue ut lectus arcu bibendum. Non tellus orci ac auctor augue mauris augue neque gravida. Varius vel pharetra vel turpis nunc eget lorem dolor. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Magna etiam tempor orci eu lobortis elementum. In hendrerit gravida rutrum quisque non tellus orci. Lectus sit amet est placerat in egestas erat imperdiet sed. Tempus iaculis urna id volutpat lacus. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Nibh sed pulvinar proin gravida hendrerit lectus a. Posuere ac ut consequat semper viverra nam. Quam quisque id diam vel quam. Laoreet id donec ultrices tincidunt arcu. Morbi leo urna molestie at elementum eu facilisis sed odio. Mauris sit amet massa vitae tortor. Tortor at risus viverra adipiscing at. Dictum fusce ut placerat orci. Cras sed felis eget velit aliquet sagittis. Neque convallis a cras semper auctor neque vitae tempus. Phasellus egestas tellus rutrum tellus pellentesque. Quam adipiscing vitae proin sagittis nisl rhoncus. Morbi tristique senectus et netus et malesuada. Aliquet nibh praesent tristique magna sit amet purus gravida. Et malesuada fames ac turpis egestas integer eget. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Quisque non tellus orci ac auctor augue mauris augue neque. In tellus integer feugiat scelerisque varius morbi enim nunc. Tellus id interdum velit laoreet id donec ultrices. Orci a scelerisque purus semper eget duis at tellus. Tempor orci dapibus ultrices in iaculis. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Vestibulum morbi blandit cursus risus at ultrices mi tempus. Velit egestas dui id ornare arcu odio. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Eget arcu dictum varius duis at consectetur lorem. Platea dictumst quisque sagittis purus sit. Malesuada fames ac turpis egestas sed tempus urna. Molestie a iaculis at erat pellentesque. Nec feugiat nisl pretium fusce id. Pharetra pharetra massa massa ultricies mi quis. Praesent semper feugiat nibh sed pulvinar proin. Aliquet porttitor lacus luctus accumsan. Sed sed risus pretium quam vulputate. Dictumst quisque sagittis purus sit amet volutpat. Et egestas quis ipsum suspendisse. Orci ac auctor augue mauris augue neque gravida. Ligula ullamcorper malesuada proin libero nunc consequat. Non consectetur a erat nam. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Tortor at auctor urna nunc id cursus. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Lacus laoreet non curabitur gravida arcu. In hendrerit gravida rutrum quisque non tellus.",
        image_url="https://ychef.files.bbci.co.uk/976x549/p04cdvw6.jpg"
    )
    article_four = Article(
        article_title="4 Lorem Ipsum",
        article="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac tortor dignissim. At ultrices mi tempus imperdiet. Quisque sagittis purus sit amet volutpat consequat mauris. Lectus quam id leo in vitae turpis massa. Cras semper auctor neque vitae. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Amet dictum sit amet justo donec enim diam vulputate. In pellentesque massa placerat duis. Eu augue ut lectus arcu bibendum. Non tellus orci ac auctor augue mauris augue neque gravida. Varius vel pharetra vel turpis nunc eget lorem dolor. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Magna etiam tempor orci eu lobortis elementum. In hendrerit gravida rutrum quisque non tellus orci. Lectus sit amet est placerat in egestas erat imperdiet sed. Tempus iaculis urna id volutpat lacus. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Nibh sed pulvinar proin gravida hendrerit lectus a. Posuere ac ut consequat semper viverra nam. Quam quisque id diam vel quam. Laoreet id donec ultrices tincidunt arcu. Morbi leo urna molestie at elementum eu facilisis sed odio. Mauris sit amet massa vitae tortor. Tortor at risus viverra adipiscing at. Dictum fusce ut placerat orci. Cras sed felis eget velit aliquet sagittis. Neque convallis a cras semper auctor neque vitae tempus. Phasellus egestas tellus rutrum tellus pellentesque. Quam adipiscing vitae proin sagittis nisl rhoncus. Morbi tristique senectus et netus et malesuada. Aliquet nibh praesent tristique magna sit amet purus gravida. Et malesuada fames ac turpis egestas integer eget. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Quisque non tellus orci ac auctor augue mauris augue neque. In tellus integer feugiat scelerisque varius morbi enim nunc. Tellus id interdum velit laoreet id donec ultrices. Orci a scelerisque purus semper eget duis at tellus. Tempor orci dapibus ultrices in iaculis. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Vestibulum morbi blandit cursus risus at ultrices mi tempus. Velit egestas dui id ornare arcu odio. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Eget arcu dictum varius duis at consectetur lorem. Platea dictumst quisque sagittis purus sit. Malesuada fames ac turpis egestas sed tempus urna. Molestie a iaculis at erat pellentesque. Nec feugiat nisl pretium fusce id. Pharetra pharetra massa massa ultricies mi quis. Praesent semper feugiat nibh sed pulvinar proin. Aliquet porttitor lacus luctus accumsan. Sed sed risus pretium quam vulputate. Dictumst quisque sagittis purus sit amet volutpat. Et egestas quis ipsum suspendisse. Orci ac auctor augue mauris augue neque gravida. Ligula ullamcorper malesuada proin libero nunc consequat. Non consectetur a erat nam. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Tortor at auctor urna nunc id cursus. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Lacus laoreet non curabitur gravida arcu. In hendrerit gravida rutrum quisque non tellus.",
        image_url="http://wickedwingsuits.com/wp-content/uploads/squirrel-wingsuit-rent-a-suit-7.jpg"
    )
    article_five = Article(
        article_title="Flying Fox Pilots  Sweep 2022 World Championships",
        article="""Our most heartfelt congratulations to Chris Geiler, new World Champion. He was joined on the podium by Alexey Galda (Silver) and Luke Rogers (Bronze). Joe Ridler and Jason Dodunski rounded out the top 5. Team USA took Gold in the Nations category. All 5 top pilots flew SQRL. 15 out of the top 16 pilots flew SQRL. And every pilot on the Nations podium flew SQRL.
        This was the first year that the FAI awarded medals for individual tasks, which meant that Chris, Alexey, and Luke went home with a lot of metal hanging from their necks. Chris took home five FAI medals: Overall Gold, Nations Gold (USA), and Silver medals in Distance, Time, and Speed. Luke and Alexey also picked up Gold medals for Distance and Time, respectively, in addition to their overall podium and nations category medals.
        No FAI world event is free of drama, and 2022 was no exception. After Alexey Galda revealed his 3D printed gripper extensions shortly before the event, it set off a scramble amongst a few pilots to replicate the addition to their suits in order to compete in time and distance. The gripper extensions reduced sink rate enough to make a significant improvement to time and distance scores, while reducing the speed score – an obvious tradeoff for the overall title. An informal poll at the event indicated that rigid wing extensions are not favored by competitors and may be banned or restricted in future. We’re excited to see the level of flying increasing so significantly as well as the innovations being explored by pilots in our sport.
        A huge thanks to everyone who gave their time and energy to participate in this highest level event, and to all of the pilots who flew SQRL. It is a tremendous honor for us to be able to support virtually all of the world’s top pilots.
        Full results at: http://results.worldskydiving.org/FrontEnd/ResultSet/318""",
        image_url="https://squirrel.ws/img/news_photos/184/gallery/4-2022-World-Championships-1744x1060.jpg",
        created_at = "10/19/2022"
    )
    db.session.add(article_one)
    db.session.add(article_two)
    db.session.add(article_three)
    db.session.add(article_four)
    db.session.add(article_five)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the items table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_articles():
    db.session.execute('TRUNCATE articles RESTART IDENTITY CASCADE;')
    db.session.commit()
