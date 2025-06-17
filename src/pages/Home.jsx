import React from "react";

export default function Home() {
  return (
    <main className="pt-[100vh] bg-gray-100 px-4 py-8 font-[Ubuntu]">
      <div className="max-w-7xl mx-auto grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* TOOL CATEGORY */}
        <section className="space-y-6">
          {/* Phone Number */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-4">
              <i className="bx bx-phone"></i> Phone Number
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <i className="bx bx-file"></i>{" "}
                <a
                  href="https://en.wikipedia.org/wiki/List_of_country_calling_codes"
                  className="text-blue-600 hover:underline"
                >
                  List of country calling codes
                </a>
              </li>
              <li>
                <i className="bx bx-search-alt-2"></i> Phone Number Search
                <ul className="ml-4 list-disc">
                  <li>
                    <a href="https://phoneinfoga.cthz.me">PhoneInfoga</a>
                  </li>
                  <li>
                    <a href="https://numverify.com">Numverify</a>
                  </li>
                  <li>
                    <a href="https://www.osint.industries">osint industries</a>
                  </li>
                </ul>
              </li>
              <li>
                <i className="bx bxl-github"></i> Repositories
                <ul className="ml-4 list-disc">
                  <li>
                    <a href="https://github.com/megadose/ignorant.git">
                      ignorant
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Messaging */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-4">
              <i className="bx bx-envelope"></i> Messaging
            </h2>
            <ul className="text-sm">
              <li>
                <i className="bx bx-chat"></i> Leaked Messages
                <ul className="ml-4 list-disc">
                  <li>
                    <a href="https://www.lastpass.com/features/dark-web-monitoring">
                      Leak Checker
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Formats */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-4">
              <i className="bx bx-expand-horizontal"></i> Formats
            </h2>
            <ul className="text-sm space-y-2">
              <li>
                <i className="bx bx-edit-alt"></i> Manually Edited URL
                <ul className="ml-4 list-disc">
                  <li>
                    <a href="https://api.github.com/users/<username>/events/public">
                      Github username
                    </a>
                  </li>
                  <li>
                    <a href="https://sites.google.com/site/emails4corporations/home">
                      Corporate Email formats
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <i className="bx bx-search-alt-2"></i> Search Formats
                <ul className="ml-4 list-disc">
                  <li>
                    <a href="https://www.email-format.com">Email Format</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Add more categories here similarly... */}
        </section>
      </div>

      <div className="max-w-4xl mx-auto mt-12 p-6 bg-white rounded-xl shadow">
        <p className="text-sm text-gray-600">
          <strong>Disclaimer:</strong> The OSINT tools listed here are intended
          for ethical use in accordance with local and international laws.
          Unauthorized use may result in legal consequences. Always ensure you
          have proper authorization.
        </p>
      </div>
    </main>
  );
}
