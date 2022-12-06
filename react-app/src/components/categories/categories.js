import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { categoryErrorRedirect } from "../utility/error-redirect"
import "./categories.css"

const Categories = () => {
    const { categoryName } = useParams();
    const itemsObj = useSelector(state => state.items);
    const items = Object.values(itemsObj);

    const [categoryItems, setCategoryItems] = useState([]);

    const formatting_options = {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    };
    const dollarFormatter = new Intl.NumberFormat("en-US", formatting_options);

    useEffect(() => {
        const categoryItems = items.filter(item => item.category.toLowerCase() === categoryName)

        setCategoryItems(categoryItems);
    }, [categoryName])

    if (!itemsObj) return null;
    if (items.length <= 0) return null;
    if (!categoryName) return null;
    if (!categoryItems) return null;

    let error;
    if (categoryItems) error = categoryErrorRedirect(categoryItems, categoryName)
    if (error) return error

    return (
        <div className="category-container">
            <div className="category-cards">
                {categoryItems.map((item, i) => {
                    return (
                        <div className="category-item-card-container" key={i}>
                            <Link to={`/items/${item.id}`} className="category-item-link">
                                <div className="inner-category-item-card-container">
                                    <div className="category-item-text">
                                        <div className="category-item-name"> {item.item_name} </div>
                                        <div className="category-item-price"> {dollarFormatter.format(item.price)} </div>
                                    </div>
                                    <img src={item.images[0].image_url} className="category-item-image" alt={`${item.item_name}`} />
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Categories
