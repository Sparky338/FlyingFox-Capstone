import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./articles.css"

const IndividualAricle = () => {

    useEffect(() => {
        document.body.classList.add('bg-white');

        return function cleanup() {
            document.body.classList.remove('bg-white');
        }
    }, [])

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
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndividualAricle;
