import { useEffect } from "react";
// import { useSelector } from "react-redux"; // JS ONLY- does not convert to TS
import { useAppSelector } from '../utility/hooks'; // Must be used in TS in place of useSelector
import { Link, useParams } from "react-router-dom";
import flyingFoxLogo from '../../images/Flying_Fox_Logo.png'

import "./articles.css"

const IndividualAricle = () => {

    const { articleId } = useParams();
    const articlesObj = useAppSelector(state => state.articles);
    const articles: any = Object.values(articlesObj);

    useEffect(() => {
        document.body.classList.add('bg-white');

        return function cleanup() {
            document.body.classList.remove('bg-white');
        }
    }, [])

    const filteredArticle: any = articles.filter(
        (article: { id: number; }) => article.id === +articleId)

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
                            {filteredArticle.map((article: any) => {
                                return (
                                    <div className="individual-article-display" key={article.id}>
                                        <div className="individual-article-outer">
                                            <div className="individual-article-date">{article.created_at}</div>
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
                                {!articlesObj[+articleId - 1] ?
                                    <div className="No-previous-article"></div>
                                    :
                                    <div className="previous-article-link-container">
                                        <Link to={`/news/${+articleId - 1}`} className="previous-article-link">
                                            <i className="fa-solid fa-angles-left"></i> Previous Article
                                        </Link>
                                        <div className="previous-article-container">
                                            <div className="previous-article-image-container">
                                                <img src={`${articlesObj[+articleId - 1].image_url}`} alt="Previous Article" className="previous-article-image" />
                                            </div>
                                            <div className="previous-article-date">{articlesObj[+articleId - 1].created_at}</div>
                                            <div className="previous-article-title">{articlesObj[+articleId - 1].article_title}</div>

                                            <div className="previous-article-link-overlay-container">
                                                <Link to={`/news/${+articleId - 1}`} className="previous-article-link-overlay">
                                                    <span className="news-article-link-text login-signup-button">READ ARTICLE</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {!articlesObj[+articleId + 1] ?
                                    <div className="No-next-article"></div>
                                    :
                                    <div className="next-article-link-container">
                                        <Link to={`/news/${+articleId + 1}`} className="next-article-link">
                                            Next Article <i className="fa-solid fa-angles-right"></i>
                                        </Link>
                                        <div className="next-article-container">
                                            <div className="next-article-image-container">
                                                <img src={`${articlesObj[+articleId + 1].image_url}`} alt="next Article" className="next-article-image" />
                                            </div>
                                            <div className="next-article-date">{articlesObj[+articleId + 1].created_at}</div>
                                            <div className="next-article-title">{articlesObj[+articleId + 1].article_title}</div>

                                            <div className="next-article-link-overlay-container">
                                                <Link to={`/news/${+articleId + 1}`} className="next-article-link-overlay">
                                                    <span className="news-article-link-text login-signup-button">READ ARTICLE</span>
                                                </Link>
                                            </div>
                                        </div>
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
