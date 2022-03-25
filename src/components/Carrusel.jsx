import React from 'react'
import { Carousel } from 'react-bootstrap'
import ffxv1 from '../assets/ffxv1.png';
import ffxv2 from '../assets/ffxv2.png';
import ffxv3 from '../assets/ffxv3.png';
import ffxv4 from '../assets/ffxv4.png';
import ffxv5 from '../assets/ffxv5.png';

const Carrusel = () => {
    return (
        <>
            <Carousel fade style={{backgroundColor: "black"}}>
                <Carousel.Item  style={{margin:"auto", width: "auto", height:"auto"}}>
                    <img
                        className="d-block w-100"
                        src= {ffxv1}
                        alt="First slide"
                        style={{height: 400}}
                    />
                    <Carousel.Caption>
                        <h5>Battle Scene</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{margin:"auto", width: "auto", height: "auto"}}>
                    <img
                        className="d-block w-100"
                        src={ffxv2}
                        alt="Second slide"
                        style={{height: 400}}
                    />
                    <Carousel.Caption>
                        <h5>Open World</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{margin:"auto", width: "auto", height: "auto"}}>
                    <img
                        className="d-block w-100"
                        src={ffxv3}
                        alt="Third slide"
                        style={{height: 400}}
                    />
                    <Carousel.Caption>
                        <h5>Battle Scene 2</h5>
                    </Carousel.Caption>
                </Carousel.Item >
                <Carousel.Item style={{margin:"auto", width: "auto", height: "auto"}}>
                    <img
                        className="d-block w-100"
                        src={ffxv4}
                        alt="Third slide"
                        style={{height: 400}}
                    />
                    <Carousel.Caption>
                        <h5>Battle Scene 3</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{margin:"auto", width: "auto", height: "auto"}}>
                    <img
                        className="d-block w-100"
                        src={ffxv5}
                        alt="Third slide"
                        style={{height: 400}}
                    />
                    <Carousel.Caption>
                        <h5>Member's Group</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>
    )
}

export default Carrusel