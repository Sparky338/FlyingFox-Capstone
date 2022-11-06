import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deleteReview } from "../../store/reviews";
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

    const handleDelete = async () => {
        let res = window.confirm('Are you sure you want to delete this review?');

        if (res) {
            const awaitedDelete = await dispatch(deleteReview(reviewId))
            if (awaitedDelete) alert("Your review has been deleted.")
            history.push("/")
        }

    }

    if (currentUser.id === reviewerId) {
        return (
            <>
                <ReviewForm storedReview={review} formType="Edit Review" />
                <button className="delete-review-button" onClick={handleDelete}>Delete Review</button>
            </>

        );
    } else return null
}

export default EditReviewForm;
