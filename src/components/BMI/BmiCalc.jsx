import { useState } from "react";

function BmiCalc() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = weight / ((height * height) / 10000);
      setBmi(bmi.toFixed(1));

      // logic for message
      if (bmi < 20) {
        setMessage("Underweight");
      } else if (bmi >= 20 && bmi < 27) {
        setMessage("Normal");
      } else {
        setMessage("Overweight");
      }
    }
  };

  return (
    <>
      <section
        className="bmi-section py-[60px] relative "
        style={{ direction: "rtl", textAlign: "right" }}
      >
        <div className="container page-padding ">
          <span className="w-full h-full absolute bg-transparent min620:bg-[#00000063] top-0 left-0"></span>
          <div className="text-white w-[520px] min620:w-[100%] relative">
            <h2 className="text-[40px] font-bold leading-[1.1] mb-8">
              حاسبة مؤشر كتلة الجسم <span className="text-[#FF0336]">BMI</span>
            </h2>
            <p className="text-[16px] text-[#a1a1a1] min620:text-white">
              يمكنك تحديد مؤشر كتلة جسمك بسهولة باستخدام أداة الحساب الدقيقة
              لدينا.
            </p>
            <div className="flex flex-col">
              <form className="flex w-full gap-6 h-[50px] mt-10 ">
                <input
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-[50%] bg-transparent text-[14px] border-2 border-[#ffffff7d] pl-6 min450:bg-white min450:text-black"
                  type="text"
                  placeholder="وزنك / kg"
                ></input>
                <input
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-[50%] bg-transparent text-[14px] border-2 border-[#ffffff7d] pl-6 min450:bg-white min450:text-black"
                  type="text"
                  placeholder="طولك / cm"
                ></input>
              </form>
              {/* output */}
              <p className="mt-10 gap-3 text-[16px] font-medium flex items-center w-full ">
                <span className="w-1/2">
                  مؤشر كتلة الجسم: &nbsp;
                  <span className="text-[#ff0336]">{bmi}</span>
                </span>
                <span className="w-1/2">
                  وزنـك: &nbsp;
                  <span className="text-[#ff0336]">{message}</span>
                </span>
              </p>
              <button
                onClick={calcBmi}
                style={{ transition: "all 0.3s" }}
                type="submit"
                className="text-[24px] uppercase font-bold mt-10 bg-[#323232] w-[150px] h-[50px] hover:bg-[#FF0336]"
              >
                احسب
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BmiCalc;
