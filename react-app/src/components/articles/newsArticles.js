import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NewsArticles = () => {
    const articlesObj = useSelector(state => state.articles);
    const reversedArticles = Object.entries(articlesObj).reverse();


    return (
        <div className="news-articles-outer">
            {reversedArticles.map((article, i) => {
                return (
                    <div className="news-articles-container" key={i}>
                            <div className="news-article-link-container">
                                <img src={article[1].image_url}
                                    alt="article"
                                    className="news-article-picture"
                                />
                                <div className="news-article-date">{article[1].created_at.split(" ")[0]}</div>
                                <div className="news-article-title">{article[1].article_title}</div>
                                <div className="news-article-content">{article[1].article}</div>
                            </div>
                        <Link to={`news/${article[0]}`} className="news-article-link"></Link>
                    </div>
                )
            })}
        </div>
    )
}

export default NewsArticles;
