import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./articles.css"

const NewsPage = () => {

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
                    <Link to="/" className="banner-header-link">FlyingFox</Link> <span className="spanright">{'>'}</span> News
                </div>
            </div>

        </div>
    )
}

export default NewsPage;
