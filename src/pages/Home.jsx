import Advertisment from "../components/Advertisment";
import Banner from "../components/Banner";
import CommonHeader from "../components/CommonHeader";
import ProductSection from "../components/ProductSection";
import ShopCategory from "../components/ShopCategory";

function Home() {
  return (
    <div>
      <div className="relative overflow-hidden h-[85vh]">
        <Banner />
      </div>
      <CommonHeader />
      <ShopCategory />
      <Advertisment />
      <ProductSection />
    </div>
  );
}

export default Home;
