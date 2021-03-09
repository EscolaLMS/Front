export interface IAuthForm {
  first_name?: string;
  last_name?: string;
  email: string;
  password?: string;
  terms?: boolean;
  password_confirmation?: string;
  return_url?: string;
  token?: string;
  phone?: string;
}
