import { Link } from "react-router-dom";

function NavList() {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "none",
    });
  };
  return (
    <>
      <ul className="flex gap-9 text-white text-[16px] font-medium xl:none">
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/contact"}>
            تواصل معي
          </Link>
        </li>

        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/gallery/page-1"}>
            صالة عرض{" "}
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        ></li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/blog"}>
            مدونـة
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/about"}>
            مـن أنا
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <a href="/">الصفحة الرئيسية</a>
        </li>
      </ul>
    </>
  );
}

export default NavList;
