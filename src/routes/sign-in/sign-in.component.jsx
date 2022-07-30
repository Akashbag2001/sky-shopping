import {
  googleSignInPopUp,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const signIn = () => {
  const logGoogleUser = async () => {
    const { user } = await googleSignInPopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign-in page</h1>
      <button onClick={logGoogleUser}> Sign In with Google pop-up </button>
    </div>
  );
};

export default signIn;
