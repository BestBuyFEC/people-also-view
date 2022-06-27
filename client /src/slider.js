import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import StarRating from './stars';

function DemoCarousel({product}) {
    console.log(product) 
        return (
            <Carousel centerMode={true} centerSlidePercentage={20} showThumbs={false} showIndicators={false} showStatus={false}>
                 
                 
        {product ? product.map((list) => ( 
            <div className='lego'>
                <img src={list.img} className="image"></img>
            <p key={list.productid}> {list.name}-{list.description}</p>
            <StarRating/>
            <p>${list.price}</p>
            <button value={list.productid}>Compare</button>
            </div>
        )): null}
        
            </Carousel>
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