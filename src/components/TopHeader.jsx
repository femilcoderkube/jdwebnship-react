import { useTheme } from "../contexts/ThemeContext";

function TopHeader() {
  const { theme, topHeaderTextColor } = useTheme();

  const topHeaderBgColor = theme?.topHeaderBackgroundColor || "#f8f9fa";

  return (
    <div
      className="top-header py-[15px] text-sm border-b border-gray-200"
      style={{
        backgroundColor: topHeaderBgColor,
        color: topHeaderTextColor,
        fontFamily: theme?.fontFamily || "system-ui, -apple-system, sans-serif",
      }}
    >
      <div className="w-[100%] px-[60px] mx-auto">
        <div className="flex items-center justify-center mx-auto">
          <span className="font-medium px-[60px] text-[16px]">All over India Delivery Available.</span>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
