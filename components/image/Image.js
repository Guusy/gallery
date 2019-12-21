import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

export const Image = ({ id, description, src }) => <Link href={`/${id}`} data-testid="image">
    {
        src
            ? <img className="img-gallery" src={src} />
            : <span className="no-img">This image is not available.</span>
    }
    {description && <div className="description">
        {description}
    </div>}
</Link>

Image.propTypes = {
    id: PropTypes.string,
    description: PropTypes.string,
    src: PropTypes.string
}