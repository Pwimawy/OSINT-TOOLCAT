export const col1 = [
  {
    category: "Social Media",
    subcategories: [
      {
        name: "Social Media Search",
        icon: <i class="bx bx-user-circle" />,
        tools: [
          { name: "UserSearch.org", url: "https://usersearch.org" },
          { name: "Social Bearing", url: "https://socialbearing.com" },
          {
            name: "Twint",
            url: "https://twintproject.github.io/twint/overview.html",
          },
          { name: "Sowdust", url: "https://sowdust.com" },
        ],
      },
    ],
  },
  {
    category: "Phone Number",
    subcategories: [
      {
        name: "List of country calling codes",
        icon: <i class="bx bx-file" />,
        url: "https://en.wikipedia.org/wiki/List_of_country_calling_codes",
      },
      {
        name: "Phone Number Search",
        icon: <i class="bx bx-search-alt-2" />,
        tools: [
          { name: "PhoneInfoga", url: "https://phoneinfoga.cthz.me" },
          { name: "Numverify", url: "https://numverify.com" },
          { name: "Osint Industries", url: "https://www.osint.industries" },
        ],
      },
      {
        name: "Repositories",
        icon: <i class="bx bxl-github" />,
        tools: [
          { name: "Ignorant", url: "https://github.com/megadose/ignorant.git" },
        ],
      },
    ],
  },
  {
    category: "Credential Leaks",
    subcategories: [
      {
        name: "Breach Search Engines",
        icon: <i class="bx bx-globe" />,
        tools: [
          { name: "Have I Been Pwned", url: "https://haveibeenpwned.com/" },
          { name: "DeHashed", url: "https://dehashed.com/" },
          { name: "LeakCheck", url: "https://leakcheck.io/" },
          { name: "Snusbase", url: "https://snusbase.com/" },
          { name: "Scylla.sh", url: "https://scylla.sh/" },
        ],
      },
    ],
  },
  {
    category: "Formats",
    subcategories: [
      {
        name: "Manually Edited URL",
        icon: <i class="bx bx-edit-alt" />,
        tools: [
          {
            name: "Github username",
            url: "https://api.github.com/users/<username>/events/public",
          },
          {
            name: "Corporate Email formats",
            url: "https://sites.google.com/site/emails4corporations/home",
          },
        ],
      },
      {
        name: "Search Formats",
        icon: <i class="bx bx-search-alt-2" />,
        tools: [{ name: "Email Format", url: "https://www.email-format.com" }],
      },
    ],
  },
  {
    category: "URL",
    subcategories: [
      {
        name: "Short link Cheatsheet",
        icon: <i class="bx bx-file" />,
        url: "https://seintpl.github.io/osint/short-links-verification-cheatsheet",
      },
      {
        name: "Search URL",
        icon: <i class="bx bx-search-alt-2" />,
        tools: [
          { name: "Unfurl", url: "https://dfir.blog/unfurl/" },
          { name: "Wheregoes", url: "https://wheregoes.com" },
        ],
      },
      {
        name: "Archive",
        icon: <i class="bx bx-archive" />,
        tools: [
          { name: "Archive.Today", url: "https://archive.md" },
          { name: "Google Cache", url: "https://cachedview.com" },
          { name: "Wayback Machine", url: "https://archive.org/web" },
          { name: "WebCite", url: "https://webcitation.org" },
          { name: "WikiWix", url: "https://archive.wikiwix.com/cache/" },
          { name: "CheckShortURL", url: "https://checkshorturl.com/" },
        ],
      },
    ],
  },
];

export const col2 = [
  {
    category: "IP Address",
    subcategories: [
      {
        name: "IP Geolocation",
        icon: <i class="bx bx-map-pin" />,
        tools: [
          { name: "Abuseipdb", url: "https://www.abuseipdb.com" },
          { name: "IP Geolocation API", url: "https://ipgeolocation.io" },
          { name: "IPinfo", url: "https://ipinfo.io" },
          { name: "Censys", url: "https://search.censys.io" },
          { name: "Greynoise", url: "https://viz.greynoise.io" },
          { name: "IP-API", url: "https://ip-api.com" },
          {
            name: "iknowwhatyoudownload",
            url: "https://iknowwhatyoudownload.com",
          },
          { name: "IP2Proxy", url: "https://ip2location.com" },
          { name: "infobyip", url: "https://www.infobyip.com" },
          { name: "infosniper", url: "https://infosniper.net" },
        ],
      },
      {
        name: "Repositories",
        icon: <i class="bx bxl-github" />,
        tools: [
          {
            name: "IP subnet by region",
            url: "https://github.com/ipverse/rir-ip",
          },
          {
            name: "Short link Cheatsheet",
            url: "https://github.com/sinwindie/OSINT/blob/master/IP/IP%20Address%20OSINT%20Attack%20Surface.pdf",
          },
        ],
      },
    ],
  },
  {
    category: "Documents",
    subcategories: [
      {
        name: "People Search Engines",
        icon: <i class="bx bxs-user-detail" />,
        tools: [
          { name: "UserSearch.org", url: "https://usersearch.org" },
          { name: "Pipl", url: "https://pipl.com" },
          { name: "PeekYou", url: "https://peekyou.com" },
          { name: "Whitepages", url: "https://www.whitepages.com" },
        ],
      },
    ],
  },
  {
    category: "Metadata",
    subcategories: [
      {
        name: "Image & File Metadata",
        icon: <i class="bx bxs-image" />,
        tools: [
          {
            name: "ExifTool",
            url: "https://exiftool.org/",
          },
          {
            name: "Metadata2Go",
            url: "https://www.metadata2go.com/",
          },
          {
            name: "FotoForensics",
            url: "https://fotoforensics.com/",
          },
          {
            name: "Jeffrey’s Exif Viewer",
            url: "http://exif.regex.info/exif.cgi",
          },
        ],
      },
      {
        name: "Code & Document Metadata",
        icon: <i class="bx bxs-folder-open" />,
        tools: [
          {
            name: "Get-Metadata (GitHub)",
            url: "https://github.com/mayankmkh/get-metadata",
          },
          {
            name: "Apache Tika",
            url: "https://tika.apache.org/",
          },
        ],
      },
      {
        name: "Video Metadata",
        icon: <i class="bx bxs-videos" />,
        tools: [
          {
            name: "MediaInfo",
            url: "https://mediaarea.net/en/MediaInfo",
          },
          {
            name: "FFmpeg",
            url: "https://ffmpeg.org/",
          },
          {
            name: "Forensic Video Analysis Tool (Amped FIVE)",
            url: "https://ampedsoftware.com/five",
          },
        ],
      },
    ],
  },
  {
    category: "Image",
    subcategories: [
      {
        name: "Reverse Image Search",
        icon: <i class="bx bx-image" />,
        tools: [
          { name: "Google Images", url: "https://images.google.com" },
          { name: "TinEye", url: "https://tineye.com" },
        ],
      },
    ],
  },
];

export const col3 = [
  {
    category: "Companies",
    subcategories: [
      {
        name: "Social Media Search",
        icon: <i class="bx bx-search-alt-2" />,
        tools: [
          { name: "OCCRP Aleph", url: "https://data.occrp.org" },
          {
            name: "Offshore leaks database",
            url: "https://offshoreleaks.icij.org",
          },
          { name: "OpenCorporates", url: "https://opencorporates.com" },
          { name: "Societe.ninja", url: "https://www.societe.ninja" },
        ],
      },
    ],
  },
  {
    category: "Transportation",
    subcategories: [
      {
        name: "License Plate",
        icon: <i class="bx bxs-car" />,
        tools: [
          { name: "platesmania", url: "https://platesmania.com/?&lang=en" },
        ],
      },
      {
        name: "Air Traffic",
        icon: <i class="bx bxs-plane-take-off" />,
        tools: [{ name: "flightradar", url: "https://www.flightradar24.com" }],
      },
      {
        name: "Marine Records",
        icon: <i class="bx bxs-ship" />,
        tools: [
          { name: "Marine Traffic", url: "https://www.marinetraffic.com" },
          { name: "Vessel Tracker", url: "http://www.vesseltracker.com/app" },
        ],
      },
      {
        name: "Train",
        icon: <i class="bx bxs-train" />,
        tools: [
          { name: "Openrailway map", url: "https://www.openrailwaymap.org" },
        ],
      },
    ],
  },
  {
    category: "Domain",
    subcategories: [
      {
        name: "Attack Surface",
        icon: <i class="bx bx-file" />,
        url: "https://github.com/sinwindie/OSINT/blob/master/Websites/Website%20OSINT%20Attack%20Surface.pdf",
      },
      {
        name: "Domain Search",
        icon: <i class="bx bx-search-alt-2" />,
        tools: [
          { name: "Whois Lookup", url: "https://whois.domaintools.com" },
          { name: "DomainTools", url: "https://www.domaintools.com" },
          { name: "DNS Dumpster", url: "https://dnsdumpster.com" },
          { name: "Censys", url: "https://search.censys.io" },
          { name: "ScamSearch", url: "https://scamsearch.io" },
          { name: "Hunter", url: "https://hunter.io" },
          { name: "Shodan", url: "https://www.shodan.io" },
          { name: "Greynoise", url: "https://viz.greynoise.io" },
        ],
      },
      {
        name: "Certificates",
        icon: <i class="bx bx-receipt" />,
        tools: [{ name: "crt.sh", url: "https://crt.sh" }],
      },
      {
        name: "DNS",
        icon: <i class="bx bx-network-chart" />,
        tools: [
          { name: "dns history", url: "https://dnshistory.org" },
          { name: "security trails", url: "https://securitytrails.com" },
        ],
      },
      {
        name: "Repositories",
        icon: <i class="bx bxl-github" />,
        tools: [
          {
            name: "subfinder",
            url: "https://github.com/projectdiscovery/subfinder",
          },
        ],
      },
    ],
  },
  {
    category: "People",
    subcategories: [
      {
        name: "People Search Engines",
        icon: <i class="bx bxs-user" />,
        tools: [
          { name: "UserSearch.org", url: "https://usersearch.org" },
          { name: "Pipl", url: "https://pipl.com" },
          { name: "PeekYou", url: "https://peekyou.com" },
          { name: "Whitepages", url: "https://www.whitepages.com" },
          { name: "Hunter.io", url: "https://hunter.io" },
        ],
      },
    ],
  },
];

export const col4 = [
  {
    category: { name: "Google Dorks", url: "https://www.google.com" },
    subcategories: [],
  },
  {
    category: "Useful Softwares",
    subcategories: [
      {
        name: "Data Visualisation",
        icon: <i class="bx bxs-data" />,
        tools: [
          { name: "Draw.io", url: "https://www.drawio.com" },
          { name: "Accentusoft", url: "https://www.accentusoft.com" },
          { name: "Maltego", url: "https://www.maltego.com" },
        ],
      },
      {
        name: "CSILinux",
        icon: <i class="bx bx-sidebar" />,
        url: "https://csilinux.com",
      },
      {
        name: "Tracelab's OSINT VM",
        icon: <i class="bx bx-sidebar" />,
        url: "https://www.tracelabs.org/initiatives/osint-vm",
      },
    ],
  },
  {
    category: "Username",
    subcategories: [
      {
        name: "Attack Surface",
        icon: <i class="bx bxl-github" />,
        url: "https://github.com/sinwindie/OSINT/blob/d886b9b847925bbe8f037d1fe308452aae1af9b3/Username/USERNAME%20OSINT%20Attack%20Surface.pdf",
      },
      {
        name: "Username Search",
        icon: <i class="bx bxs-user-rectangle" />,
        tools: [
          {
            name: "KnowEm",
            url: "https://chromewebstore.google.com/detail/knowem-social-media-usern/mbkgomeeoffmnhnkmngelnbfbhoggmpm",
          },
          { name: "Namechk", url: "https://namechk.com" },
          { name: "Namecheckr", url: "https://namecheckr.com" },
          { name: "What is my name", url: "https://whatsmyname.app" },
          { name: "UserSearch.org", url: "https://usersearch.org" },
          { name: "ThatsThem", url: "https://thatsthem.com" },
        ],
      },
      {
        name: "Repositories",
        icon: <i class="bx bxl-github" />,
        tools: [
          {
            name: "Sherlock",
            url: "https://github.com/sherlock-project/sherlock.git",
          },
          { name: "Maigret", url: "https://github.com/soxoj/maigret.git" },
          { name: "Marple", url: "https://github.com/soxoj/marple.git" },
        ],
      },
    ],
  },
  {
    category: "Email",
    subcategories: [
      {
        name: "Email Search",
        icon: <i class="bx bxs-envelope" />,
        tools: [
          { name: "UserSearch.org", url: "https://usersearch.org" },
          { name: "ThatsThem", url: "https://thatsthem.com" },
          { name: "Email Hunter", url: "https://hunter.io" },
          {
            name: "Email Permutator",
            url: "http://metricsparrow.com/toolkit/email-permutator/",
          },
        ],
      },
      {
        name: "Breach Data",
        icon: <i class="bx bxs-data" />,
        tools: [
          { name: "PwnedList", url: "https://pwnedlist.com" },
          { name: "Have I Been Pwned?", url: "https://haveibeenpwned.com" },
          { name: "LeakedSource", url: "https://leakedsource.com" },
        ],
      },
    ],
  },
  {
    category: "Other Tools",
    subcategories: [
      {
        name: "Various OSINT Tools",
        icon: <i class="bx bx-box" />,
        tools: [
          { name: "SpiderFoot", url: "https://www.spiderfoot.net" },
          { name: "block explorer", url: "https://www.blockexplorer.com" },
          { name: "wallet explorer", url: "https://www.walletexplorer.com" },
          { name: "Recon-ng", url: "https://github.com/lanmaster53/recon-ng" },
          { name: "OSINT Framework", url: "https://osintframework.com" },
        ],
      },
    ],
  },
];
