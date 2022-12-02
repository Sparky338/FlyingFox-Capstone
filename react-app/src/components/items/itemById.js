import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import ImageGallery from 'react-image-gallery';

import "./items.css"
import { getItemReviews } from "../../store/reviews";
import { errorRedirect } from "../utility/error-redirect";

const ItemById = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { itemId } = useParams();
    const itemsObj = useSelector(state => state.items);
    const reviewsObj = useSelector(state => state.reviews);
    const items = Object.values(itemsObj);
    const reviews = Object.values(reviewsObj);
    const itemQty = JSON.parse(localStorage.getItem('itemQty'));

    const formatting_options = {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    };
    const dollarFormatter = new Intl.NumberFormat("en-US", formatting_options);

    useEffect(() => {
        dispatch(getItemReviews(+itemId));
    }, [dispatch, itemId])

    if (!itemId) return null;
    if (!itemsObj) return null;
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', "{}");
    }
    if (!localStorage.getItem('itemQty')) {
        localStorage.setItem('itemQty', "{}");
    }

    let error;
    if (itemsObj) error = errorRedirect(itemsObj, +itemId)
    if (error) return error

    const filteredItem = items.filter(item => item.id === +itemId)
    const sortedFilteredReviews = reviews.filter(review => review.item_id === +itemId).sort((a, b) => b.id - a.id)

    const cart = JSON.parse(localStorage.getItem('cart'))

    const addToCart = () => {
        let item = Object.keys(itemQty).find(itemId => +itemId === filteredItem[0].id)

        if (item) {
            itemQty[itemId]++;
        } else {
            cart[itemId] = filteredItem;
            itemQty[itemId] = 1
        }
        localStorage.setItem('cart', JSON.stringify(cart))
        localStorage.setItem('itemQty', JSON.stringify(itemQty))
        history.push("/cart")
    }

    const imagesCarousel = (item) => {
        let images = item.images.map(image => {
            return {
                original: image.image_url,
                thumbnail: image.image_url
            }
        });
        return images
    }

    return (
        <div className="outer-item-div">
            {filteredItem.map((item) => {
                return (
                    <div className="item-by-id" key={item.id}>
                        <div className="item-outer">
                            <div className="item-display-carousel">
                                <ImageGallery
                                    additionalClass="item-image-gallery"
                                    items={imagesCarousel(item)}
                                    showPlayButton={false}
                                    showFullscreenButton={false}
                                    infinite={false}
                                />
                            </div>
                            <div className="item-info-price">
                                <div className="name-price-review">
                                    <div className="item-name">{item.item_name}</div>
                                    <div className="price-review">
                                        <div className="price">{dollarFormatter.format(item.price)}</div>
                                        <div className="review-link">{/*Link to review here*/}</div>
                                    </div>
                                </div>
                                <div className="description">{item.description}</div>
                                <button className="add-to-cart main-button" onClick={addToCart}>ADD TO CART</button>
                            </div>
                        </div>
                        <div className="reviews-picture">
                            <div className="horizontal-line"></div>
                            <div className="review-header-container">
                                <div className="review-header">{item.item_name.toUpperCase()} REVIEWS</div>
                            </div>
                            {sortedFilteredReviews.length === 0 ?
                                <div className="no-reviews">No reviews yet!</div> :
                                sortedFilteredReviews.map((review, i) => {
                                    return (
                                        <div className="review-container" key={i}>
                                            <div className="review">{review.review}</div>
                                            <div className="picture-and-name">
                                                {!review.image_url ?
                                                    "" :
                                                    <img className="picture" src={`${review.image_url}`} alt="review" />
                                                }
                                                <div className="first-last-name"> -{review.first_name} {review.last_name} </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemById;
