import React from 'react'
import PropTypes from 'prop-types'

export const Image = ({ description, src }) => <div data-testid="image">
    {
        src
            ? <img className="img-gallery" src={src} />
            : <span className="no-img">This image is not available.</span>
    }
    {description && <div className="description">
        {description}
    </div>}
</div>

Image.propTypes = {
    description: PropTypes.string,
    src: PropTypes.string
}