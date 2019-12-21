import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Image as BootstrapImage } from 'react-bootstrap';

export const Image = ({ id, description, src }) =>
    (<Link href={`/${id}`} data-testid="image">
        <div>
            {
                src ? <BootstrapImage className="img-gallery" src={src} thumbnail />
                    : <span className="no-img">This image is not available.</span>
            }
            {description && (<div className="description">{description}</div>)}
        </div>
    </Link>)

Image.propTypes = {
    id: PropTypes.string,
    description: PropTypes.string,
    src: PropTypes.string
}