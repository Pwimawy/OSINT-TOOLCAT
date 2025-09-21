import ToolContainer from "../components/toolcontainer";
import { col1, col2, col3, col4 } from "../data/ToolData";

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-gray-950 text-white px-6 py-10">
      <h1 className="jetbrains-mono-header text-lg text-center mt-40 mb-4">
        OSINT ToolCat
      </h1>
      <p className="text-center text-gray-400 mb-12 vt323-regular">
        A CURATED COLLECTION OF TOOLS TO ASSIST WITH OPEN-SOURCE INTELLIGENCE
        INVESTIGATIONS
      </p>

      <div className="w-full flex justify-center jetbrains-mono-header gap-3">
        <div className="flex-1 flex flex-col gap-3">
          {col1.map((cat, i) => (
            <ToolContainer
              key={i}
              category={cat.category}
              subcategories={cat.subcategories}
            />
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-3">
          {col2.map((cat, i) => (
            <ToolContainer
              key={i}
              category={cat.category}
              subcategories={cat.subcategories}
            />
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-3">
          {col3.map((cat, i) => (
            <ToolContainer
              key={i}
              category={cat.category}
              subcategories={cat.subcategories}
            />
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-3">
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
  );
}
