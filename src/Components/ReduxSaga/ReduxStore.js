import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import Reducer from "./Reducer";
import RootSaga from "./RootSaga";

const sagaMiddleware = createSagaMiddleware();
const ReduxStore = createStore(Reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(RootSaga)

export default ReduxStore;
