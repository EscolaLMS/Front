export interface ICartItem {
  id: number;
  image: string;
  title: string;
  description?: string;
  size: "small" | "medium";
  price: string;
  type?: "add" | "remove";
}

export interface IDiscountResponse {
  activated_at: string;
  code: string;
  created_at: string;
  deactivated_at: string;
  deleted_at: string;
  id: number;
  limit_per_user: number;
  limit_usage: number;
  name: string;
  updated_at: string;
  value: number;
  value_type: 1 | 2;
}
export interface ICartResponse {
  discount: IDiscountResponse | null;
  items: API.Course[];
  subtotal: number;
  tax: number;
  total: number;
}

export interface ICartListWrapper {
  title: string;
  children: React.ReactNode | React.ReactNode[];
  type?: "transparent" | "green";
}

export interface IOrderDetail {
  buyable_id: number;
  buyable_type: string;
  created_at: string;
  id: number;
  options: string;
  order_id: number;
  quantity: number;
  updated_at: string;
}

export interface IOrderItemResponse {
  id: number;
  items: IOrderDetail[];
  status: string;
  subtotal: string;
  created_at: string;
  tax: string;
  total: string;
}
