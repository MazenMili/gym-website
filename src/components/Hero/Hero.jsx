import TitleBg from "../../images/pricing/titlebg.svg";
import MainButton from "../MainButton";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <>
      <section
        id="home"
        className="hero-section w-full h-screen min800:flex min800:justify-center min800:text-center"
        style={{ direction: "rtl", textAlign: "right" }}
      >
        <div className="container-hero">
          {/* hero section */}
          <div
            className="flex flex-col text-white
            absolute hero-text min800:items-center min800:-right-[220px] min620:-right-[200px] min800:w-[80%] min540:-right-[170px] min450:-right-[140px] min375:-right-[110px]"
          >
            <h1 className="font-bold text-[48px] uppercase mb-[40px] min450:text-[40px] text-right">
              أهــلا أنا نجـــاة
              <br />
              <span>
                <Typewriter
                  words={[
                    "مدربـــة شخصية",
                    "أقدم اشتراك وجبـات",
                    "خبرتي سبعة سنين",
                    "سجـل وبغير حياتك",
                  ]}
                  cursor
                  cursorStyle="|"
                  typeSpeed={120}
                  deleteSpeed={80}
                  cursorColor='red'
                  
                  // delaySpeed={1000}
                />
                
              </span>
              
            </h1>
            {/* <div> */}
            <MainButton
              color={`text-black`}
              bg={`bg-white`}
              text="لمعـرفة المزيـد"
              // goTo="/classes"
            />
            {/* </div> */}
          </div>
        </div>
        {/* socials */}
        <div
          className="flex flex-row-reverse -rotate-90 text-white
          absolute top-2/4 right-0 items-center min800:hidden"
        >
          <p className="uppercase  text-3xl font-bold tracking-widest">Najat</p>
          <span className="w-[35px] bg-[#FF0336] h-[2.5px] mr-6"></span>
          <div className="text-white gap-7 flex mr-7 ">
            <i className="fa-brands rotate-90 hover:text-[#FF0336] fa-facebook text-3xl cursor-pointer ease-in duration-200 "></i>
            <i className="fa-brands rotate-90 hover:text-[#FF0336] fa-twitter text-3xl cursor-pointer ease-in duration-200"></i>
            <i className="fa-brands rotate-90 hover:text-[#FF0336]  fa-linkedin-in text-3xl cursor-pointer ease-in duration-200 "></i>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
