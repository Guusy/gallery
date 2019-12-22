import React from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import { Select } from '../select/Select';

export const Filters = () => {
    return (<Form>
        <Row>
            <Col>
                <Select
                    label="Section"
                    onChange={(event) => { console.log(event.target.value) }}
                    options={['hot', 'top', 'user']}
                />
            </Col>
            <Col>
                <Select
                    label="Sort"
                    onChange={(event) => { console.log(event.target.value) }}
                    options={['viral', 'top', 'time', 'rising']}
                />
            </Col>
            <Col>
                <Select
                    label="Window"
                    onChange={(event) => { console.log(event.target.value) }}
                    options={['day', 'week', 'month', 'year', 'all']}
                />
            </Col>
        </Row>
        <Form.Check
            type='checkbox'
            label='Viral Images'
        />

    </Form>)
}