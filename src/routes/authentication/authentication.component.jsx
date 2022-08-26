import SignUpForm from "../../components/sign-up-form/sign-up-form.compoonent";
import SignInForm from "../../components/sign-in-form/sign-in-form.compoonent";

import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => {
    return (
        <AuthenticationContainer>          
            <SignInForm />
            <SignUpForm />        
        </AuthenticationContainer>
    )
};

export default Authentication;