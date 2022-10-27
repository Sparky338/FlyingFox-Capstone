import LoginForm from "../auth/LoginForm"
import SignUpForm from "../auth/SignUpForm"
import "./login-signup.css"

const LoginSignup = () => {

    return (
        <div className="login-signup-outer">
            <div className="login-signup-container">
                <div className="login-header">LOGIN</div>
                <div className="login-and-signup-container">
                    <div className="login-container">
                        <h3 className="returning-cust">RETURNING CUSTOMER</h3>
                        <div className="login-form-container">
                            <LoginForm />
                        </div>
                    </div>
                    <div className="vertical-separator-container">
                        <div className="vertical-line"></div>
                        <div className="vertical-separator">- OR -</div>
                    </div>
                    <div className="signup-container">
                        <h3 className="new-cust">NEW CUSTOMER</h3>
                        <div className="signup-form-container">
                            <SignUpForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup
