// import { useSelector } from "react-redux"; // JS ONLY- does not convert to TS
import { useAppSelector } from "../utility/hooks";// Must be used in TS in place of useSelector
import { Link } from "react-router-dom";

const NewsArticles = () => { //HOC for news page
    const articlesObj = useAppSelector(state => state.articles);
    const reversedArticles = Object.entries(articlesObj).reverse();


    return (
        <div className="news-articles-outer">
            {reversedArticles.map((article: any, i) => {
                return (
                    <div className="news-articles-container" key={i}>
                        <img src={article[1].image_url}
                            alt="article"
                            className="news-article-picture"
                        />
                        <div className="news-article-date">{article[1].created_at}</div>
                        <div className="news-article-title">{article[1].article_title}</div>
                        <div className="news-article-content">{article[1].article}</div>

                        <div className="news-article-link-container">
                            <Link to={`news/${article[0]}`} className="news-article-link">
                                <span className="news-article-link-text login-signup-button">READ ARTICLE</span>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default NewsArticles;
