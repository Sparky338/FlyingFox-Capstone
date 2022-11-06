import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ReviewForm from "./ReviewForm";

const CreateReviewForm = () => {
    const currentUser = useSelector(state => state.session.user);
    let data = useLocation()

    const review = {
        user_id: data.state.user_id,
        item_id: data.state.item_id,
        purchase_id: data.state.purchase_id,
        first_name: '',
        last_name: '',
        review: '',
        imageUrl: ''
    };

    if (currentUser) {
        return (
            <ReviewForm storedReview={review} formType="Leave a review"/>
        );
    }
}

export default CreateReviewForm;
