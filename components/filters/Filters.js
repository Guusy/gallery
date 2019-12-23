import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Select } from '../select/Select';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { setSectionAction } from '../../redux/actions/filters/setSection/setSectionAction';
import { setSortAction } from '../../redux/actions/filters/setSort/setSortAction';
import { setWindowAction } from '../../redux/actions/filters/setWindow/setWindowAction';
import { setShowViralAction } from '../../redux/actions/filters/setShowViral/setShowViralAction';
import { getGallery } from '../../redux/actions/getGallery/getGallery';
import Router from 'next/router'

import './Filters.css'

const Filters = ({ section, sort, window, showViral,
    onChangeSection, onChangeSort, onChangeWindow, onChangeShowViral, refreshGallery }) => {
    const handlerInput = (callback) => ({ target: { value } }) => {

        callback(value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        refreshGallery();
    }

    useEffect(() => {
        const href = `/?section=${section}&sort=${sort}&window=${window}&showViral=${showViral}`
        Router.push(href, href, { shallow: true })
    }, [section, sort, window, showViral])

    return (<Form onSubmit={onSubmit} className="form-filters">
        <Row>
            <Col>
                <Select
                    label="Section"
                    onChange={handlerInput(onChangeSection)}
                    options={['hot', 'top', 'user']}
                    value={section}
                    type='section'
                />
            </Col>
            <Col>
                <Select
                    label="Sort"
                    onChange={handlerInput(onChangeSort)}
                    options={['viral', 'top', 'time', 'rising']}
                    value={sort}
                    type='sort'
                />
            </Col>
            <Col>
                <Select
                    label="Window"
                    onChange={handlerInput(onChangeWindow)}
                    options={['day', 'week', 'month', 'year', 'all']}
                    value={window}
                    type='window'
                />
            </Col>
        </Row>
        <Row>
            <Col>
                <Form.Check
                    data-testid="showViral-filter"
                    type='checkbox'
                    label='Viral Images'
                    checked={showViral}
                    onChange={({ target: { checked } }) => { onChangeShowViral(checked) }}
                />
            </Col>
            <Col className="search-col">
                <Button variant="primary" type="submit" data-testid="search-button">Search</Button>
            </Col>
        </Row>

    </Form>)
}

const mapStateToProps = ({ section, sort, window, showViral }) => ({
    section,
    sort,
    window,
    showViral
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        onChangeSection: setSectionAction,
        onChangeSort: setSortAction,
        onChangeWindow: setWindowAction,
        onChangeShowViral: setShowViralAction,
        refreshGallery: getGallery
    }, dispatch)
}

Filters.propTypes = {
    section: PropTypes.func,
    onChangeSection: PropTypes.func,
    onChangeWindow: PropTypes.func,
    onChangeSort: PropTypes.func,
    onChangeShowViral: PropTypes.func,
    refreshGallery: PropTypes.func,
    window: PropTypes.string,
    sort: PropTypes.string,
    showViral: PropTypes.bool
}


export default connect(mapStateToProps, mapDispatchToProps)(Filters)