import React from "react";
import { Link } from "react-router-dom";


export default ({ id,title, subtitle}) => {
    return(
        <Link to={`/${id}`}>
            <div>
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
            </div>
        </Link>
    )
};
