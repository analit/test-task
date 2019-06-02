import { createStore, combineReducers } from "redux";


function activePage(state = 1, action) {
    switch (action.type) {
        case "ACTIVE_PAGE":
            return action.activePage;
        default:
            return state;
    }
}

export default createStore(combineReducers({activePage}));