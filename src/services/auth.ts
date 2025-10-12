import { axiosInstanceLogin, axiosInstanceRegister } from "../config/axios";

export type LoginData = {
  email: string;
  password: string;
};

export type VerifyEmailCode = {
  email: string;
  code: string;
};

export type SendFormRegister = {
  actionToken: string;
  email: string;
  password: string;
  nombre: string;
  direccion: string;
  celular: string;
};

export type UpdatePassword = {
  actionToken: string;
  newPassword: string;
};

export async function login(data: LoginData) {
  return axiosInstanceLogin.post("/auth/login", data);
}

export async function requestCode(data: Omit<LoginData, "password">) {
  return axiosInstanceRegister.post("/register/request-code", data);
}

export async function registerVerifyCode(data: VerifyEmailCode) {
  return axiosInstanceRegister.post("/register/verify", data);
}

export async function sendFormRegister(data: SendFormRegister) {
  return axiosInstanceRegister.post("/register/complete", data);
}

export async function requestCodeToResetPassword(
  data: Omit<LoginData, "password">
) {
  return axiosInstanceRegister.post("/password/request-code", data);
}

export async function verifyCodeToResetPassword(data: VerifyEmailCode) {
  return axiosInstanceRegister.post("/password/verify", data);
}

export async function updatePassword(data: UpdatePassword) {
  return axiosInstanceRegister.post("/password/set", data);
}
