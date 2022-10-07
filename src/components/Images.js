import React from "react";
import { Carousel } from "react-responsive-carousel";
import './contact.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './home.css';
const Images = () => {
  const images = [
    {
      id: 1,
      images:
        "https://images.unsplash.com/photo-1664716476660-123691a56190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8QkpKTXR0ZURKQTR8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=60",
    },
    {
      id: 2,
      images:
        "https://images.unsplash.com/photo-1664715934138-5b7621936796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8QkpKTXR0ZURKQTR8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=60",
    },
    {
      id: 3,
      images:
        "https://images.unsplash.com/photo-1665049626324-791d0a86e8cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1200&q=60",
    },
    {
      id: 4,
      images:
        "https://images.unsplash.com/photo-1664993981705-cba438d3039f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1200&q=60",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 3,
    },
    midlap: {
      breakpoint: { max: 1300, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel
        showIndicators={true}
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        interval={4000}
        infiniteLoop={true}
        swipeable={false}
        autoPlay={true}
        className="mainco"
        
      >
        {images.map((s) => (
          <div key={s.id} className="jate">
            {/* <figure class="snip1192"> */}
                
                <img src={s.images} className="imag" alt="sample87" />
                
              {/* <blockquote>{s.testimonial} </blockquote>SS */}
              {/* <div class="author">
                <img
                  src={user1}
                  alt="user icon"
                  style={{ height: "85px", width: "85px" }}
                />
                <h5>{s.name} </h5>
              </div> */}
            {/* </div></figure> */}
          </div>
        ))}

        {/* </div> */}
      </Carousel>
    </>
  );
};

export default Images;
