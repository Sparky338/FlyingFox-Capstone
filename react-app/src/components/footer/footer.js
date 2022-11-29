import flyingFoxLogo from '../../images/Flying_Fox_Logo.png'
import "./footer.css"

const Footer = () => {

    return (
        <footer>
            <div className="footer-container">
                <div className="Flying-Fox-repo-footer">
                    <a className="dev-link-footer" target="_blank" href="https://github.com/Sparky338/FlyingFox-Capstone"> Flying Fox Repo </a>
                </div>
                <div className='Footer-content'>
                    <img src={flyingFoxLogo} alt="Flying Fox Logo" className='logo-footer' />
                    {/* <div className="Dev-info-footer"> */}
                        <div className="dev-name-footer">
                            Matthew Hutter
                        </div>
                        <div className="dev-links-footer">
                            <a className="dev-link-footer" target="_blank" href="https://github.com/Sparky338"> GitHub </a>
                            <a className="dev-link-footer" target="_blank" href="https://www.linkedin.com/in/matthew-hutter-2a6620173"> LinkedIn </a>
                        </div>
                    {/* </div> */}
                    <img src={flyingFoxLogo} alt="Flying Fox Logo" className='logo-footer' />
                </div>
            </div>
        </footer>
    )
};

export default Footer
