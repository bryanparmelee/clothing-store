import SignUpForm from "../../components/sign-up-form/sign-up-form.compoonent";
import SignInForm from "../../components/sign-in-form/sign-in-form.compoonent";

import './authentication.styles.scss';

const Authentication = () => {
    return (
        <div className="authentication-container">          
            <SignInForm />
            <SignUpForm />        
        </div>
    )
};

export default Authentication;