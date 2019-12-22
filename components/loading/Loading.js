
import React from 'react'
import { Spinner } from 'react-bootstrap';

export const Loading = () => (
    <div>
        <style jsx>{`
                div {
                    padding:5em;
                    display:flex;
                    justify-content:center;
                }
        
        `}</style>
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    </div>
)