import { useEffect } from "react";

const IndividualAricle = () => {

    useEffect(() => {
        document.body.classList.add('bg-white');

        return function cleanup() {
            document.body.classList.remove('bg-white');
        }
    }, [])

    return (
        <div className="individual-outer">
            test
        </div>
    )
}

export default IndividualAricle;
