interface IData {
  course_id?: number;
  code?: string;
  "courses[]"?: number[] | undefined;
  paymentMethodId?: string;
}

interface IAction {
  type: string;
  data?: IData;
  id?: number | number[];
}

export const ADD_TO_CART_REQUEST = "ADD_TO_CART_REQUEST";
export const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
export const ADD_TO_CART_FAILURE = "ADD_TO_CART_FAILURE";

export const addToCart = (id: number): IAction => {
  return {
    type: ADD_TO_CART_REQUEST,
    id,
  };
};

/*
export const ADD_DISCOUNT_TO_CART_REQUEST = "ADD_DISCOUNT_TO_CART_REQUEST";
export const ADD_DISCOUNT_TO_CART_SUCCESS = "ADD_DISCOUNT_TO_CART_SUCCESS";
export const ADD_DISCOUNT_TO_CART_FAILURE = "ADD_DISCOUNT_TO_CART_FAILURE";

export const addDiscountToCart = (data: IData): IAction => {
  return {
    type: ADD_DISCOUNT_TO_CART_REQUEST,
    data,
  };
};
*/

export const GET_CART_REQUEST = "GET_CART_REQUEST";
export const GET_CART_SUCCESS = "GET_CART_SUCCESS";
export const GET_CART_FAILURE = "GET_CART_FAILURE";

export const fetchCart = (): IAction => {
  return {
    type: GET_CART_REQUEST,
  };
};

export const CART_PAY_REQUEST = "CART_PAY_REQUEST";
export const CART_PAY_SUCCESS = "CART_PAY_SUCCESS";
export const CART_PAY_FAILURE = "CART_PAY_FAILURE";

export const cartPay = (data: IData): IAction => {
  return {
    type: CART_PAY_REQUEST,
    data,
  };
};

export const REMOVE_FROM_CART_REQUEST = "REMOVE_FROM_CART_REQUEST";
export const REMOVE_FROM_CART_SUCCESS = "REMOVE_FROM_CART_SUCCESS";
export const REMOVE_FROM_CART_FAILURE = "REMOVE_FROM_CART_FAILURE";

export const removeFromCart = (id: number): IAction => {
  return {
    type: REMOVE_FROM_CART_REQUEST,
    id,
  };
};

/*
export const CART_RELATED_REQUEST = "CART_RELATED_REQUEST";
export const CART_RELATED_SUCCESS = "CART_RELATED_SUCCESS";
export const CART_RELATED_FAILURE = "CART_RELATED_FAILURE";

export const relatedCart = (data: IData): IAction => {
  return {
    type: CART_RELATED_REQUEST,
    data,
  };
};
*/

export const PAYMENT_HISTORY_REQUEST = "PAYMENT_HISTORY_REQUEST";
export const PAYMENT_HISTORY_SUCCESS = "PAYMENT_HISTORY_SUCCESS";
export const PAYMENT_HISTORY_FAILURE = "PAYMENT_HISTORY_FAILURE";

export const getPayments = (): IAction => {
  return {
    type: PAYMENT_HISTORY_REQUEST,
  };
};

export const CART_CLEAR_REQUEST = "CART_CLEAR_REQUEST";

export const clearCart = (): IAction => {
  return {
    type: CART_CLEAR_REQUEST,
  };
};
