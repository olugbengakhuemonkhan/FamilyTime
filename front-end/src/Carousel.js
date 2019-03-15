import React from 'react';
import Slider from 'react-slick';


function Carousel(props){
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
    return(
        <Slider {...settings}>
            <div className="slick-image" className="responsive-img"><img src="/images/homepage1_1.jpg" alt="" /></div>
            <div className="slick-image" className="responsive-img"><img src="/images/homepage1_2.jpg" alt=""/></div>
            <div className="slick-image" className="responsive-img"><img src="/images/homepage1_3.jpg" alt=""/></div>
            <div className="slick-image" className="responsive-img"><img src="/images/homepage1_4.jpg" alt=""/></div>
            <div className="slick-image" className="responsive-img"><img src="/images/homepage1_5.jpg" alt="" /></div>
            <div className="slick-image" className="responsive-img"><img src="/images/homepage1_6.jpg" alt="" /></div>
            <div className="slick-image" className="responsive-img"><img src="/images/homepage1_7.jpg" alt="" /></div>
            <div className="slick-image" className="responsive-img"><img src="/images/homepage1_8.jpg" alt="" /></div>
            <div className="slick-image" className="responsive-img"><img src="/images/homepage1_9.jpg" alt="" /></div>
            <div className="slick-image" className="responsive-img"><img src="/images/homepage1_10.jpg" alt="" /></div>
            <div className="slick-image" className="responsive-img"><img src="/images/homepage1_11.jpg" alt="" /></div>
            <div className="slick-image" className="responsive-img"><img src="/images/homepage1_12.jpg" alt="" /></div>
            <div className="slick-image" className="responsive-img"><img src="/images/homepage1_13.jpg" alt="" /></div>
            <div className="slick-image" className="responsive-img"><img src="/images/homepage1_14.jpg" alt="" /></div>
            <div className="slick-image" className="responsive-img"><img src="/images/homepage1_15.jpg" alt="" /></div>
            <div className="slick-image" className="responsive-img"><img src="/images/homepage1_17.jpg" alt="" /></div>
            <div className="slick-image" className="responsive-img"><img src="/images/homepage1_18.jpg" alt="" /></div>
            <div className="slick-image" className="responsive-img"><img src="/images/homepage1_19.jpg" alt="" /></div>
            <div className="slick-image" className="responsive-img"><img src="/images/homepage1_20.jpg" alt="" /></div>
            <div className="slick-image" className="responsive-img"><img src="/images/homepage1_21.jpg" alt="" /></div>
            <div className="slick-image" className="responsive-img"><img src="/images/homepage1_22.jpg" alt="" /></div>
            <div className="slick-image" className="responsive-img"><img src="/images/homepage1_23.jpg" alt="" /></div>
            <div className="slick-image" className="responsive-img"><img src="/images/homepage1_24.jpg" alt="" /></div>
            <div className="slick-image" className="responsive-img"><img src="/images/homepage1_25.jpg" alt="" /></div>
            <div className="slick-image" className="responsive-img"><img src="/images/homepage1_26.jpg" alt="" /></div>
            <div className="slick-image" className="responsive-img"><img src="/images/homepage1_27.jpg" alt="" /></div>
        </Slider>
    )
}
export default Carousel;
