import { Mail, Lock, Eye, User } from "lucide-react";

export default function Signup() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-slate-800 rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">
              Welcome to SULOG
            </h1>
            <p className="text-gray-400">Create your account</p>
          </div>

          {/* 에러 메시지 예시 */}
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg">
            <p className="text-red-500 text-sm">
              Password must be at least 6 characters long
            </p>
          </div>

          <form className="space-y-4">
            {/* 이메일 입력 */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-700 text-white pl-10 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* 닉네임 입력 */}
            <div>
              <label
                htmlFor="nickname"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Nickname
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  id="nickname"
                  className="w-full bg-slate-700 text-white pl-10 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Choose a nickname"
                />
              </div>
            </div>

            {/* 비밀번호 입력 */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="password"
                  id="password"
                  className="w-full bg-slate-700 text-white pl-10 pr-12 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  <Eye className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* 비밀번호 확인 입력 */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full bg-slate-700 text-white pl-10 pr-12 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            {/* 버튼 영역 */}
            <div className="flex gap-3">
              <button
                type="button"
                className="flex-1 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
