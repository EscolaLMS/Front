import request from "umi-request";

export async function addToCart(
  courseId: number,
  token: string,
  options?: { [key: string]: any }
) {
  return request<API.SuccessResponse>(`/api/cart/course/${courseId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    ...(options || {}),
  });
}

export async function removeFromCart(
  courseId: number,
  token: string,
  options?: { [key: string]: any }
) {
  return request<API.SuccessResponse>(`/api/cart/course/${courseId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    ...(options || {}),
  });
}

export async function cart(token: string, options?: { [key: string]: any }) {
  return request<API.DefaultResponseSuccess<API.Cart>>(`/api/cart`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    ...(options || {}),
  });
}

export async function payWithStripe(
  paymentMethodId: string,
  token: string,
  options?: { [key: string]: any }
) {
  return request<API.SuccessResponse>(`/api/cart/pay`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: {
      paymentMethodId,
    },
    ...(options || {}),
  });
}

export async function orders(token: string, options?: { [key: string]: any }) {
  return request<API.OrderList>(`/api/orders`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    ...(options || {}),
  });
}

export async function payments(
  token: string,
  options?: { [key: string]: any }
) {
  return request<API.PaymentList>(`/api/payments`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    ...(options || {}),
  });
}
