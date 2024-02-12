import ImageGallery from 'react-image-gallery';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import homepageBannerImages from "../../images/homepageBannerImages";
import flyingFoxLogo from '../../images/Flying_Fox_Logo.png'
import "./home.css"
import HomepageArticles from '../articles/homepageArticles';

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
                        <img src={flyingFoxLogo} alt="Flying Fox Logo" className='logo-separator' />
                        <div className="separator"></div>
                    </div>
                    <div className="news-and-ads">
                        <div className="news-container-left">
                            <div className="news-heading title">NEWS</div>
                            <div className="news-articles">
                                <HomepageArticles />
                            </div>
                        </div>
                        <div className="ads-container-right">
                            <div className="ads-heading title">FEATURED PRODUCTS</div>
                            <div className="ads-for-items">
                                <div className="ad-container">
                                    <Link to="/items/12" className="ad-item-link" >
                                        <div className="ad-item-name">{items[12]?.item_name}</div>
                                        <img src={items[12]?.images[3].image_url} alt={`${items[12]?.item_name}`} className="ad-image" />
                                    </Link>
                                </div>
                                <div className="ad-container">
                                    <Link to="/items/3" className="ad-item-link" >
                                        <div className="ad-item-name">{items[3]?.item_name}</div>
                                        <img src={items[3]?.images[3].image_url} alt={`${items[3]?.item_name}`} className="ad-image" />
                                    </Link>
                                </div>
                                <div className="ad-container">
                                    <Link to="/items/10" className="ad-item-link" >
                                        <div className="ad-item-name">{items[10]?.item_name}</div>
                                        <img src={items[10]?.images[2].image_url} alt={`${items[10]?.item_name}`} className="ad-image" />
                                    </Link>
                                </div>
                                <div className="ad-container">
                                    <Link to="/items/8" className="ad-item-link" >
                                        <div className="ad-item-name">{items[8]?.item_name}</div>
                                        <img src={items[8]?.images[1].image_url} alt={`${items[8]?.item_name}`} className="ad-image" />
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
