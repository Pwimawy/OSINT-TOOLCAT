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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e6/Eiffel_Tower_from_the_Trocadero%2C_Paris_5_April_2019.jpg",
    answer: "Paris, France (Eiffel Tower).",
  },
  {
    title: "Metadata Extraction",
    description: "Dig into the file’s hidden details.",
    difficulty: "Medium",
    question: "Download the sample image and find the camera model used.",
    hint: "Use exiftool or an online EXIF viewer.",
    image:
      "https://raw.githubusercontent.com/ianare/exif-samples/master/jpg/exif-org.jpg",
    answer: "Camera Model: Canon EOS 40D.",
  },
  {
    title: "Hidden Message",
    description: "Discover a secret hidden in plain sight.",
    difficulty: "Easy",
    question:
      "Open this image and look carefully. What hidden text can you find?",
    hint: "Adjust brightness/contrast or use a steganography tool.",
    image: "https://stegonline.georgeom.net/img/stego.png",
    answer: "The hidden message is 'OSINT ROCKS'.",
  },
  {
    title: "Domain Intelligence",
    description: "Investigate a suspicious domain name.",
    difficulty: "Hard",
    question:
      "Investigate the domain `example-ctf.com`. What country is its registrar located in?",
    hint: "Perform a WHOIS lookup.",
    answer: "United States (registered via NameCheap).",
  },
  {
    title: "Advanced Geolocation",
    description: "A tough one for true OSINT masters.",
    difficulty: "Hard",
    question: "Where was this picture taken? Be specific (city & landmark).",
    hint: "Look for environmental clues: vegetation, architecture, shadows, language on signs.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/84/Christ_the_Redeemer_-_Rio.jpg",
    answer: "Rio de Janeiro, Brazil — Christ the Redeemer statue.",
  },
];
