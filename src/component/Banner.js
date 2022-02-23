import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


 const photos=[
     {
         name:'p1',
         url:"https://wallpaperaccess.com/full/760289.jpg"
     },
     {
        name:'p2',
        url:"https://wallpaperaccess.com/full/760289.jpg"
    },
    {
        name:'p3',
        url:"https://wallpaperaccess.com/full/760289.jpg"
    },
    {
        name:'p4',
        url:"https://wallpaperaccess.com/full/760289.jpg"
    },
    {
        name:'p5',
        url:"https://wallpaperaccess.com/full/760289.jpg"
    },
    {
        name:'p6',
        url:"https://wallpaperaccess.com/full/760289.jpg"
    }
 ]
function Baanner(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        className:"slides"
      };
    return(
        <div className="slide">
        <div className="banner" style={{width:"100%"}}>
        <Slider {...settings}>
        {
            photos.map((photo)=>{
                return(
                    <div className="picc">
                        <img src={photo.url} alt={photo.name} />
                    </div>
                )
            })
        }
      </Slider>
      </div>
      </div>
    );
}

export default Baanner;