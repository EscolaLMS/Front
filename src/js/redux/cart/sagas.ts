import { takeLatest } from "redux-saga/effects";
import * as ACTION from "./actions";

import { createSaga } from "./../sagas";

// eslint-disable-next-line
function* mySaga() {
  yield takeLatest(
    ACTION.ADD_TO_CART_REQUEST,
    createSaga("ADD_TO_CART", "/cart/course/{id}", "POST")
  );
  yield takeLatest(ACTION.GET_CART_REQUEST, createSaga("GET_CART", "/cart"));
  /*
  yield takeLatest(
    ACTION.ADD_DISCOUNT_TO_CART_REQUEST,
    createSaga("ADD_DISCOUNT_TO_CART", "/cart/discount", "POST")
  );
  */
  yield takeLatest(
    ACTION.REMOVE_FROM_CART_REQUEST,
    createSaga("REMOVE_FROM_CART", "/cart/course/{id}", "DELETE")
  );
  yield takeLatest(
    ACTION.CART_PAY_REQUEST,
    createSaga("CART_PAY", "/cart/pay", "POST")
  );
  /*
  yield takeLatest(
    ACTION.CART_RELATED_REQUEST,
    createSaga("CART_RELATED", "/courses/related-many")
  );
  */
  yield takeLatest(
    ACTION.PAYMENT_HISTORY_REQUEST,
    createSaga("PAYMENT_HISTORY", "/orders")
  );
}

export default mySaga;
