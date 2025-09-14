import saintTropez from "../assets/saint-tropez.jpg";
import metadata from "../assets/metadata.jpg";
import geosint from "../assets/geosint.jpg";

export const challenges = [
  {
    title: "Social Media Sleuth",
    description: "Find the username’s hidden profile on another platform.",
    difficulty: "Easy",
    question:
      "A person uses the handle `@cyberfox91` on Twitter. Can you find their Instagram account?",
    hint: "Try username lookup tools like Sherlock or Maigret.",
    answer: "The Instagram account is `@cyberfox91`.",
  },
  {
    title: "Location Hunt",
    description: "Analyze an image for location clues.",
    difficulty: "Medium",
    question: "Identify the city where this picture was taken.",
    hint: "Look for unique landmarks, signs, or text in the image.",
    image: saintTropez,
    answer: "Saint-Tropez, France.",
  },
  {
    title: "Metadata Extraction",
    description: "Dig into the file’s hidden details.",
    difficulty: "Medium",
    question: "Download the sample image and find the camera model used.",
    hint: "Use exiftool or an online EXIF viewer.",
    image: metadata,
    answer: "Camera Model: Canon EOS 40D.",
  },
  {
    title: "Domain Intelligence",
    description: "Investigate a suspicious domain name.",
    difficulty: "Hard",
    question:
      "Investigate the domain `tracelabs.org`. What state is its registrar located in?",
    hint: "Perform a WHOIS lookup.",
    answer: "Arizona",
  },
  {
    title: "Advanced Geolocation",
    description: "A tough one for true OSINT masters.",
    difficulty: "Hard",
    question: "Where was this picture taken? Be specific (city).",
    hint: "Look for environmental clues: vegetation, architecture, shadows, language on signs.",
    image: geosint,
    answer: "Pasay City, Manila, Philippines",
  },
];
