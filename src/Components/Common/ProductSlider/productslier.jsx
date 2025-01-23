import React from 'react';
import Slider from "react-slick";
// Import Slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Images
import Product1 from "../../Assets/images/products/s11.jpg";
import Product2 from "../../Assets/images/products/s4.jpg";
import Product3 from "../../Assets/images/products/s5.jpg";
import Product4 from "../../Assets/images/products/s7.jpg";

const ProductSlider = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      const thumbnails = [Product1, Product2, Product3, Product4];
      return (
        <a>
          <img 
            src={thumbnails[i]} 
            alt={`Thumbnail ${i + 1}`} 
            // className='gap-3'
            style={{ width: "50px", height: "50px", borderRadius: "5px" }} 
          />
        </a>
      );
    },
    dotsClass: "slick-dots slick-thumb",
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className='product-img'>
          <img width={500} height={500} className=''  src={Product1} alt="Product 1" />
        </div>
        <div className='product-img'>
          <img width={500} height={500} src={Product2} alt="Product 2" />
        </div>
        <div className='product-img'>
          <img width={500} height={500} src={Product3} alt="Product 3" />
        </div>
        <div className='product-img'>
          <img width={500} height={500} src={Product4} alt="Product 4" />
        </div>
      </Slider>
    </div>
  );
};

export default ProductSlider;
