import React from "react";
import CommonHeader from "../components/CommonHeader";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div>
      <CommonHeader />
      <div className="px-4 sm:px-6 lg:px-10 xl:px-[60px] py-10">
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full border rounded-md px-3 py-2"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full border rounded-md px-3 py-2"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white rounded-md py-2"
            >
              Sign in
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link
              to={"/forgot-password"}
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="mt-2 text-center">
            <p className="text-sm">
              Don't have an account?{" "}
              <Link to={"/signup"} className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
