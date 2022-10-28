import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./items.css"

const ItemById = () => {

    const {itemId} = useParams();
    const user = useSelector(state => state.session.user);
    const itemsObj = useSelector(state => state.items);
    const items = Object.values(itemsObj);

    if (!itemId) return null;
    if (!itemsObj) return null;

    const filteredItem = items.filter(item => item.id === +itemId)

    return (
        <div>

        </div>
    )
}

export default ItemById;
