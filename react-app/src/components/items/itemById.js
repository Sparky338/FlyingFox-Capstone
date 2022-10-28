import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ImageGallery from 'react-image-gallery';

import "./items.css"

const ItemById = () => {

    const { itemId } = useParams();
    const user = useSelector(state => state.session.user);
    const itemsObj = useSelector(state => state.items);
    const items = Object.values(itemsObj);

    if (!itemId) return null;
    if (!itemsObj) return null;

    const filteredItem = items.filter(item => item.id === +itemId)

    return (
        <div className="outer-item-div">
            {filteredItem.map((item) => {
                return (
                    <div className="item-by-id" key={item.id}>
                        <div className="item-outer">
                            <div className="display-carousel">
                                {/* <ImageGallery
                                    items=arrayofImages
                                    showPlayButton={false}
                                    showFullscreenButton={false}
                                    infinite={false}
                                /> */}
                            </div>
                            <div className="item-info-price">
                                <div className="name-price-review">
                                    <div className="item-name">{item.item_name}</div>
                                    <div className="price-review">
                                        <div className="price">${item.price}</div>
                                        <div className="review-link">Link to review here</div>
                                    </div>
                                </div>
                                <div className="description">{item.description}</div>
                            </div>
                        </div>
                        <div className="reviews-picture">
                            <div className="review-header">{item.item_name.toUpperCase()} REVIEWS</div>
                            <div className="review-container">
                                <div className="review">Review goes here.</div>
                                <div className="picture-and-name">
                                    <div className="picture"> image goes here</div>
                                    <div className="first-last-name"> - firstName LastName goes here </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemById;
