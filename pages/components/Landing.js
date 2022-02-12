import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Landing = () => {
    return (
        <Carousel >
                <div>
                    <img src="/debajyoti.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="/Education.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="/rajdeep.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel >
  )
}

export default Landing