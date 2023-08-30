import React from "react";
// import data
import { overview } from "../data";

const Brands = () => {
  // destructure overview data
  const { brands } = overview;

  return (
    <section className="py-9">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between space-y-6">
        {/* brands */}
        {brands.map((item, index) => {
          // destructure item
          const { image, delay } = item;
          return (
            <div key={index} data-aos="fade-up" data-aos-delay={delay}>
              {/* brand image */}
              <img src={image} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
