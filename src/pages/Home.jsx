import Banner from "../components/Banner";
import CommonHeader from "../components/CommonHeader";

function Home() {
  return (
    <div>
      <div className="relative overflow-hidden h-[85vh]">
        <Banner />
      </div>
      <CommonHeader />
    </div>
  );
}

export default Home;
