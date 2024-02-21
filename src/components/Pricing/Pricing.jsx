import TitleRed from "../../images/who-we-are/title-bg.svg";
import BgText from "../../images/pricing/bg-text.png";
import BgDumbell from "../../images/pricing/bg-dumbell.png";
import PricingBox from "./PricingBox";

import Img1 from "../../images/pricing/img1.jpg";
import Img2 from "../../images/pricing/img2.jpg";
import Img3 from "../../images/pricing/img3.jpg";

function Pricing() {
  return (
    <>
      <section
        id="pricing"
        className="pricing-section relative"
        style={{ direction: "rtl", textAlign: "right" }}
      >
        <div className="container page-padding py-[120px] ">
          <img src={BgText} className="left-0 absolute" alt="bg_img" />
          {/* title div -- */}
          <div className="flex flex-col text-center relative items-center">
            <h2 className="text-[34px] font-bold mb-4">
              نوفـر لك أفضل الخطط للتدريب الشخصي{" "}
            </h2>
          </div>
          {/* pricing boxes */}
          <div className="flex gap-10 mt-32 relative z-[2] md1000:flex-col md1000:items-center ">
            <PricingBox img={Img1} price="350" category={"شهر واحد"} />
            <PricingBox img={Img2} price="700" category={"ثلاثـة أشهر"} />
            <PricingBox img={Img3} price="1050" category={"ستة أشهر"} />
          </div>
          <img
            src={BgDumbell}
            alt="bg_icon"
            className="right-0 bottom-0 absolute z-[1]"
          />
        </div>
        {/* //التغذية */}
        <div className="container page-padding py-[120px] ">
          <img src={BgText} className="left-0 absolute" alt="bg_img" />
          {/* title div -- */}
          <div className="flex flex-col text-center relative items-center">
            <h2 className="text-[34px] font-bold mb-4">
              نوفر لك أفضل الوجبات الصحية بأقل الأسعار
            </h2>
            <h2 className="text-[34px] font-bold mb-4 text-red-500">
              للاشتراك الشهري فقط{" "}
            </h2>
          </div>
          {/* pricing boxes */}
          <div className="flex gap-10 mt-32 relative z-[2] md1000:flex-col md1000:items-center ">
            <PricingBox img={Img1} price="350" category={"شهر واحد"} />
            <PricingBox img={Img2} price="700" category={"ثلاثـة أشهر"} />
            <PricingBox img={Img3} price="1050" category={"ستة أشهر"} />
          </div>
          <img
            src={BgDumbell}
            alt="bg_icon"
            className="right-0 bottom-0 absolute z-[1]"
          />
        </div>
      </section>
    </>
  );
}

export default Pricing;
