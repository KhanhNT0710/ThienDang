import React from 'react'
import { Row, Col } from 'antd'
import './style.scss'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import DynamicCarousel from '../CarouselProduct'

const OpenLanterns = () => {
    return (
        <div className='openLanterns-container'>

            <iframe width="380" height="200" src="https://www.youtube.com/embed/NE-wIZ7KHek?si=o9vfb4Pex_zqtwlN"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
            </iframe>
        </div>
    )
}
export default OpenLanterns