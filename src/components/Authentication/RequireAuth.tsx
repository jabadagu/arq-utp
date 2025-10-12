"use server";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { jwtDecode } from "jwt-decode";

interface RequireAuthProps {
  children: React.ReactNode;
  redirectTo?: string;
}

function decodeJwtPayload(token: string) {
  try {
    return jwtDecode(token);
  } catch (e) {
    return null;
  }
}

export default async function RequireAuth({
  children,
  redirectTo,
}: RequireAuthProps) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect(redirectTo ?? "/authentication/sign-in");
  }

  const payload = token ? decodeJwtPayload(token) : null;
  const now = Math.floor(Date.now() / 1000);

  if (!payload || (payload.exp && payload.exp <= now)) {
    redirect(redirectTo ?? "/authentication/sign-in");
  }

  return <>{children}</>;
}
