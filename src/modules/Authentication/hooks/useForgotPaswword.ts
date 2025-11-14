"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { toast } from "sonner";
import {
  requestCodeToResetPassword,
  verifyCodeToResetPassword,
} from "@/modules/Authentication/auth.service";

export function useForgotPaswword() {
  const [loading, setLoading] = useState(false);
  const [codeSent, setCodeSent] = useState(false);
  const router = useRouter();
  const { lang } = useParams();

  async function sendCode(email: string) {
    try {
      setLoading(true);
      await requestCodeToResetPassword({ email });
      setCodeSent(true);
      toast.success("Código enviado al correo");
    } catch (e: any) {
      const message =
        e?.response?.data?.message || e?.message || "Error al enviar código";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }

  async function verifyCode(email: string, otp: string) {
    try {
      setLoading(true);
      const resp = await verifyCodeToResetPassword({ email, code: otp });
      toast.success("Código verificado");
      const actionToken = resp?.data?.actionToken;
      if (actionToken) {
        const path = `/${lang}/authentication/reset-password?actionToken=${actionToken}`;
        router.push(path);
      }
    } catch (e: any) {
      const message =
        e?.response?.data?.message || e?.message || "Código inválido";
      toast.error(message);
      throw e;
    } finally {
      setLoading(false);
    }
  }

  return { loading, codeSent, sendCode, verifyCode };
}
