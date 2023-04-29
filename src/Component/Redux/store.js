import { createStore } from "redux";
import reducer from "./reducerFunction";

const store = createStore(reducer);

export default store;
