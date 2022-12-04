import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { errorRedirect } from "../utility/error-redirect"

const Categories = () => {
    const {categoryName} = useParams()
    const itemsObj = useSelector(state => state.items)
    const items = Object.values(itemsObj);

    useEffect(() => {
        const categoryItems = items.filter(item => item.category === categoryName)
    })

    let error;
    if (itemsObj) error = errorRedirect(itemsObj, categoryName)
    if (error) return error

    return (
        <div>

        </div>
    )
}

export default Categories
