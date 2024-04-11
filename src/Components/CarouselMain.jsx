import React from 'react'
import Ellipseimg1 from '../Assets/Images/Ellipseimg1.png'
import Ellipseimg2 from '../Assets/Images/Ellipseimg2.png'
import Ellipseimg3 from '../Assets/Images/Ellipseimg3.png'
import Ellipseimg4 from '../Assets/Images/Ellipseimg4.png'
import Ellipseimg5 from '../Assets/Images/Ellipseimg5.png'
import Ellipseimg6 from '../Assets/Images/Ellipseimg6.png'
import Ellipseimg7 from '../Assets/Images/Ellipseimg7.png'
import Ellipseimg8 from '../Assets/Images/Ellipseimg8.png'
import Ellipseimg9 from '../Assets/Images/Ellipseimg9.png'
import Ellipseimg10 from '../Assets/Images/Ellipseimg10.png'
import Carousel from './Carousel'

function CarouselMain() {
    const imageUrls = [
        { src: Ellipseimg1 },
        { src: Ellipseimg2 },
        { src: Ellipseimg3 },
        { src: Ellipseimg4 },
        { src: Ellipseimg5 },
        { src: Ellipseimg6 },
        { src: Ellipseimg7 },
        { src: Ellipseimg8 },
        { src: Ellipseimg9 },
        { src: Ellipseimg10 },
        { src: Ellipseimg1 },
        { src: Ellipseimg2 },
        { src: Ellipseimg3 },
        { src: Ellipseimg4 },
        { src: Ellipseimg5 },
        { src: Ellipseimg6 },
        { src: Ellipseimg7 },
    ]
    return (
        <div>
            <Carousel imageUrls={imageUrls} alt={"rounded_image"} />
        </div>
    )
}

export default CarouselMain
