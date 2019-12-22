import React from 'react'
import PropTypes from 'prop-types'
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Select } from '../select/Select';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { setSectionAction } from '../../redux/actions/filters/setSection/setSectionAction';
import { setSortAction } from '../../redux/actions/filters/setSort/setSortAction';
import { setWindowAction } from '../../redux/actions/filters/setWindow/setWindowAction';
import { setShowViralAction } from '../../redux/actions/filters/setShowViral/setShowViralAction';

const Filters = ({ section, sort, window, showViral,
    onChangeSection, onChangeSort, onChangeWindow, onChangeShowViral }) => {
    const handlerInput = (callback) => ({ target: { value } }) => callback(value)
    const onSubmit = (event) => {
        event.preventDefault();
    }
    return (<Form onSubmit={onSubmit}>
        <Row>
            <Col>
                <Select
                    label="Section"
                    onChange={handlerInput(onChangeSection)}
                    options={['hot', 'top', 'user']}
                    value={section}
                />
            </Col>
            <Col>
                <Select
                    label="Sort"
                    onChange={handlerInput(onChangeSort)}
                    options={['viral', 'top', 'time', 'rising']}
                    value={sort}
                />
            </Col>
            <Col>
                <Select
                    label="Window"
                    onChange={handlerInput(onChangeWindow)}
                    options={['day', 'week', 'month', 'year', 'all']}
                    value={window}
                />
            </Col>
        </Row>
        <Form.Check
            type='checkbox'
            label='Viral Images'
            checked={showViral}
            onChange={({ target: { checked } }) => { onChangeShowViral(checked) }}
        />
        <Button variant="primary" type="submit">Search</Button>
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
        onChangeShowViral: setShowViralAction
    }, dispatch)
}

Filters.propTypes = {
    section: PropTypes.func,
    onChangeSection: PropTypes.func,
    onChangeWindow: PropTypes.func,
    onChangeSort: PropTypes.func,
    onChangeShowViral: PropTypes.func,
    window: PropTypes.string,
    sort: PropTypes.string,
    showViral: PropTypes.bool
}


export default connect(mapStateToProps, mapDispatchToProps)(Filters)