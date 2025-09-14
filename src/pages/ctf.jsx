import { useState } from "react";
import { challenges } from "../data/ctfData";

export default function CTF() {
  const [revealed, setRevealed] = useState(
    Array(challenges.length).fill(false)
  );

  const [hintRevealed, setHintRevealed] = useState(
    Array(challenges.length).fill(false)
  );

  const toggleAnswer = (index) => {
    setRevealed((prev) => prev.map((r, i) => (i === index ? !r : r)));
  };

  const toggleHint = (index) => {
    setHintRevealed((prev) => prev.map((r, i) => (i === index ? !r : r)));
  };

  return (
    <div id="ctf" className="min-h-screen bg-gray-950 text-white p-8 mt-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Capture The Flag (CTF)
      </h1>
      <p className="text-center text-gray-400 mb-12">
        Test your OSINT and investigation skills through real-world inspired
        challenges.
      </p>

      <div className="grid gap-8 max-w-4xl mx-auto">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-700 rounded-2xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-2">{challenge.title}</h2>
            <p className="text-gray-400 mb-4">{challenge.description}</p>

            <span
              className={`inline-block px-3 py-1 text-sm rounded-full mb-4 ${
                challenge.difficulty === "Easy"
                  ? "bg-green-800 text-green-200"
                  : challenge.difficulty === "Medium"
                  ? "bg-yellow-800 text-yellow-200"
                  : "bg-red-800 text-red-200"
              }`}
            >
              {challenge.difficulty}
            </span>

            {/* Render optional image from ctfData */}
            {challenge.image && (
              <div className="mb-4">
                <img
                  src={challenge.image}
                  alt={`Challenge ${challenge.title}`}
                  className="w-full max-w-md mx-auto rounded-lg border border-gray-700 shadow-md"
                />
              </div>
            )}

            <div className="mb-4">
              <p className="font-semibold">Challenge:</p>
              <p className="text-gray-300">{challenge.question}</p>
            </div>

            {hintRevealed[index] && challenge.hint && (
              <div className="bg-blue-900/40 border-l-4 border-blue-500 text-blue-200 p-4 rounded-md mb-4">
                <p className="font-semibold">💡 Hint:</p>
                <p>{challenge.hint}</p>
              </div>
            )}

            {revealed[index] && (
              <div className="mb-4">
                <p className="font-semibold">Answer:</p>
                <p className="text-green-400">{challenge.answer}</p>
              </div>
            )}

            <div className="flex gap-4">
              {challenge.hint && (
                <button
                  onClick={() => toggleHint(index)}
                  className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-xl text-white transition"
                >
                  {hintRevealed[index] ? "Hide Hint" : "Hint"}
                </button>
              )}

              <button
                onClick={() => toggleAnswer(index)}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl text-white transition"
              >
                {revealed[index] ? "Hide Answer" : "Reveal Answer"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
