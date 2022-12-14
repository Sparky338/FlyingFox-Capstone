import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deleteReview } from "../../store/reviews";
import { errorRedirect } from "../utility/error-redirect";
import ReviewForm from "./ReviewForm";

const EditReviewForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { reviewId } = useParams();
    const currentUser = useSelector(state => state.session.user);
    const reviewsState = useSelector(state => state.reviews);

    if (!reviewId) return null;
    if (!reviewsState) return null;

    const reviewerId = reviewsState[reviewId]?.user_id;
    const review = reviewsState[reviewId];

    let error;
    if (reviewsState) error = errorRedirect(reviewsState, +reviewId)
    if (error) return error

    const handleDelete = async () => {
        let res = window.confirm('Are you sure you want to delete this review?');

        if (res) {
            await dispatch(deleteReview(reviewId))
            history.push("/orders")
            alert("Your review has been deleted.")
        }
    }

    if (currentUser.id === reviewerId) {
        return (
            <>
                <ReviewForm storedReview={review} formType="Edit Review" />
                <button className="delete-review-button main-button" onClick={handleDelete}>Delete Review</button>
            </>

        );
    } else return null
}

export default EditReviewForm;
