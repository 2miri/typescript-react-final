import { Mail } from "lucide-react";

export default function Kakao() {
  return (
    <>
      <>
        {/* 이메일 정보를 받아야 할 때 */}
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
          <div className="w-full max-w-md">
            <div className="bg-slate-800 rounded-lg shadow-xl p-8">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-white mb-2">
                  You're almost there
                </h1>
                <p className="text-gray-400">Sign up with just your email!</p>
              </div>

              <form className="space-y-4">
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
                      autoComplete="off"
                      required
                    />
                  </div>
                  <p className="text-rose-500 mt-2">Failed Update</p>
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    className="flex-1 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* 이메일 정보 없이 리다이렉션 처리하면 될 때 */}
        {/* <Redirection /> */}
      </>
    </>
  );
}
