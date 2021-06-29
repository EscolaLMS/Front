import * as ACTION from "./actions";
import { CartApiAction } from "./type";
import { IDefaultApiError, IError } from "../../interfaces/redux";
import { toast } from "react-toastify";
import { ICartResponse, IOrderItemResponse } from "../../interfaces/cart";
import { serverErrors } from "../../helpers/serverErrors";

export interface ICartState {
  loading: boolean;
  error: boolean | IDefaultApiError;
  data: ICartResponse | undefined;
  added: boolean;
  removed: boolean;
  addedCode: boolean;
  related: API.Course[];
  paid: boolean;
  payments: IOrderItemResponse[];
}

export const INIT_STATE = {
  loading: false,
  error: false,
  data: undefined,
  added: false,
  removed: false,
  addedCode: false,
  related: [],
  paid: false,
  payments: [],
};

export default function reducer(
  state: ICartState = INIT_STATE,
  action: CartApiAction
): ICartState {
  if (state === undefined) {
    return INIT_STATE;
  }
  switch (action.type) {
    // case ACTION.CART_RELATED_REQUEST:
    // case ACTION.ADD_DISCOUNT_TO_CART_REQUEST:
    case ACTION.ADD_TO_CART_REQUEST:
    case ACTION.GET_CART_REQUEST:
    case ACTION.REMOVE_FROM_CART_REQUEST:
    case ACTION.CART_PAY_REQUEST:
    case ACTION.PAYMENT_HISTORY_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        added: false,
        removed: false,
        addedCode: false,
      };

    // case ACTION.ADD_DISCOUNT_TO_CART_FAILURE:
    // case ACTION.CART_RELATED_FAILURE:

    case ACTION.ADD_TO_CART_FAILURE:
    case ACTION.GET_CART_FAILURE:
    case ACTION.REMOVE_FROM_CART_FAILURE:
    case ACTION.CART_PAY_FAILURE:
    case ACTION.PAYMENT_HISTORY_FAILURE:
      toast.error(serverErrors(action.errorCode, action.payload as IError));
      return {
        ...state,
        loading: false,
        added: false,
        removed: false,
        addedCode: false,
        error: action.payload,
        paid: false,
      };

    case ACTION.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        added: true,
      };

    case ACTION.REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        removed: true,
      };

    case ACTION.CART_PAY_SUCCESS:
      toast.success("Payment successful");
      return {
        ...state,
        loading: false,
        paid: true,
      };

    /*
    case ACTION.CART_RELATED_SUCCESS:
      return {
        ...state,
        loading: false,
        related: action.payload.data,
      };

    case ACTION.ADD_DISCOUNT_TO_CART_SUCCESS:
      toast.success("Added a discount code to your cart");
      return {
        ...state,
        loading: false,
        error: false,
        addedCode: true,
      };

      */

    case ACTION.PAYMENT_HISTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        payments: action.payload.data,
      };

    case ACTION.GET_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case ACTION.CART_CLEAR_REQUEST:
      return {
        ...state,
        addedCode: false,
        paid: false,
        related: [],
      };

    default:
      return state;
  }
}
