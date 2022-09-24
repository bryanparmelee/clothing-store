import { all, call } from 'redux-saga/effects';

import { catergoriesSaga } from './categories/category.saga';

export function* rootSaga() {
    yield all([call(catergoriesSaga)]);
}