import request from "umi-request";

export async function login(
  body: API.LoginRequest,
  options?: { [key: string]: any }
) {
  return request<API.LoginResponse>("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

export async function profile(token: string) {
  return request<API.DefaultResponse<API.UserItem>>("/api/profile/me", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function register(
  body: API.RegisterRequest,
  options?: { [key: string]: any }
) {
  return request<API.DefaultResponse<API.RegisterResponse>>(
    "/api/auth/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: body,
      ...(options || {}),
    }
  );
}

export async function updateProfile(body: API.UserItem, token: string) {
  return request<API.DefaultResponse<API.UserItem>>("/api/profile/me", {
    method: "PUT",
    data: body,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function updateAvatar(file: File, token: string) {
  const formData = new FormData();
  formData.append("avatar", file);
  return request<API.DefaultResponse<API.UserItem>>(
    "/api/profile/upload-avatar",
    {
      method: "POST",
      data: formData,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

export async function forgot(
  body: API.ForgotRequest,
  options?: { [key: string]: any }
) {
  return request<API.ForgotResponse>("/api/auth/password/forgot", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

export async function reset(
  body: API.ResetPasswordRequest,
  options?: { [key: string]: any }
) {
  return request<API.ResetPasswordResponse>("/api/auth/password/reset", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
