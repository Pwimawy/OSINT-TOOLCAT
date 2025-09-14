import ToolContainer from "../components/toolcontainer";
import { col1, col2, col3, col4 } from "../data/ToolData";

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-gray-950 text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-center mt-30 mb-4">
        OSINT ToolCat
      </h1>
      <p className="text-center text-gray-400 mb-12">
        A curated collection of tools to assist with Open-Source Intelligence
        investigations.
      </p>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl">
          <div className="flex gap-6">
            <div className="flex-1 flex flex-col gap-6">
              {col1.map((cat, i) => (
                <ToolContainer
                  key={i}
                  category={cat.category}
                  subcategories={cat.subcategories}
                />
              ))}
            </div>
            <div className="flex-1 flex flex-col gap-6">
              {col2.map((cat, i) => (
                <ToolContainer
                  key={i}
                  category={cat.category}
                  subcategories={cat.subcategories}
                />
              ))}
            </div>
            <div className="flex-1 flex flex-col gap-6">
              {col3.map((cat, i) => (
                <ToolContainer
                  key={i}
                  category={cat.category}
                  subcategories={cat.subcategories}
                />
              ))}
            </div>
            <div className="flex-1 flex flex-col gap-6">
              {col4.map((cat, i) => (
                <ToolContainer
                  key={i}
                  category={cat.category}
                  subcategories={cat.subcategories}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
