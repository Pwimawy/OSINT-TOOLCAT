import { CategoryList, SubcategoryList, BracketItem } from "./bracket";

export const ToolContainer = ({ category, subcategories }) => {
  return (
    <div
      className="
        w-full 
        p-3 
        rounded-2xl 
        backdrop-blur-md /* frosted glass effect */
        border border-gray-700
        shadow-lg hover:shadow-xl 
        transition
        text-center
        bg-gray-900/70 
        text-white
      "
    >
      <h4 className="text-xl font-bold flex items-center gap-2 justify-center">
        {category.icon && (
          <span className="flex-shrink-0">{category.icon}</span>
        )}
        {typeof category === "object" && category.url ? (
          <a
            href={category.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            {category.name}
          </a>
        ) : (
          category
        )}
      </h4>

      <CategoryList>
        {subcategories.map((subcat, i) => (
          <BracketItem key={i} className="my-2">
            <div className="font-semibold mb-1 flex items-center gap-2">
              {subcat.icon && (
                <span className="flex-shrink-0">{subcat.icon}</span>
              )}
              {subcat.url ? (
                <a
                  href={subcat.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  {subcat.name}
                </a>
              ) : (
                subcat.name
              )}
            </div>

            {subcat.tools && (
              <SubcategoryList>
                {subcat.tools.map((tool, j) => (
                  <BracketItem key={j} className="my-1">
                    {typeof tool === "string" ? (
                      tool
                    ) : (
                      <span className="flex items-center gap-2">
                        {tool.icon && (
                          <span className="flex-shrink-0">{tool.icon}</span>
                        )}
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline"
                        >
                          {tool.name}
                        </a>
                      </span>
                    )}
                  </BracketItem>
                ))}
              </SubcategoryList>
            )}
          </BracketItem>
        ))}
      </CategoryList>
    </div>
  );
};

export default ToolContainer;
