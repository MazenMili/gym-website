import TitleRed from "../../images/who-we-are/title-bg.svg";
import BgIcon from "../../images/gallery/bg-icon.png";

function Gallery() {
  return (
    <>
      <section id="gallery" className="relative min450:hidden">
        <img
          src={BgIcon}
          alt="bg_img"
          className="absolute top-[30px] right-0"
        />

        <div className="container page-padding py-[40px]">
          {/* title div -- */}
          <div className="flex flex-col text-center relative items-center ">
            <h2 className="text-[34px] font-bold mb-4">مسـاحة للانجـازات </h2>
            <p className="text-[#646464] font-medium text-[15px] ">
              تتميز هذه المساحة لعرض آراء ونتائج المشتـركين مـن التدريـب الشخصي
              خـلال الفترات السابقة
            </p>
          </div>

          {/* gallery */}
          <div className="gallery-grid py-24 w-full h-auto relative ">
            <div id="item-0"></div>
            <div id="item-1"></div>
            <div id="item-2"></div>
            <div id="item-3"></div>
            <div id="item-4"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
