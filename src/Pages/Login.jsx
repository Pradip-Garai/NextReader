import React from 'react';

function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          {/* Form Section - Left Side */}
          <div className="p-8 md:w-1/2">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Sign In to Your Account</h1>
            <p className="text-gray-600 mb-6">Welcome back! Access your library and continue your learning journey.</p>

            <form className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Remember Me Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition font-medium"
              >
                Sign In
              </button>
            </form>
          </div>

          {/* Right Side - Image and message */}
          <div className="hidden md:block md:w-1/2 bg-gray-100">
            <div className="h-full flex items-center justify-center text-gray-400"
                 style={{
                   backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/LoginIMG.jpg)",
                   backgroundSize: "cover",
                   backgroundPosition: "center",
                   backgroundRepeat: "no-repeat"
                  }} >
              <span className='ml-[29px] mt-[35rem] text-emerald-50 text-lg '>Access thousands of academic resources and get 10,000+ Books for Passionate Learners</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
