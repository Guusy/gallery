import React from 'react'
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types'

export const Select = ({ onChange, value, options, label, type }) => {
    return (
        <>
            <style jsx>{`
                option {
                    text-transform: capitalize;
                }
        
        `}</style>
            <Form.Group>
                <Form.Label>{label}</Form.Label>
                <Form.Control as="select" value={value} onChange={onChange} data-testid={`${type}-filter`}>
                    {options.map((option, index) => <option data-testid={`${type}-${option}`} key={index} value={option} >{option}</option>)}
                </Form.Control>
            </Form.Group>
        </>
    )
}

Select.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string)
}
