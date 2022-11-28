import "./home.css"
import ImageGallery from 'react-image-gallery';
import homepageBannerImages from "../../images/homepageBannerImages";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = () => {
    const items = useSelector(state => state.items)

    const homeImagesCarousel = () => {
        let images = homepageBannerImages.map(image => {
            return {
                original: image,
                thumbnail: image
            }
        });
        return images
    }

    return (
        <div className="Home-outer">
            <div className="display-carousel">
                <ImageGallery
                    additionalClass="home-image-gallery"
                    items={homeImagesCarousel()}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    showThumbnails={false}
                    autoPlay={true}
                    slideInterval={5000}
                />
            </div>
            <div className="components-outer">
                <div className="main-components">
                    <div className="separator-container">
                        <div className="separator"></div>
                    </div>
                    <div className="news-and-ads">
                        <div className="news-container-left">
                            <div className="news-heading title">NEWS</div>
                            <div className="news-articles"></div>
                        </div>
                        <div className="ads-container-right">
                            <div className="ads-heading">Featured products</div>
                            <div className="ads-for-items">
                                <div className="ad-container">
                                    <Link to="/items/3">
                                        <img src={items[3]?.images[3].image_url} className="ad-image" />
                                        <div className="ad-item-name">{items[3]?.item_name}</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
