import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomepageArticles = () => {
    const articlesObj = useSelector(state => state.articles);
    const reversedArticles = Object.entries(articlesObj).reverse()


    return (
        <div className="homepage-articles-outer">
            {reversedArticles.slice(0,4).map((article, i) => {
                return (
                    <div className="homepage-articles-container" key={i}>
                        <div className="article-date">{article[1].created_at.split(" ")[0]}</div>
                        <div className="article-title-container">
                            <Link to={`/news/${article[0]}`} className="article-title">{article[1].article_title}</Link>
                        </div>
                        <div className="article-picture-content">
                            <Link to={`/news/${article[0]}`} className="article-picture-container">
                                <img src={article[1].image_url}
                                    alt="article"
                                    className="article-picture"
                                />
                            </Link>
                            <div className="article-content">{article[1].article}</div>
                        </div>
                        <div className="full-articles-container">
                            <Link to={`/news/${article[0]}`} className="full-articles">Read More <i class="fa-solid fa-angles-right"></i></Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default HomepageArticles;
