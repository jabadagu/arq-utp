import { useState } from "react";
import { requestCode, registerVerifyCode } from "../services/auth";
import { toast } from "sonner";
import { useParams, useRouter } from "next/navigation";

export function useValidateEmail() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { lang } = useParams();

  async function sendCode(email: string) {
    setLoading(true);
    try {
      await requestCode({ email });
      toast.success("Código enviado al correo");
      return true;
    } catch (e: any) {
      const message =
        e?.response?.data?.message || e?.message || "Error al enviar el código";
      toast.error(message);
      return false;
    } finally {
      setLoading(false);
    }
  }

  async function verifyCode(email: string, code: string) {
    setLoading(true);
    try {
      const resp = await registerVerifyCode({ email, code });
      toast.success("Código verificado correctamente");
      router.push(
        `/${lang}/authentication/sign-up/?actionToken=${resp.data.actionToken}&email=${email}`
      );
      return true;
    } catch (e: any) {
      const message =
        e?.response?.data?.message ||
        e?.message ||
        "Error al verificar el código";
      toast.error(message);
      return false;
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    sendCode,
    verifyCode,
  } as const;
}
