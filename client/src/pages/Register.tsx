
const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1a] via-[#1c1c2b] to-[#111827] flex items-center justify-center px-4 font-inter relative overflow-hidden">
      {/* Decorative Blurs */}
      <div className="absolute top-[-100px] left-[-80px] w-72 h-72 bg-indigo-500 opacity-20 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-[-100px] right-[-80px] w-80 h-80 bg-cyan-500 opacity-20 rounded-full blur-3xl animate-pulse z-0" />

      <div className="relative z-10 w-full max-w-md bg-[#1f2937]/70 border border-white/10 backdrop-blur-lg rounded-2xl shadow-2xl px-10 py-12 text-white">
        <h2 className="text-4xl font-semibold text-center mb-8 text-cyan-300 tracking-tight">
          Create Account
        </h2>

        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-gray-300 mb-1 tracking-wide"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              required
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[#2f3542] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-1 tracking-wide"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[#2f3542] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-1 tracking-wide"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[#2f3542] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-300 mb-1 tracking-wide"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[#2f3542] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-white font-semibold text-lg hover:brightness-110 shadow-lg hover:shadow-xl transition active:scale-95"
            >
              Register
            </button>
          </div>

          {/* Already have account */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-400">
              Already have an account?{' '}
              <a
                href="/login"
                className="text-cyan-300 hover:text-cyan-100 hover:underline transition"
              >
                Login
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
