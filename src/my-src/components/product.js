import React from "react";
export default ({ name, description }) =>
    <li className="media">
        <img src="https://fakeimg.pl/64x64/" className="mr-3" alt="" />
        <div className="media-body">
            <h5 className="mt-0 mb-1">{name}</h5>
            {description}
        </div>
    </li>