import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { errorRedirect } from "../utility/error-redirect"

const Categories = () => {
    const {category} = useParams()
    const items = useSelector(state => state.items)

    let error;
    if (items) error = errorRedirect(items, category)
    if (error) return error

    return (
        <div>

        </div>
    )
}

export default Categories
