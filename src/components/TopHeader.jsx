import { useTheme } from "../contexts/ThemeContext";

function TopHeader() {
  const { theme, topHeaderTextColor } = useTheme();

  const topHeaderBgColor = theme?.topHeaderBackgroundColor || "#f8f9fa";

  return (
    <div
      className="top-header py-2 px-4 text-sm border-b border-gray-200"
      style={{
        backgroundColor: topHeaderBgColor,
        color: topHeaderTextColor,
        fontFamily: theme?.fontFamily || "system-ui, -apple-system, sans-serif",
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="left-section flex items-center gap-6">
          <span className="font-medium">🚀 Welcome to My Vite App</span>
          <span className="text-xs opacity-75">
            Free shipping on orders over $50
          </span>
        </div>
        <div className="right-section flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span>📧</span>
            <span className="text-xs">contact@example.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📞</span>
            <span className="text-xs">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🕒</span>
            <span className="text-xs">Mon-Fri 9AM-5PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
