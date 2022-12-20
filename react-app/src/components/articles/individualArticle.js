import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import "./articles.css"

const IndividualAricle = () => {

    const { articleId } = useParams();
    const articlesObj = useSelector(state => state.articles);
    const articles = Object.values(articlesObj);

    useEffect(() => {
        document.body.classList.add('bg-white');

        return function cleanup() {
            document.body.classList.remove('bg-white');
        }
    }, [])

    const filteredArticle = articles.filter(article => article.id === +articleId)

    return (
        <div className="individual-outer">
            <div className="banner-header-container">
                <div className="banner-header">
                    <Link to="/" className="banner-header-link">FlyingFox</Link>
                    <span className="spanright">{' > '}</span> News
                </div>
            </div>
            <div className="news-header">NEWS</div>
            <div className="news-body-container">
                <div className="news-body-outer">
                    <div className="news-search-archive-latest-container">
                        <div className="news-search-archive-column">
                            <div className="news-search">
                                {/* search placeholder */}
                            </div>
                            <div className="news-archive">
                                {/* NEWS ARCHIVE placeholder */}
                            </div>
                        </div>
                        <div className="individual-news-column">
                            {filteredArticle.map((article) => {
                                return (
                                    <div className="individual-article-display" key={article.id}>
                                        <div className="individual-article-outer">
                                            <div className="individual-article-date">{article.created_at} TEST</div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndividualAricle;
