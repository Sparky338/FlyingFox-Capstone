import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { errorRedirect } from "../utility/error-redirect";
import ReviewForm from "./ReviewForm";

const CreateReviewForm = () => {
    const currentUser = useSelector(state => state.session.user);
    const items = useSelector(state => state.items)
    const {itemId} = useParams()
    let data = useLocation()

    let error;
    if (items) error = errorRedirect(items, +itemId)
    if (error) return error

    const review = {
        user_id: data.state.user_id,
        item_id: data.state.item_id,
        purchase_id: data.state.purchase_id,
        first_name: currentUser.firstName,
        last_name: currentUser.lastName,
        review: '',
        image_url: ''
    };

    if (currentUser) {
        return (
            <ReviewForm storedReview={review} formType="Leave a review"/>
        );
    }
}

export default CreateReviewForm;
