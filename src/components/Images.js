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
        "https://images.indianexpress.com/2019/07/college1200.jpg",
    },
    {
      id: 2,
      images:
        "https://vit.edu.in/images/inspiring_minds6.png",
    },
    {
      id: 3,
      images:
        "https://i.ytimg.com/vi/zLW54GnJEeg/sddefault.jpg",
    },
    {
      id: 4,
      images:
        "https://kjsac.somaiya.edu.in/assets/kjsac/images/about/convocation-banners.jpg",
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
