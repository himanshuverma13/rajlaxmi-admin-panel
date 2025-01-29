import React, { useContext, useEffect, useState } from 'react';
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
import { GetProductAPI } from '../APIs/api';

const ProductSlider = ({prdImg}) => {
    const { CurrentProductDetails, FirstPrdEdit} = useContext(UserContext);
      
         const [productDetails, setProductDetails] = useState([]);
      
        const fetchProducts = async () => {
          const response = await GetProductAPI();
          setProductDetails(response?.products);
        };
        
        useEffect(() => {
          fetchProducts();
        }, []);
    
    // Slider settings
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: function (i) {
            const thumbnails = prdImg
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
                {prdImg?.map((item)=>{
                    return(<div className='product-img'>
                    <img  className='rounded-3 w-100' src={item} alt="Product image" />
                </div>)
                })}
   
            </Slider>
        </div>
    );
};

export default ProductSlider;
