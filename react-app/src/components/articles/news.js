import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import NewsArticles from "./newsArticles";

import "./articles.css"
import IndividualAricle from "./individualArticle";

const NewsPage = () => {

    const {articleId} = useParams();
    console.log(articleId)

    useEffect(() => {
        document.body.classList.add('bg-white');

        return function cleanup() {
            document.body.classList.remove('bg-white');
        }
    }, [])

    return (
        <div className="Newspage-outer">
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
                        <div className="latest-news-column">
                            <div className="latest-news-header">
                                LATEST NEWS
                            </div>
                            {articleId === undefined ?
                            <div className="latest-news-cards">
                                <NewsArticles />
                            </div>
                            :
                            <div className="individual-article">
                                <IndividualAricle />
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsPage;
