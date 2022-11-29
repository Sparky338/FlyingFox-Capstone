import './developer-modal.css'
import developerPhoto from "../../images/Developer_Matt_Hutter.jpg"


const DeveloperAbout = () => {

    return (
        <div className="modal-container-dev">
            <div className="modal-image-container">
                <img src={developerPhoto} alt="Image of Developer, Matt Hutter" className="modal-developer-photo" />
            </div>
            <div className="modal-dev-about-container">
                <div className="modal-dev-name">Matt Hutter</div>
                <div className="modal-dev-role">Flying Fox Developer</div>
                <div className="modal-dev-about">
                    Matt is responsible for coding the Flying Fox page you're currently on.
                    Matt began coding in the early 2000s for middle school and
                    high school projects using HTML. Since then, he has upgraded his skills
                    to code in Javascript, Python, and React/Redux while attending AppAcademy.
                    Matt learned to skydive in 2021 and has loved every second of it.
                    He plans on piloting a wingsuit as soon as he gets the minimum required
                    200 jumps, under coaching from some of the best wingsuit pilots in the
                    Pacific NorthWest at Skydive Kapowsin.
                </div>
            </div>
        </div>
    )
}

export default DeveloperAbout
