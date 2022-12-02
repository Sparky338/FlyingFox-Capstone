import { Link } from 'react-router-dom'
import flyingFoxLogo from '../../images/Flying_Fox_Logo.png'

const Page404 = () => {
    return (
        <div className="error-page-container">
            <div className="Flying-fox-logo-error">
                <img
                    className='Flying-Fox-logo-error'
                    src={flyingFoxLogo}
                    alt='Flying Fox logo'
                />
            </div>
            <div className='error-text'>
                <div className='line-one-error'>
                    404: Shit, sorry! This page is lost in the wilderness.
                </div>
                <div className='line-two-error'>
                    Please go back to our <Link to="/">home page.</Link>
                </div>
            </div>
        </div>
    )
}

export default Page404
