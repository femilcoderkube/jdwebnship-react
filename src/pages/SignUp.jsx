import React from "react";
import CommonHeader from "../components/CommonHeader";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <CommonHeader />
      <div className="px-4 sm:px-6 lg:px-10 xl:px-[4.6875rem] lg:py-[6.25rem] md:py-[5rem] py-[3.5rem]">
        <div className="max-w-[37.5rem] mx-auto text-left">
          <form className="space-y-6">
            <div className="sm:mb-0 mb-6 flex flex-col sm:flex-row space-x-4">
              <div className="sm:w-1/2 w-full mb-6">
                <label className="block text-sm mb-2 font-bold uppercase" htmlFor="name">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full border border-[#AAAAAA] rounded-md px-4 py-[0.82rem] focus:outline-none"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="sm:w-1/2 w-full">
                <label className="block text-sm mb-2 font-bold uppercase" htmlFor="name">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full border border-[#AAAAAA] rounded-md px-4 py-[0.82rem] focus:outline-none"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-2 font-bold uppercase" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full border border-[#AAAAAA] rounded-md px-4 py-[0.82rem] focus:outline-none"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 font-bold uppercase" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full border border-[#AAAAAA] rounded-md px-4 py-[0.82rem] focus:outline-none"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <p className="text-sm font-medium">By creating an account you agree with our Terms of Service, Privacy Policy,</p>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white rounded-[0.625rem] cursor-pointer py-4 uppercase"
            >
              Sign up
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm uppercase">
              Already have an account?{" "}
              <Link to={"/signin"} className="underline hover:text-[#007BFF]">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
