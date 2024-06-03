import React from "react";

const page = () => {
  return (
    <>
      <div class="bg-gray-100 flex items-center justify-center h-screen">
        <div class="w-full max-w-4xl bg-white p-8 shadow-lg rounded-lg">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 class="text-2xl font-bold mb-6">
                IF YOU'RE ALREADY A MEMBER.
              </h2>
              <form>
                <div class="mb-4">
                  <label class="block text-gray-700" for="login-email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="login-email"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md 
            focus:outline-none focus:ring focus:ring-green-200"
                    placeholder="Enter your email"
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700" for="login-password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="login-password"
                    class="w-full px-3 py-2 border
             border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-200"
                    placeholder="Enter your password"
                  />
                </div>
                <div class="flex items-center justify-between mb-4">
                  <a href="#" class="text-red-500">
                    Forgot password?
                  </a>
                  <button
                    type="submit"
                    class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                  >
                    Login
                  </button>
                </div>
                <div class="text-center mb-4">OR</div>
                <button
                  type="button"
                  class="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                  Login Via Facebook
                </button>
              </form>
            </div>

            <div>
              <h2 class="text-2xl font-bold mb-6">NEW MEMBER? REGISTER</h2>
              <form>
                <div class="mb-4">
                  <label class="block text-gray-700" for="register-email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="register-email"
                    class="w-full px-3 py-2 border
             border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-200"
                    placeholder="Enter your email"
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700" for="register-password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="register-password"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md
             focus:outline-none focus:ring focus:ring-green-200"
                    placeholder="Enter your password"
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700" for="confirm-password">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-200"
                    placeholder="Re-enter your password"
                  />
                </div>
                <div class="mb-4 flex items-center">
                  <input type="checkbox" id="terms" class="mr-2" />
                  <label for="terms" class="text-gray-700">
                    I accept the Tops Pizza{" "}
                    <a href="#" class="text-blue-500 underline">
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" class="text-blue-500 underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>
                <button
                  type="submit"
                  class="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
