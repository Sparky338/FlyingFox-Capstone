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
                                    showThumbnails={false}
                                    autoPlay={true}
                                    slideInterval={5000}
                                /> */}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemById;
