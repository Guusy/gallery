import React from 'react'
import PropTypes from 'prop-types'
import { Image } from '../image/Image'
import { Col, Row } from 'react-bootstrap';

export const ListOfImages = ({ images = [] }) => {
    return (<Row>
        {images.map((image) => {
            if (!image.is_album) {
                return (
                    <Col key={image.id} xs={6} md={4}>
                        <Image src={image.link} {...image} />
                    </Col >)
            }
        })}
    </Row>)
}

ListOfImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        src: PropTypes.string,
        description: PropTypes.string
    })),
}