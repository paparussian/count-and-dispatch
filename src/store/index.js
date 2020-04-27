import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

const middleware = [];

/*creo il redux store */
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware)),
);
export default store;