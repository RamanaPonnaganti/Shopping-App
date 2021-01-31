import { put, takeEvery, all,takeLatest, take } from 'redux-saga/effects';

function* loginFlow(data) {
    try {
        yield put({ type: "LOGIN", payload:data.payload});
    } catch(error) {
        const payload = {type:'error' , msg:'Auth Failed'}
        yield put({ type: 'LOGIN_ERROR', payload: payload})
    }
}

function* logoutFlow(data) {
    yield put({ type: "LOGOUT", payload:data.payload});
}

function* actionWatcher() {
    yield takeEvery('LOGIN_USER', loginFlow);
    yield takeLatest('LOGOUT_USER', logoutFlow)
}

export default function* rootSaga() {
   yield all([
	actionWatcher()
   ]);
}
