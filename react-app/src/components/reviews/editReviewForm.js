import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReviewForm from "./ReviewForm";

const EditReviewForm = () => {
    const {reviewId} = useParams();
    const currentUser = useSelector(state => state.session.user);
    const reviewsState = useSelector(state => state.reviews);

    if (!reviewId) return null;

    const reviewerId = reviewsState[reviewId].user_id;
    const review = reviewsState[reviewId];

    if (currentUser.id === reviewerId) {
        return (
            <ReviewForm review={review} formType="Edit Review" hasReview={true} />
        );
    }
}

export default EditReviewForm;
