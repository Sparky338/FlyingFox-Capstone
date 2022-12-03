import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { errorRedirect } from "../utility/error-redirect"

const Categories = () => {
    const {category} = useParams()
    const itemsObj = useSelector(state => state.items)
    const items = Object.values(itemsObj);

    useEffect(() => {
        const categoryItems = items.filter(item => item.category === category)
    })

    let error;
    if (itemsObj) error = errorRedirect(itemsObj, category)
    if (error) return error

    return (
        <div>

        </div>
    )
}

export default Categories
