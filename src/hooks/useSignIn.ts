import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "../services/auth";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Cookies from "js-cookie";
import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email({ message: "Correo electrónico no válido" }),
  password: z
    .string()
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
});

export type SignInData = z.infer<typeof signInSchema>;

export function useSignIn() {
  const { lang } = useParams();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInData>({ resolver: zodResolver(signInSchema) });

  const [serverError, setServerError] = React.useState<boolean>(false);

  const submit = async (data: SignInData) => {
    setServerError(false);
    try {
      const resp = await login(data);
      Cookies.set("token", resp.data.accessToken);
      toast.success("Inicio de sesión correcto");
      router.push(`/${lang ?? ""}/apps/to-do-list/`);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const status = err.response?.status;
        const message =
          err.response?.data?.message || "Error en la autenticación";

        if (status === 401) {
          const m = message || "Credenciales incorrectas";
          toast.error(m);
          setServerError(true);
        } else if (status && status >= 500) {
          const m = "Error en el servidor. Por favor intenta más tarde.";
          toast.error(m);
          setServerError(true);
        } else {
          toast.error(message);
          setServerError(true);
        }
      } else {
        const m = "No se pudo conectar con el servidor";
        toast.error(m);
        setServerError(true);
      }
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    serverError,
    submit,
  };
}
