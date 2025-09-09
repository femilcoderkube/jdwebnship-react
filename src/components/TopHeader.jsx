import { useTheme } from "../contexts/ThemeContext";

function TopHeader() {
  const { theme, topHeaderTextColor } = useTheme();

  const topHeaderBgColor = theme?.topHeaderBackgroundColor || "#f8f9fa";

  return (
    <div
      className="top-header py-[10px] sm:py-[12px] md:py-[15px] text-xs sm:text-sm border-b border-gray-200"
      style={{
        backgroundColor: topHeaderBgColor,
        color: topHeaderTextColor,
        fontFamily: theme?.fontFamily || "system-ui, -apple-system, sans-serif",
      }}
    >
      <div className="w-[100%] px-4 sm:px-6 md:px-10 lg:px-[60px] mx-auto">
        <div className="flex items-center justify-center mx-auto text-center">
          <span className="font-medium text-[12px] sm:text-[14px] md:text-[16px]">
            All over India Delivery Available.
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
