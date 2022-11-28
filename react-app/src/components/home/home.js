import "./home.css"
import ImageGallery from 'react-image-gallery';
import homepageBannerImages from "../../images/homepageBannerImages";

const HomePage = () => {

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
            <div className="components-outer">
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
                <div className="main-components">
                    <div className="separator"></div>
                    <div className="news-and-ads">
                        <div className="news-container-left">
                            <div className="news-heading title">NEWS</div>
                            <div className="news-articles"></div>
                        </div>
                        <div className="ads-container-right">
                            <div className="ads-heading">Ads go here</div>
                            <div className="ads-for-items"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
