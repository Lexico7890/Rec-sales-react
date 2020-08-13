import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

const Lista = (props) => {
    return (
      <>
        <Router>
            <div className="list-group my-4">
            <Link href="#" className="list-group-item list-group-item-action">
                Mañana solo odio
            </Link>
            <Link href="#" className="list-group-item list-group-item-action">
                Proteínas y antioxidantes en el
            </Link>
            <Link href="#" className="list-group-item list-group-item-action">
                El león sonríe fútbol
            </Link>
            </div>
        </Router>
      </>
    );
}

export default Lista
