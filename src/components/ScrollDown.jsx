export default function ScrollDownIndicator() {
  return (
    <div className="mt-6 flex flex-col items-center animate-bounce">
      {/* Arrow */}
      <svg
        className="w-6 h-6 text-gray-300"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
      {/* Optional text */}
      <span className="text-gray-400 mt-2 text-sm">Scroll Down</span>
    </div>
  );
}
