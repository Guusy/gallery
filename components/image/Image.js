import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Image as BootstrapImage } from 'react-bootstrap';
import './image.css'
export const Image = ({ id, description = "No description", src }) => {
    return (
        <div>

            {
                src ? <Link href='/image/[id]' as={`/image/${id}`} data-testid="image">
                    <BootstrapImage className="img-gallery" src={src} thumbnail />
                </Link>
                    : <span className="no-img">This image is not available.</span>
            }
            <div className="description">{description || "No description"}</div>
        </div>
    )
}

Image.propTypes = {
    id: PropTypes.string,
    description: PropTypes.string,
    src: PropTypes.string,
}