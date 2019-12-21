import React from 'react'
import PropTypes from 'prop-types'
import { Image } from '../image/Image'

export const ListOfImages = ({ images = [] }) => {
    return <div>
        {images.map((image) => <Image key={image.id} {...image} />)}
    </div>
}

ListOfImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        src: PropTypes.string,
        description: PropTypes.string
    })),
}