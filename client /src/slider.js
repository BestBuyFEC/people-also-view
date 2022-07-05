import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import StarRating from './stars';

function DemoCarousel({product}) {
    console.log(product) 
        return (

            <>
            <h2 className='mtcTitle'>More to consider</h2>
            <hr></hr>
            <Carousel className='mtcCarousel' centerMode={true} centerSlidePercentage={35} showThumbs={false} showIndicators={false} showStatus={false}>
                 
                 
        {product ? product.map((list) => ( 
            <div className='considerProductContainer'>
                <div className='sliderImage'>
                    <img src={list.img} className="image"></img>
                </div>
                <div className='lego'>
                    <p className='mtcProductTitle' key={list.productid}> {list.name}-{list.description}</p>
                    <StarRating/>
                    <p className='mtcPrice'>${list.price}</p>
                    <div className='mtcCompareInput'>
                        <input className='sliderCheckbox' type='checkbox' value={list.productid}/>
                        <span className='mtcSpanCompare'>Compare</span>
                    </div>
                </div>
            </div>
        )): null}
        
            </Carousel>
            </>
        );
    
};
export default DemoCarousel
// import React, { Component } from "react";
// import Slider from "react-slick";
// import StarRating from './stars';

// function MultipleItems({product}){
//    {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 2,
//       slidesToScroll: 3
//     };
//     return (
//       <div>
//         <h2> Multiple items </h2>
//         <Slider {...settings}>
//         {product ? product.map((list) => ( 
//             <div className='lego'>
//                 <img src={list.img} className="image"></img>
//             <p key={list.productid}> {list.name}-{list.description}</p>
//             <p>${list.price}</p>
//             <StarRating/>
//             <button value={list.productid}>Compare</button>
//             </div>
//         )): null}
//         </Slider>
//       </div>
//     );
//   }
// }
// export default MultipleItems