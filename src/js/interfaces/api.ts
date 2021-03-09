export interface DefaultApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}
