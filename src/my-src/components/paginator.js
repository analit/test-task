import React from "react";

function createPages(countPage) {
    const result = [];
    for (let i = 0; i < countPage; i++) {
        result.push(i + 1);
    }

    return result;
}

export default ({ countPage, activePage }) =>
    <nav aria-label="Page navigation example">
        <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
            {createPages(countPage).map((page, i) => <li className={"page-item" + (page == activePage ? " active" : "")} key={i}><a className="page-link" href="#">{page}</a></li>)}
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
        </ul>
    </nav>