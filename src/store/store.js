import {createStore} from "redux";
import cartReduer from "./reducers";

const initialState = {
    cart: []
};

const store = createStore(cartReduer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;