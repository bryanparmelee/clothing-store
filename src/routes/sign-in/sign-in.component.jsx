import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1>This is the sign in page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </div>
    )
};

export default SignIn;