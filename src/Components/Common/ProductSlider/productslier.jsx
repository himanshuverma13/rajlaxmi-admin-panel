import React, { useContext } from 'react';
import Slider from "react-slick";
// Import Slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Images
import Product1 from "../../Assets/images/products/s11.jpg";
import Product2 from "../../Assets/images/products/s4.jpg";
import Product3 from "../../Assets/images/products/s5.jpg";
import Product4 from "../../Assets/images/products/s7.jpg";
import { UserContext } from '../UseContext/usecontext';

const ProductSlider = () => {
      const { CurrentProductDetails } = useContext(UserContext);
      console.log('CurrentProductDetails: ', CurrentProductDetails);
    
    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: function (i) {
            const thumbnails = [CurrentProductDetails?.product_image, Product2, Product3, Product4];
            return (
                <a>
                    <img
                        src={thumbnails[i]}
                        alt={`Thumbnail ${i + 1}`}
                        // className='gap-3' 
                        style={{
                            width: "50px", height: "50px", borderRadius: "5px", objectFit: "cover",
                            margin: "0 5px",
                            cursor: "pointer"
                        }}

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
                    <img  className='rounded-3 w-100' src={CurrentProductDetails?.product_image} alt="Product 1" />
                </div>
                <div className='product-img'>
                    <img  className='rounded-3 w-100' src={Product2} alt="Product 2" />
                </div>
                <div className='product-img'>
                    <img  className='rounded-3 w-100' src={Product3} alt="Product 3" />
                </div>
                <div className='product-img'>
                    <img  className='rounded-3 w-100' src={Product4} alt="Product 4" />
                </div>
            </Slider>
        </div>
    );
};

export default ProductSlider;
