from app.models import db, Article

def seed_articles():
    article_sub_five = Article(
        article_title="Chris & Luke Win 2021 Australian Nationals",
        article="""Flying Fox Team Pilot, Chris Byrnes, reports: “Due to covid travel restrictions, the first Virtual Australian Skydiving Nationals were held in 2021. Competitors competed all around the country, and results were judged remotely. Aleksandr Kunin from Skyderby was an awesome help in allowing us to wind correct the wingsuit performance scores and collate the scores into a National leaderboard. I flew the 2020 CR+ which is an absolute weapon! So much power is accessible without being too physically demanding. I really noticed this during the time rounds. I was able to get two 90 second plus runs. I still only have 10 jumps on the suit, looking forward to dialing it in more. I had a tight battle with my Australian wingsuit team mate and fellow Flying Fox team pilot, Luke Rogers. However I came away with Gold for the 3rd time in a row!”

        Congrats Chris and Luke, we love you guys!

        Eight out of the top ten pilots flew Flying Fox. Full results: https://skyderby.ru/competition_series/1""",
        image_url="https://squirrel.ws/img/news_photos/168/gallery/1-chris-and-luke-win-2021-australian-nations-872x530.jpg",
        created_at = "03/22/2021"
    )
    article_sub_four = Article(
        article_title="Flying Fox Pilots Sweep 2021 Danish Champs",
        article="""We’d like to send a hearty congratulations to Dennis, Ulf, and Kristian, who shared the podium at their 2021 Nationals, all flying the CR+. Ulf, multiple Danish champion, now has a bit of silver to add to his very impressive gold collection. And Dennis, we’re sure, is thrilled to be on top this time. Cheers from all of us here, and a sincere thanks to the Danish performance community for the many years of support.

        Dennis Ohlsen - CR+
        Ulf Munkedal - CR+
        Kristian Sommer - CR+
        https://skyderby.ru/events/239""",
        image_url="https://squirrel.ws/img/news_photos/169/gallery/2021-sqrl-pilots-sweet-danish-champs-872x530.jpg",
        created_at = "07/12/2021"
    )
    article_sub_three = Article(
        article_title="Canadian Nationals",
        article="""We’d like to send a sincere congratulations to Nichloas, Benoit, and John who shared the podium at the 2021 Canadian Nats, all flying the CR+. Nicholas swept all three events while setting a new Canadian time record. Congrats from all of us at Flying Fox!
        Nicholas Yu
        Benoit Sauriol
        John Swallow
        (All flying CR+)

        https://www.intimescoring.com/Results/EventResults?dbid=22&mid=26&smid=0&mdcid=127&dseid=0
        https://www.skyderby.ru/events/248""",
        image_url="https://squirrel.ws/img/news_photos/170/gallery/2021-canadian-nationals-872x530.jpg",
        created_at = "07/29/2021"
    )
    article_sub_two = Article(
        article_title="Chris Geiler & Team USA Win World Championships!",
        article="""The 2021 Wingsuit World Champs event has come to an end with Chris Geiler in first overall flying his Flying Fox CR+. Team USA, all flying the Flying Fox CR+, took gold in the Nations category.
        Chris held a commanding lead from the beginning of the competition, finishing more than 10 points ahead of second place for a decisive victory. Alexey Galda (Flying Fox CR+) joined Chris on the podium, and Joe Ridler (Flying Fox CR+) took 5th.
        While many of us were relieved that the Worlds event finally happened after a year of delays and months of uncertainty, it’s a bittersweet finale with some of the strongest wingsuit pilots in the world absent due to Covid complications: the Australian team was unable to attend which meant that Flying Fox Team pilots Chris Byrnes and Luke Rogers could not fight for their rightful place in the top 5 overall, and Espen Fadness chose to focus on acrobatics this year – spoiler alert, he almost won! (Espen, Amber and their team won Silver flying their Flying Fox Freaks, just a few points behind gold).
        The mission to Siberia was costly and complicated for all who traveled far to be there. All the Flying Fox Team sends a heartfelt and sincere congratulations to the pilots who attended, representing their countries in this highest level event.""",
        image_url="https://squirrel.ws/img/news_photos/172/gallery/1-2021-world-comp-872x530.jpg",
        created_at = "08/23/2021"
    )
    article_sub_one = Article(
        article_title="Fabio, Stefan, Daniel, win German Championships Open",
        article="""Congrats to Fabio Neujahr, the new 2021 German Champion. He was joined on the podium by Stefan Gilbert, and Daniel Ossio, who took 2nd and 3rd overall. All were flying the CR+. Fabio writes, “I won the open class with my CR+ 2020 version. Stefan Gilbert scored second with his CR+ 2021 Version. It was only my 3rd wingsuit competition, and the first one I’ve done in a performance suit after winning the Advanced class at wings over Marl in 2019 and the TonySuit performance cup in 2020.” Awesome work Fabio, and thanks for your support! Full results can be seen here. https://skyderby.ru/events/298
        Photo attached is of the German National ranking, credit: @t.virus47""",
        image_url="https://squirrel.ws/img/news_photos/173/gallery/1-german-nationals-872x530.jpg",
        created_at = "09/22/2021"
    )
    article_one = Article(
        article_title="Flying Fox Sweeps Podiums at WSPG & Italy Nationals",
        article="""Congrats to Dennis Ohlsen who took first overall at the Wingsuit Performance Games. Luca Sala and Alessandro joined him on the podium taking 2nd and 3rd respectively. Alessandro reports that the vibe was awesome and a fun time was had by all. Pilots from Denmark, Norway, Finland, and Italy were in attendance. Thanks to Skydive Costa d'Argento for hosting!
        Also, our congratulations to Luca Sala who is the new Italian Champion. It was a race for second place between Alessandro Urzi and Marco Pistolesi at what was by all accounts another wonderful event at a great location. If you’re into wingsuit performance, don’t miss these events in 2022!
        Cheers from all the Flying Fox Team!""",
        image_url="https://squirrel.ws/img/news_photos/174/gallery/1-sqrl-sweeps-podiums-at-wspg-and-italy-nationals-872x530.jpg",
        created_at = "09/27/2021"
    )
    article_two = Article(
        article_title="US Nationals Sweep, New World Records",
        article="""Congrats to our friend Alexey Galda who took gold, and was joined on the podium by Chris Geiler and Joe Ridler. All top five pilots flew Flying Fox. Two new world records were set during the event: the new speed record was set by Chris Geiler, and time was set by Alexey Galda. It’s an honor for us that so many of the world’s top pilots continue to choose Flying Fox. Thank you for your support! Full results here: https://skyderby.ru/events/312
        Cheers, from all the Team.""",
        image_url="https://squirrel.ws/img/news_photos/175/gallery/1-2021-us-nationals-sweep-872x530.jpg",
        created_at = "11/01/2021"
    )
    article_three = Article(
        article_title="Flying Fox Pilots Sweep Podium At 2022 Swedish Open",
        article="""Congratulations to Flavien Mazzon for taking the top spot at the Swedish Nationals for wingsuit performance. It was a hard fought battle between Flavien and Dennis Ohlsen, who ultimately would take the second place spot, followed by Ola Johansson rounding out the podium with third (all three in the CR+).""",
        image_url="https://squirrel.ws/img/news_photos/177/gallery/1-swedish-open-2022.jpg",
        created_at = "09/14/2022"
    )
    article_four = Article(
        article_title="Flying Fox Pilots Sweep US Nats Podium Again",
        article="""2022 marks the third year in a row that Flying Fox pilots have swept the podium. Chris Geiler, Alexey Galda, and Joe Ridler all flew the CR+. Alexey (Silver) and Chris (Gold) battled it out in the time and distance categories but Chris ultimately took first overall. Joe Ridler, who was only able to make a handful of training jumps on his new suit before the event, performed exceptionally to take Bronze. All of the top 5 pilots flew Flying Fox. It’s an honor that so many of the world’s best pilots continue to choose Flying Fox, year after year. Thank you for your trust and support!
        Full Results Here: https://www.skyderby.ru/events/372""",
        image_url="https://squirrel.ws/img/news_photos/178/gallery/1-2022-us-nationals-1744x1060.jpg",
        created_at = "09/30/2022"
    )
    article_five = Article(
        article_title="Flying Fox Pilots Sweep 2022 World Championships",
        article="""Our most heartfelt congratulations to Chris Geiler, new World Champion. He was joined on the podium by Alexey Galda (Silver) and Luke Rogers (Bronze). Joe Ridler and Jason Dodunski rounded out the top 5. Team USA took Gold in the Nations category. All 5 top pilots flew Flying Fox. 15 out of the top 16 pilots flew Flying Fox. And every pilot on the Nations podium flew Flying Fox.
        This was the first year that the FAI awarded medals for individual tasks, which meant that Chris, Alexey, and Luke went home with a lot of metal hanging from their necks. Chris took home five FAI medals: Overall Gold, Nations Gold (USA), and Silver medals in Distance, Time, and Speed. Luke and Alexey also picked up Gold medals for Distance and Time, respectively, in addition to their overall podium and nations category medals.
        No FAI world event is free of drama, and 2022 was no exception. After Alexey Galda revealed his 3D printed gripper extensions shortly before the event, it set off a scramble amongst a few pilots to replicate the addition to their suits in order to compete in time and distance. The gripper extensions reduced sink rate enough to make a significant improvement to time and distance scores, while reducing the speed score – an obvious tradeoff for the overall title. An informal poll at the event indicated that rigid wing extensions are not favored by competitors and may be banned or restricted in future. We’re excited to see the level of flying increasing so significantly as well as the innovations being explored by pilots in our sport.
        A huge thanks to everyone who gave their time and energy to participate in this highest level event, and to all of the pilots who flew Flying Fox. It is a tremendous honor for us to be able to support virtually all of the world’s top pilots.
        Full results at: http://results.worldskydiving.org/FrontEnd/ResultSet/318""",
        image_url="https://squirrel.ws/img/news_photos/184/gallery/4-2022-World-Championships-1744x1060.jpg",
        created_at = "10/19/2022"
    )
    db.session.add(article_sub_five)
    db.session.add(article_sub_four)
    db.session.add(article_sub_three)
    db.session.add(article_sub_two)
    db.session.add(article_sub_one)
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
