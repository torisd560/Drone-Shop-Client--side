import React from 'react';
import { Carousel, Button } from 'react-bootstrap'
import slider1 from '../../../images/slider1.jpg'
import slider2 from '../../../images/slider2.jpg'
import slider3 from '../../../images/slide3.jpg'
const TopBanner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="First slide"
                />
                <Carousel.Caption className='text-start' style={{ top: '40%' }}>
                    <h4 className='fw-bold custom-text-pink' style={{ fontSize: '25px' }}>Welcome To Dronet</h4>
                    <h1 className='fw-bold' style={{ fontSize: '40px' }}>EXPLORE THE WORLD
                        <br /> WITH NEW DRONE
                        <br /> TECHNOLOGY</h1>
                    <Button className=' custom-btn'>EXPLORE MORE</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={slider2}
                    alt="Second slide"
                />

                <Carousel.Caption className='text-start' style={{ top: '40%' }}>
                    <h4 className='fw-bold custom-text-pink' style={{ fontSize: '25px' }}>Welcome To Dronet</h4>
                    <h1 className='fw-bold' style={{ fontSize: '40px' }}>EXPLORE THE WORLD
                        <br /> MOST POPULAR DRONE
                        <br /> TECHNOLOGY</h1>
                    <Button className=' custom-btn'>EXPLORE MORE</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider3}
                    alt="Third slide"
                />

                <Carousel.Caption className='text-start' style={{ top: '40%' }}>
                    <h4 className='fw-bold custom-text-pink' style={{ fontSize: '25px' }}>Welcome To Dronet</h4>
                    <h1 className='fw-bold' style={{ fontSize: '40px' }}>OUR PROFFESSIONAL
                        <br /> DRONE SERVICE
                        <br /> TECHNOLOGY</h1>
                    <Button className=' custom-btn'>EXPLORE MORE</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
};

export default TopBanner;