import React from "react";
import { connect } from "react-redux";

function createPages(countPage) {
    const result = [];
    for (let i = 0; i < countPage; i++) {
        result.push(i + 1);
    }

    return result;
}

const Paginator = ({ countPage, activePage, dispatch }) => {
    const nextPage = activePage === 1 ? 1 : activePage + 1;
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"><a className="page-link" href="javascript:void(0)" onClick={
                    () => dispatch({ type: "ACTIVE_PAGE", activePage: activePage === 1 ? 1 : activePage - 1 })
                }>Previous</a></li>
                {
                    createPages(countPage).map((page, i) => <li className={"page-item" + (page == activePage ? " active" : "")} key={i}>
                        <a className="page-link" href="javascript:void(0)" onClick={() => dispatch({ type: "ACTIVE_PAGE", activePage: page })}>{page}</a>
                    </li>)
                }
                <li className="page-item"><a className="page-link" href="javascript:void(0)" onClick={
                    () => dispatch({ type: "ACTIVE_PAGE", activePage: activePage === countPage ? countPage : activePage + 1 })
                }>Next</a></li>
            </ul>
        </nav>
    )
}

export default connect()(Paginator)