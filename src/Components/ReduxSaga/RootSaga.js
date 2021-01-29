import { put, takeEvery, all } from 'redux-saga/effects';

function* loginFlow(data) {
    yield put({ type: "LOGIN", data});
}
function* logoutFlow(data) {
    yield put({ type: "LOGOUT", data});
}

function* actionWatcher() {
    yield takeEvery('LOGIN_USER', loginFlow);
    yield takeEvery('LOGOUT_USER', logoutFlow)
}

export default function* rootSaga() {
   yield all([
	actionWatcher(),
   ]);
}
