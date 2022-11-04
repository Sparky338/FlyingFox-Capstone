import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';


const ReviewForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    

    return (
        <div className="review-form-outer">
            <form className="review-form" onSubmit={handleSubmit}>

                <div className="review-form-review-data">
                    <label className="review-form-label">
                        Review*:
                        <input
                            className="review-form-review"
                            placeholder="Write a review"
                            // onChange={e => }
                        />
                    </label>
                    <label className="review-form-label">
                        <input
                            className="review-form-review"
                            placeholder="Write a review"
                            // onChange={e => }
                        />
                    </label>


                </div>
            </form>
        </div>
    )
}

export default ReviewForm;
