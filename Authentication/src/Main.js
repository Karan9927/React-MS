import React, { useEffect, useRef, useState } from "react";
import { useAuthorization } from "./AuthContext";
import { auth } from "./firebase";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import "./App.css";

const Main = () => {
  const { handleSignUp, handleLogin, handleLogout } = useAuthorization();
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [passError, setpassError] = useState(false);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleSignUpSub = () => {
    if (passwordRef.current.value === confirmPasswordRef.current.value) {
      const name = nameRef.current.value;
      const password = passwordRef.current.value;

      handleSignUp(name, password);
      nameRef.current.value = "";
      passwordRef.current.value = "";
      confirmPasswordRef.current.value = "";
      setpassError(false);
    } else {
      setpassError(true);
    }
  };
  const handleLoginSub = () => {
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    handleLogin(name, password);
    nameRef.current.value = "";
    passwordRef.current.value = "";
  };
  const handleLogoutSub = () => {
    handleLogout();
  };

  return (
    <div id="main" className="h-screen">
      <nav className="p-2 px-8">
        <h1 className="text-3xl font-semibold text-white">
          Firebase Authentication App
        </h1>
      </nav>
      <div className="flex justify-between px-8">
        <div className="flex flex-col justify-between w-1/2">
          <div>
            <h2 className="text-[46px] font-bold mt-28 text-white uppercase">
              Lorem ipsum <br /> dolor{" "}
            </h2>
            <p className="text-white text-[22px]">
              Lorem ipsum dolor sit <br /> amet, consect adipiscing
              <br /> elit. Duis cursus gravida ac.
            </p>
          </div>
          <div className="flex justify-between mt-48 text-4xl text-white px-36 ">
            <FaGithub />
            <FaTwitter />
            <FaLinkedin />
            <FaDiscord />
          </div>
        </div>
        <div className="w-1/2">
          <div>
            {user ? (
              <div className="flex flex-col items-center justify-center px-6 mt-24">
                <img
                  className="w-[50%] rounded-full"
                  src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg"
                />
                <p className="text-[24px]">Welcome, {user.email}!</p>
                <button
                  className="my-6  text-[20px] hover:text-blue-600 text-blue-500"
                  onClick={handleLogoutSub}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col px-6">
                {login ? (
                  <h1 className="text-[32px] font-bold pt-10 mb-6">Login</h1>
                ) : (
                  <h1 className="text-[32px] font-bold pt-10 mb-6">
                    Create Account
                  </h1>
                )}

                <input
                  className="py-2 my-5 text-[20px] text-blue-500 border-b-2 border-blue-500 shadow-md focus:outline-none focus:shadow-xl focus:shadow-blue-200"
                  ref={nameRef}
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="py-2 my-5 text-[20px] text-blue-500 border-b-2 border-blue-500 shadow-md focus:outline-none focus:shadow-xl focus:shadow-blue-200"
                  ref={passwordRef}
                  type="password"
                  placeholder="Password"
                />
                {login ? (
                  ""
                ) : (
                  <input
                    className="py-2 my-5 text-[20px] text-blue-500 border-b-2 border-blue-500 shadow-md focus:outline-none focus:shadow-xl focus:shadow-blue-200"
                    ref={confirmPasswordRef}
                    type="password"
                    placeholder="Confirm Password"
                  />
                )}

                {passError ? (
                  <p className="text-red-600">Password doesn't match !</p>
                ) : (
                  ""
                )}
                <div className="">
                  {login ? (
                    <button
                      className="w-full p-2 px-6 my-6 font-semibold text-[18px] text-white bg-blue-500 rounded-sm shadow-xl hover:bg-blue-600"
                      onClick={handleLoginSub}
                    >
                      Login
                    </button>
                  ) : (
                    <button
                      className="w-full shadow-xl p-4 font-semibold text-[18px] text-white bg-blue-500 rounded-md my-5 hover:bg-blue-600"
                      onClick={handleSignUpSub}
                    >
                      Create Account
                    </button>
                  )}
                  {login ? (
                    <div className="flex gap-2 my-5 text-[18px]">
                      <p className="text-gray-500">Create an account !</p>
                      <p
                        onClick={() => setLogin(false)}
                        className="text-blue-500 cursor-pointer hover:text-blue-700"
                      >
                        Signup
                      </p>
                    </div>
                  ) : (
                    <div className="flex gap-2 my-5 text-[18px]">
                      <p className="text-gray-500">Already have an account ?</p>
                      <p
                        onClick={() => setLogin(true)}
                        className="text-blue-500 cursor-pointer hover:text-blue-700"
                      >
                        Login
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    //   <div className="items-center justify-center h-screen">

    //   </div>
  );
};

export default Main;
