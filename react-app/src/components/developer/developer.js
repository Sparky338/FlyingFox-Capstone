import DeveloperModal from "../developer-modal";
import "./developer.css"

const Developer = () => {

    return (
        <div className="developer-outer">
            <div className="flying-fox-developer">Flying Fox Developer</div>
            <div className="photo-info-container">
                <div className="dev-name-links">
                    <DeveloperModal />
                    <div className="dev-links">
                        <a className="dev-link"
                           target="_blank"
                           rel="noreferrer"
                           href="https://github.com/Sparky338">
                           GitHub
                        </a>
                        <a className="dev-link"
                           target="_blank"
                           rel="noreferrer"
                           href="https://www.linkedin.com/in/matt-hutter-2a6620173">
                           LinkedIn
                        </a>
                        <a className="dev-link"
                           target="_blank"
                           rel="noreferrer"
                           href="https://github.com/Sparky338/FlyingFox-Capstone">
                           Flying Fox Repo
                        </a>
                        <a className="dev-link"
                           target="_blank"
                           rel="noreferrer"
                           href="https://sparky338.github.io/">
                           Profile
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Developer;
