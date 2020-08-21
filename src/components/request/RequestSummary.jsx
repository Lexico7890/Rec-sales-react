import React from 'react'

const RequestSummary = ({request}) => {
    console.log({request})
    return (
        <>
            <div className="card z-depth-0 request-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">title</span>
                    <p>content content content</p>
                    <p className="grey-text">1rd january, 3PM</p>
                </div>
            </div>
        </>
    )
}

export default RequestSummary
