import { useState } from 'react'
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-300 p-4">
        <h1 className="text-3xl md:text-4xl font-[Tektur] font-bold text-gray-800 mb-6 drop-shadow-lg">
        🧠 Math Trainer 🧠
        </h1>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 drop-shadow-lg">
          Let's Train Your Brain!
        </h1>
        <p className="text-lg text-gray-700 mb-8">Choose your difficulty level:</p>

        <div className="flex flex-col gap-4 w-full max-w-sm">
          <Link
            to="/Easy"
            className="bg-green-400 text-white text-xl font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-green-500 transition duration-200 flex items-center justify-center"
          >
            😊 Easy (1 Digit)
          </Link>
          <Link
            to="/Medium"
            className="bg-yellow-400 text-white text-xl font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-200 flex items-center justify-center"
          >
            🤔 Medium (2 Digits)
          </Link>
          <Link
            to="/Hard"
            className="bg-red-400 text-white text-xl font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-red-500 transition duration-200 flex items-center justify-center"
          >
            🤓 Hard (3 Digits)
          </Link>
        </div>
      </div>
    </>
  )
}

export default App
