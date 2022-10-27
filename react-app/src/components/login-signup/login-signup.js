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
                        <div className="returning-cust">RETURNING CUSTOMER</div>
                        <div className="login-form-container">
                            <LoginForm />
                        </div>
                    </div>
                    <div className="vertial-separator">- OR -</div>
                    <div className="signup-container">
                        <div className="new-cust">NEW CUSTOMER</div>
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
