import React from "react";
import { connect } from "react-redux";

function* generatePage(countPage) {
    for (let i = 1; i <= countPage; i++) {
        yield i;
    }
}

const Paginator = ({ countPage, activePage, dispatch }) => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"><button className="page-link" onClick={
                    () => dispatch({ type: "ACTIVE_PAGE", activePage: activePage === 1 ? 1 : activePage - 1 })
                }>Previous</button></li>
                {
                    [...generatePage(countPage)].map((page, i) => <li className={"page-item" + (page === activePage ? " active" : "")} key={i}>
                        <button className="page-link" onClick={() => dispatch({ type: "ACTIVE_PAGE", activePage: page })}>{page}</button>
                    </li>)
                }
                <li className="page-item"><button className="page-link" onClick={
                    () => dispatch({ type: "ACTIVE_PAGE", activePage: activePage === countPage ? countPage : activePage + 1 })
                }>Next</button></li>
            </ul>
        </nav>
    )
}

export default connect()(Paginator)