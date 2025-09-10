import { Link, useLocation, useParams } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

function CommonHeader({ className = "", ...props }) {
  const { theme, bottomFooterTextColor } = useTheme();
  const { id } = useParams();

  const location = useLocation();

  // Dynamic content based on route
  let innerContent;
  if (location.pathname === "/") {
    innerContent = (
      <div className="py-[40px] lg:py-[60px] -mt-[70px] z-10 relative rounded-b-none rounded-3xl">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-[60px]">
          <div className="grid md:grid-cols-3 xxl:px-[248px]">
            <div className="px-[40px] lg:px-[60px] py-[30px] lg:py-[60px] md:border-0 md:border-r">
              <h1 className="mb-4 text-[18px] lg:text-[24px] font-bold">
                Free Shipping
              </h1>
              <p className="text-lg font-normal">
                Upgrade your style today and get FREE shipping on all orders!
                Don't miss out.
              </p>
            </div>
            <div className="px-[40px] lg:px-[60px] py-[30px] lg:py-[60px] md:border-0 md:border-r">
              <h1 className="mb-4 text-[18px] lg:text-[24px] font-bold">
                Secure Payment
              </h1>
              <p className="text-lg font-normal">
                Your security is our priority. Your payments are secure with us.
              </p>
            </div>
            <div className="px-[40px] lg:px-[60px] py-[30px] lg:py-[60px]">
              <h1 className="mb-4 text-[18px] lg:text-[24px] font-bold">
                Satisfaction Guarantee
              </h1>
              <p className="text-lg font-normal">
                Shop confidently with our Satisfaction Guarantee: Love it or get
                a refund.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (location.pathname === "/about") {
    innerContent = (
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-bold">About Page Header</h1>
        <nav className="flex gap-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </nav>
      </div>
    );
  } else if (location.pathname === "/product") {
    innerContent = (
      <div className="xxl:px-[248px]">
        <div className="px-[40px] lg:px-[60px] py-[30px] lg:py-[60px] md:border-0 md:border-r">
          <h1 className="mb-4 text-[18px] lg:text-[24px] font-bold">
            Women's Watch
          </h1>
          <p className="text-lg font-normal">
            Elevate your look with precision and class.
          </p>
        </div>
      </div>
    );
  } else if (location.pathname === "/shop") {
    innerContent = (
      <div className="xxl:px-[248px]">
        <div className="px-[40px] lg:px-[60px] py-[30px] lg:py-[60px] md:border-0 md:border-r">
          <nav class="flex justify-center" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li class="inline-flex items-center font-medium me-4">
                <a href="#" class="inline-flex items-center">
                  Home
                </a>
              </li>
              <li aria-current="page">
                <div class="flex items-center border-l opacity-35 font-medium ps-4">
                  <span class="ms-1 text-sm">Categories</span>
                </div>
              </li>
            </ol>
          </nav>

          <h1 className="text-[30px] lg:text-[42px] font-bold">
            Shop By Category
          </h1>
        </div>
      </div>
    );
  } else if (location.pathname === `/product/${id}`) {
    innerContent = (
      <div className="xxl:px-[248px]">
        <div className="px-[40px] lg:px-[60px] py-[30px] lg:py-[60px] md:border-0 md:border-r">
          <h1 className="mb-4 text-[18px] lg:text-[24px] font-bold">
            Women's Watch
          </h1>
          <p className="text-lg font-normal">
            Elevate your look with precision and class.
          </p>
        </div>
      </div>
    );
  } else {
    innerContent = (
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-bold">Default Header</h1>
        <nav className="flex gap-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </nav>
      </div>
    );
  }

  return (
    <section
      className={`${
        location.pathname === "/"
          ? "z-10 relative rounded-b-none rounded-3xl"
          : "z-10 relative"
      }`}
      style={{
        backgroundColor: theme?.bottomFooterBackgroundColor || "#ffffff",
        color: bottomFooterTextColor || "#111111",
        fontFamily: theme?.fontFamily || "system-ui, -apple-system, sans-serif",
      }}
      {...props}
    >
      {innerContent}
    </section>
  );
}

export default CommonHeader;
