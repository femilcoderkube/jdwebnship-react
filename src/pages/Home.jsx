import Banner from "../components/Banner";
import CommonHeader from "../components/CommonHeader";
import ShopCategory from "../components/ShopCategory";

function Home() {
  return (
    <div>
      <div className="relative overflow-hidden h-[85vh]">
        <Banner />
      </div>
      <CommonHeader />

      <ShopCategory />
    </div>
  );
}

export default Home;
