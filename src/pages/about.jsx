import profilePic from "../assets/profile.jpg";

export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center min-h-screen text-white px-6 text-center"
    >
      <img
        src={profilePic}
        alt="Profile"
        className="w-32 h-32 rounded-full mb-4 shadow-lg border-4 border-gray-700 object-cover"
      />
      <h1 className="text-3xl font-bold mb-2">Pwimawy</h1>
      <p className="text-gray-300 max-w-md mb-6">
        Hi! I created this website as part of my project to share useful OSINT
        tools, challenges, and resources. My goal is to help people learn, grow,
        and contribute to the community while making knowledge more accessible.
      </p>

      <div className="flex space-x-6 text-2xl">
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
          href="https://youtube.com/yourchannel"
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
