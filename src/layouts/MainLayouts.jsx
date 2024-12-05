import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";

const MainLayouts = () => {
  return (
    <div>
      {/* nav */}
      <section>
        <NavBar></NavBar>
      </section>

      {/*banner or  slider */}
      <section>
        <Slider></Slider>
      </section>

      {/* card section */}
      {/* two extra section */}
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
