import React, { useState, useEffect, Fragment } from "react";
import RequestSummary from "./RequestSummary";
import { Link } from "react-router-dom";

const RequestList = (props) => {
  const [datos, setDatos] = useState();
  useEffect(() => {
    setDatos([props.request]);
  }, [props.request]);

  return (
    <Fragment>
      {props.request &&
        props.request.map((request, index) => {
          return (
            <div className="request-list section" key={index}>
              <Link to={"requests/" + request.id}>
                <RequestSummary request={request} key={request.id} />
              </Link>
            </div>
          );
        })}
    </Fragment>
  );
};

export default RequestList;
