import { Link } from "react-router-dom"

export const NotFoundPage = () => {
    return <>
            <div className="max-w-xl w-full bg-zinc-800 p-8 rounded-xl shadow-lg text-gray-100">
            <h1 className="text-6xl font-extrabold text-red-500 mb-4">
                404
            </h1>
            <h2 className="text-3xl font-bold mb-4">
                Page Not Found
            </h2>
            <p className="text-lg text-gray-300 mb-6">
                Oops! It looks like the page you're looking for has gone on an adventure of its own.
                Don't worry, you can always head back to safety!
            </p>
            <Link to="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                Go to Homepage
            </Link>
        </div>
    </>
}