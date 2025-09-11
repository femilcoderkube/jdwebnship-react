import React, { useState } from "react";
import CommonHeader from "../components/CommonHeader";
import { Link } from "react-router-dom";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <CommonHeader />
      <div className="px-4 sm:px-6 lg:px-10 xl:px-[4.6875rem] lg:py-[6.25rem] md:py-[5rem] py-[3.5rem]">
        <div className="max-w-[37.5rem] mx-auto text-left">
          <form className="space-y-6">
            <div className="sm:mb-0 mb-6 flex flex-col sm:flex-row space-x-4">
              <div className="sm:w-1/2 w-full mb-6">
                <label
                  className="block text-sm mb-2 font-bold uppercase"
                  htmlFor="first-name"
                >
                  First name
                </label>
                <input
                  id="first-name"
                  type="text"
                  className="w-full border border-[#AAAAAA] rounded-md px-4 py-[0.82rem] focus:outline-none"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="sm:w-1/2 w-full">
                <label
                  className="block text-sm mb-2 font-bold uppercase"
                  htmlFor="last-name"
                >
                  Last name
                </label>
                <input
                  id="last-name"
                  type="text"
                  className="w-full border border-[#AAAAAA] rounded-md px-4 py-[0.82rem] focus:outline-none"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm mb-2 font-bold uppercase"
                htmlFor="email"
              >
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
              <label
                className="block text-sm mb-2 font-bold uppercase"
                htmlFor="number"
              >
                Mobile Number
              </label>
              <input
                id="number"
                inputMode="numeric"
                pattern="[0-9]*"
                type="text"
                className="w-full border border-[#AAAAAA] rounded-md px-4 py-[0.82rem] focus:outline-none"
                placeholder="Enter your Mobile Number"
                autoComplete="tel"
              />
            </div>
            {/* Password Field with Eye Icon */}
            <div>
              <label
                className="block text-sm mb-2 font-bold uppercase"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full border border-[#AAAAAA] rounded-md px-4 py-[0.82rem] focus:outline-none pr-12"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showPassword ? (
                    // Eye Open Icon
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 
                          4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ) : (
                    // Eye Closed Icon
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 
                          0-8.268-2.943-9.542-7a9.956 
                          9.956 0 012.24-3.592m3.012-2.299A9.956 
                          9.956 0 0112 5c4.477 0 
                          8.268 2.943 9.542 7a9.956 
                          9.956 0 01-1.249 2.592m-3.012 
                          2.299L4.5 4.5"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                className="shrink-0 h-5 w-5 rounded border-gray-300 bg-white text-transparent focus:ring-blue-500 appearance-none custom-checkbox"
              />
              <label htmlFor="terms" className="text-sm font-medium select-none">
                By creating an account you agree with our Terms of Service,
                Privacy Policy,
              </label>
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
