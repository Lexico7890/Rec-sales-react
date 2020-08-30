import React from "react";
import { useSelector } from "react-redux";

const RequestDetails = (props) => {
  let content;
  const id = props.match.params.id;
  const requests = useSelector((store) => store.requests.arrayRequest);
  const request = requests.filter((data) => data.id === id);

  return (
    <div>
      {request.map((item, index) => (
        <div className="container section request-details" key={index}>
          <div className="card z-depth-0">
            <div className="card content">
              <span className="card-title">{item.title}</span>
              <p>{item.content}</p>
            </div>
            <div className="card-action gret lighten-4 grey-text">
              <div>
                Posted by {item.authorFirstName} {item.authorLastName}
              </div>
              <div>23rd april, 4am</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RequestDetails;
