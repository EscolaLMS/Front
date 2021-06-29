import { IDefaultApiAction, IDefaultApiError } from "../../interfaces/redux";
import { ICartResponse, IOrderItemResponse } from "../../interfaces/cart";

export type CartApiAction =
  | (IDefaultApiAction & { type: "ADD_TO_CART_REQUEST" })
  | (IDefaultApiAction & {
      type: "ADD_TO_CART_SUCCESS";

      payload: { success: true };
    })
  | (IDefaultApiAction & {
      type: "ADD_TO_CART_FAILURE";
      payload: IDefaultApiError;
      errorCode: number;
    })
  | (IDefaultApiAction & { type: "GET_CART_REQUEST" })
  | (IDefaultApiAction & {
      type: "GET_CART_SUCCESS";

      payload: ICartResponse;
    })
  | (IDefaultApiAction & {
      type: "GET_CART_FAILURE";
      payload: IDefaultApiError;
      errorCode: number;
    })
  | (IDefaultApiAction & { type: "REMOVE_FROM_CART_REQUEST" })
  | (IDefaultApiAction & {
      type: "REMOVE_FROM_CART_SUCCESS";

      payload: { success: true };
    })
  | (IDefaultApiAction & {
      type: "REMOVE_FROM_CART_FAILURE";
      payload: IDefaultApiError;
      errorCode: number;
    })
  | (IDefaultApiAction & { type: "ADD_DISCOUNT_TO_CART_REQUEST" })
  | (IDefaultApiAction & {
      type: "ADD_DISCOUNT_TO_CART_SUCCESS";

      payload: { success: true };
    })
  | (IDefaultApiAction & {
      type: "ADD_DISCOUNT_TO_CART_FAILURE";
      payload: IDefaultApiError;
      errorCode: number;
    })
  | (IDefaultApiAction & { type: "CART_PAY_REQUEST" })
  | (IDefaultApiAction & {
      type: "CART_PAY_SUCCESS";

      payload: { success: true };
    })
  | (IDefaultApiAction & {
      type: "CART_PAY_FAILURE";
      payload: IDefaultApiError;
      errorCode: number;
    })
  | (IDefaultApiAction & { type: "CART_RELATED_REQUEST" })
  | (IDefaultApiAction & {
      type: "CART_RELATED_SUCCESS";

      payload: { success: true; data: API.Course[] };
    })
  | (IDefaultApiAction & {
      type: "CART_RELATED_FAILURE";
      payload: IDefaultApiError;
      errorCode: number;
    })
  | (IDefaultApiAction & { type: "PAYMENT_HISTORY_REQUEST" })
  | (IDefaultApiAction & {
      type: "PAYMENT_HISTORY_SUCCESS";

      payload: { success: true; data: IOrderItemResponse[] };
    })
  | (IDefaultApiAction & {
      type: "PAYMENT_HISTORY_FAILURE";
      payload: IDefaultApiError;
      errorCode: number;
    })
  | (IDefaultApiAction & { type: "CART_CLEAR_REQUEST" });
