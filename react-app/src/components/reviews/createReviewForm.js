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
            <ReviewForm review={review} formType="Leave a review" hasReview={false}/>
        );
    }
}

export default CreateReviewForm;
