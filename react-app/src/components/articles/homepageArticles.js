import { Link } from "react-router-dom";

const HomepageArticles = () => {

    return (
        <div className="homepage-articles-container">
            <div className="article-date"></div>
            <div className="article-title"></div>
            <div className="article-picture-content">
                <div className="article-picture">
                    <img src={``} alt="article" />
                </div>
                <div className="article-content"></div>
            </div>
            <Link to="">Read More <i class="fa-solid fa-angles-right"></i></Link>
        </div>
    )
}

export default HomepageArticles;
