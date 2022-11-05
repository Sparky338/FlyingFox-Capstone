import { useSelector } from "react-redux";
import ReviewForm from "./ReviewForm";

const CreateReviewForm = () => {
    const currentUser = useSelector(state => state.session.user);

    const review = {
        firstName: '',
        lastName: '',
        reviewBody: '',
        imageUrl: ''
    };

    if (currentUser) {
        return (
            <ReviewForm storedReview={review} formType="Leave a review"/>
        );
    }
}

export default CreateReviewForm;
