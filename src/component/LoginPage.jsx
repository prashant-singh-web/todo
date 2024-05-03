import React, { useEffect } from "react";
import { auth, db, googleProvider } from "../config/Firebase";
import { signInWithPopup} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  // get logged in user object from auth firebase hook
  const [user] = useAuthState(auth);

  // use for navigate
  const navigate = useNavigate();
  // check if user is logged in and navigate to home page
  useEffect(() => {
    if (user) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [user, navigate]);

  // sign in with google provider
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      const user = result.user;
      //  after sign in save user in firebase database
      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div className="w-full h-[100vh] grid place-items-center bg-white ">
      <div className=" w-full h-full bg-white md:h-fit   my-auto grid grid-cols-1 sm:grid-cols-2  ">
        <div className=" w-full h-full flex flex-col p-4 sm:p-10 lg:p-16 ">
          <img src="./Group.png" alt="Logo" className="w-8" />
          <div className="w-full h-full flex flex-col justify-center space-y-5  items-center px-10">
            <h2 className="text-[33.14px] leading-[38.84px] font-medium text-black/85  font-roboto">
              LOGIN
            </h2>
            <p className="text-sm lg:text-[20px] lg:leading-[30px] font-roboto font-normal text-black/50 overflow-clip">
              For a secure experience and to save your todos in our database,
              please log in before using our app. Once logged in, you can easily
              view and manage your todos anytime. Thank you!
            </p>

            <button
              onClick={signInWithGoogle}
              className="flex items-center justify-center px-1  py-1 border border-transparent text-base font-medium rounded-md text-white bg-[#597EF7] hover:bg-[#597EF7]/90"
            >
              <img
                src="/googleIcon.png"
                alt="Google logo"
                className="h-8 w-8 p-1 rounded-sm  bg-white"
              />
              <span className="px-5"> Sign in with Google</span>
            </button>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center w-full h-full ">
          <img
            src="./IllustrationBoy.png"
            alt="Illustration"
            className="w-full h-full xl:h-screen"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
