"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { sendFormRegister } from "@/modules/Authentication/auth.service";

export const signUpSchema = z.object({
  nombre: z.string().min(1, "El nombre es requerido"),
  email: z.string().email("Ingrese un email válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  direccion: z.string().optional().nullable(),
  celular: z
    .string()
    .min(6, "Número de celular inválido")
    .optional()
    .nullable(),
});

export type SignUpFormValues = z.infer<typeof signUpSchema>;

export function useSignUpForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { lang } = useParams();

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      nombre: "",
      email: searchParams?.get("email") || "",
      password: "",
      direccion: "",
      celular: "",
    },
  });

  async function onSubmit(values: any) {
    const actionToken = searchParams?.get("actionToken") || "";
    try {
      setLoading(true);
      await sendFormRegister({ ...values, actionToken });
      toast.success("Registro completado. Ya puedes iniciar sesión.");
      router.push(`/${lang}/authentication/sign-in/`);
    } catch (e: any) {
      const message =
        e?.response?.data?.message || e?.message || "Error al registrar";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }
  return {
    form,
    onSubmit,
    loading,
    emailFromParams: searchParams?.get("email"),
  };
}
