import React from 'react'
import PropTypes from 'prop-types'

export const Image = ({ description }) => <div data-testid="image">
    {description && <div className="description">
        {description}
    </div>}
</div>

Image.propTypes = {
    description: PropTypes.string
}