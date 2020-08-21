import React from 'react'
import RequestSummary from './RequestSummary'
import {Link} from 'react-router-dom'

const RequestList = ({request}) => {
    return (
        <div className="request-list section">
            {
                request && request.map(request => {
                    return (
                        <Link to={'requests/' + request.id} key={request.id}>
                            <RequestSummary request={request} key={request.id}/>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default RequestList
