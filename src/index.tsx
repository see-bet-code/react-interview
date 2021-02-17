import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./features/App/App"
import reducer from "./redux/reducer";
import "./index.scss";

// const store = createStore(reducer);

const composeEnhancer = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const store = createStore(reducer,
  composeEnhancer(applyMiddleware(thunk))
);

const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<AppContainer />, document.getElementById("root"));

export default AppContainer;
