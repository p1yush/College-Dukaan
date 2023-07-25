import { Link } from "react-router-dom"

export const Login = () => {
 return (
<div
  className="bg-no-repeat bg-cover bg-center relative"
>
  <div className="absolute bg-gradient-to-b from-gray-300 to-grey-100 opacity-75 inset-0 z-0" />
  <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-evenly">
    <div className="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
      <div className="self-start hidden lg:flex flex-col  text-gray-800">
        <img src="images/logo.png" alt="logo" className="mb-3" />
      </div>
    </div>
    <div className="flex justify-center self-center  z-10">
      <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
        <div className="mb-4">
          <h3 className="font-semibold text-2xl text-gray-800">Login </h3>
          <p className="text-gray-500">Please login to your account.</p>
        </div>
        <div className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 tracking-wide">
              Email
            </label>
            <input
              className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
              type=""
              placeholder="mail@gmail.com"
            />
          </div>
          <div className="space-y-2">
            <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
              Password
            </label>
            <input
              className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
              type=""
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-800"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="text-yellow-400 hover:text-yellow-500">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button 
              type="submit"
              className="w-full flex justify-center bg-yellow-400  hover:bg-yellow-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer"
            >
              Sign in
            </button>
          </div>
          <div className="text-center text-sm">
            <p>Don't Have an account?</p>
            <Link to="/register" className="text-yellow-400 hover:text-yellow-500"> Register Here</Link>
          </div>
        </div>
        <div className="pt-5 text-center text-gray-400 text-xs">
          <span>
            Copyright © 2021-2022 College Dukaan
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
 )
}
