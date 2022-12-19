import { useEffect } from "react";
import { Link } from "react-router-dom";

const NewsPage = () => {

    useEffect(() => {
        document.body.classList.add('bg-white');

        return function cleanup() {
            document.body.classList.remove('bg-white');
        }
    }, [])

    return (
        <div className="Newspage-outer">
            <div className="banner-header">
            <Link to="/">FlyingFox</Link> {'>'} News
            </div>

        </div>
    )
}

export default NewsPage;
