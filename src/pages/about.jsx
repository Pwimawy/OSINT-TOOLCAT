import profilePic from "../assets/profile.jpg";

export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col mt-30 items-center justify-center min-h-screen text-white px-6 text-center"
    >
      <h1 className="text-4xl font-bold mb-20 text-center jetbrains-mono-header">
        Developer
      </h1>
      <img
        src={profilePic}
        alt="Profile"
        className="w-52 h-52 rounded-full mb-4 shadow-lg border-4 border-gray-700 object-cover"
      />
      <h1 className="text-3xl font-bold mb-2">
        Mark Lester Cabalbag
        <span className="text-3xl font-bold text-gray-300"> (Pwimawy)</span>
      </h1>
      <p className="text-gray-300 max-w-md mb-6">
        I built this website to help myself and others, including law
        enforcement and ethical hackers, conduct cyber patrolling and
        open-source reconnaissance.
      </p>

      <div className="flex space-x-6 text-2xl mb-20">
        <a
          href="https://github.com/pwimawy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <i class="bx bxl-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/marklestercabalbag"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <i class="bx bxl-linkedin-square" />
        </a>
        <a
          href="https://facebook.com/Pwimawy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <i class="bx bxl-facebook-circle" />
        </a>
        <a
          href="https://www.youtube.com/@Pwimawy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500"
        >
          <i class="bx bxl-youtube" />
        </a>
      </div>
    </div>
  );
}
