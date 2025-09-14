export const Bracket = ({
  color = "#fff",
  thickness = 2,
  padding = 5,
  radius = 12,
  className = "",
  style = {},
  children,
}) => {
  const bracketStyle = {
    display: "block",
    paddingLeft: padding,
    borderLeft: `${thickness}px solid ${color}`,
    borderTopLeftRadius: radius,
    borderBottomLeftRadius: radius,
    boxSizing: "border-box",
    textAlign: "left",
    backgroundClip: "padding-box",
    color: color,
  };

  return (
    <ul className={className} style={{ ...bracketStyle, ...style }}>
      {children}
    </ul>
  );
};

export const CategoryList = (props) => (
  <Bracket color="#fff" thickness={3} padding={20} radius={14} {...props} />
);

export const SubcategoryList = (props) => (
  <Bracket color="#ddd" thickness={2} padding={12} radius={10} {...props} />
);

export const BracketItem = ({ className = "", style = {}, children }) => (
  <li
    className={className}
    style={{
      marginTop: 4,
      marginBottom: 4,
      color: "#fff",
      ...style,
    }}
  >
    {children}
  </li>
);

export default Bracket;
