import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import flyingFoxLogo from '../../images/Flying_Fox_Logo.png'

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
                    <span className="spanright">{' > '}</span>
                    <Link to="/news" className="banner-header-link">News</Link>
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
                                            <div className="individual-article-date">{article.created_at.split(" ")[0]}</div>
                                            <div className="individual-article-title">{article.article_title}</div>
                                            <div className="individual-article-image">
                                                <img src={`${article.image_url}`} alt="article" className="individual-article-img" />
                                            </div>
                                            <div className="individual-article-article">{article.article}</div>
                                        </div>
                                        <div className="separator-container">
                                            <img src={flyingFoxLogo} alt="Flying Fox Logo" className='logo-separator' />
                                            <div className="separator"></div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="previous-next-article-container">
                                {!articlesObj[articleId - 1] ?
                                <div className="No-previous-article"></div>
                                :
                                <div className="previous-article-container">
                                    <Link to={`/news/${articleId - 1}`} className="previous-article-link">
                                        <i class="fa-solid fa-angles-left"></i> Previous Article
                                    </Link>
                                    <img src={`${articlesObj[articleId - 1].image_url}`} alt="Previous Article" className="previous-article-image" />
                                    <div className="previous-article-date">{articlesObj[articleId - 1].created_at.split(" ")[0]}</div>
                                    <div className="previous-article-title">{articlesObj[articleId - 1].article_title}</div>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndividualAricle;
