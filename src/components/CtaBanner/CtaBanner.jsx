import MainButton from "../MainButton";

function CtaBanner() {
  return (
    <>
      <section
        className="cta-section w-full h-auto "
        style={{ direction: "rtl", textAlign: "right" }}
      >
        <div className="container page-padding py-[70px] text-white">
          <h2 className="text-[36px] font-bold">للتواصــل والاستفسـارات</h2>
          <h3 className="text-[28px] font-bold mb-20">
            <span className="text-[#FF0336]"></span> 0536774620
          </h3>
          {/* <MainButton
            color={`text-white`}
            bg={`bg-[#ff0336]`}
            text="اضغط لتصل إلى الواتس اب"
            arrowColor={`text-white`}
            cN="pricing-cta cta-banner-btn"
            goTo="https://wa.me/966500175890"
          /> */}
          <a
            href="https://wa.me/9660536774620"
            className="text-white bg-[#ff0336] pricing-cta cta-banner-btn text-[20px]"
            // style= cN pricing-cta cta-banner-btn
          >
            اضغط للوصول إلى الواتساب
          </a>
        </div>
      </section>
    </>
  );
}

export default CtaBanner;
