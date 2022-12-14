import { Link } from "react-router-dom";

const HomepageArticles = () => {

    return (
        <div className="homepage-articles-container">
            <div className="article-date">12/14/2022</div>
            <div className="article-title-container">
                <Link to="/news/" className="article-title">Here's an article title</Link>
            </div>
            <div className="article-picture-content">
                <Link to="/news/" className="article-picture-container">
                    <img src={`https://squirrel.ws/img/news_photos/178/2022-us-nationals-556x556.jpg`}
                        alt="article"
                        className="article-picture"
                    />
                </Link>
                <div className="article-content">have a bit of content that eventually cuts off</div>
            </div>
            <div className="more-articles-container">
                <Link to="/news" className="more-articles">Read More <i class="fa-solid fa-angles-right"></i></Link>
            </div>
        </div>
    )
}

export default HomepageArticles;
