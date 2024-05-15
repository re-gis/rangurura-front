import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();
  return (
    <div className="not-found-page flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="error-message text-center py-8 px-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Whoops! Page Not Found
        </h1>
        <p className="text-gray-600 mt-4">
          The page you requested seems to have gotten lost in the vast ocean of
          the internet. Don't worry, we can help you find your way back.
        </p>
      </div>
      <div className="actions flex justify-between w-full max-w-md mt-8">
        <button
          type="button"
          onClick={() => router.back()}
          className="btn-back px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md"
        >
          Take Me Home
        </button>
        <div className="search-wrapper flex items-center">
          <input
            type="text"
            className="search-input px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring ring-gray-400"
            placeholder="Search our website..."
          />
          <button
            type="button"
            className="btn-search px-4 py-2 bg-blue-500 text-white hover:bg-blue-700 rounded-md"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
