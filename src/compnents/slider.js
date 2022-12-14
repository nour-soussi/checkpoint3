import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
function ControllerCarousel() {
        const [index, setIndex] = useState(0);
    
        const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        };
    
        return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="im1.png"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="im2.jpg"
                alt="Second slide"
            />
    
            <Carousel.Caption>
                <h3>Second slide label</h3>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="im3.png"
                alt="Third slide"
            />
    
            <Carousel.Caption>
                <h3>Third slide label</h3>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        );
    }
export default ControllerCarousel;