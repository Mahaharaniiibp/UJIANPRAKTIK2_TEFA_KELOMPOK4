import React from "react";
import img from "../assets/Home1.png";
import "./index.css";

const Home = () => {
  return (
    <section id="home">
      <div id="header">
        {/* Image container */}
        <div>
          <img
            src={img}
            alt=""
            className="w-full mt-0 md/w-1/2 h-full object-cover "
          />
        </div>
        {/* End of image container */}

        {/* Text container */}
        <div className="text-container">
          <h2>Welcome to the world of Fourniture</h2>

          <div className="text-h3 h-screen">
            <h3>
              <br />
              We create high quality handcrafted all-weather furniture and
              decorative products designed for residential and commercial
              spaces. We present a product range that stands apart from the
              mainstream design philosophy in terms of aesthetic, functionality
              and durability.
            </h3>
          </div>
        </div>
      </div>
      {/* End of text container */}
    </section>
  );
};

export default Home;
