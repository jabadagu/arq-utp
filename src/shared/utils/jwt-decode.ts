import { jwtDecode } from "jwt-decode";
import cookies from "js-cookie";

interface JwtPayload {
  sub: string;
  iss: string;
  iat: number;
  exp: number;
  uid: string;
  name: string;
  type: string;
}

export const decodeJwtPayload = (t: string) => {
  try {
    return jwtDecode<JwtPayload>(t);
  } catch (e) {
    return null;
  }
};

export const getUserIdFromToken = (): string => {
  const token = cookies.get("token") || "";
  const userId = decodeJwtPayload(token)?.uid ?? "";
  return userId || "";
};
