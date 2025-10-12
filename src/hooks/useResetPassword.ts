"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams, useRouter, useParams } from "next/navigation";
import { useState } from "react";
import { updatePassword } from "@/services/auth";
import { toast } from "sonner";

export const resetPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
    confirmPassword: z.string().min(6, "La confirmación es requerida"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export type ResetPasswordValues = z.infer<typeof resetPasswordSchema>;

export function useResetPassword() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { lang } = useParams();
  const [loading, setLoading] = useState(false);

  const form = useForm<ResetPasswordValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { newPassword: "", confirmPassword: "" },
  });

  async function onSubmit(values: ResetPasswordValues) {
    const actionToken = searchParams?.get("actionToken") || "";
    if (!actionToken) {
      toast.error("Falta actionToken");
      return;
    }
    try {
      setLoading(true);
      await updatePassword({ actionToken, newPassword: values.newPassword });
      toast.success("Contraseña actualizada. Puedes iniciar sesión.");
      router.push(`/${lang}/authentication/sign-in/`);
    } catch (e: any) {
      const message =
        e?.response?.data?.message ||
        e?.message ||
        "Error al actualizar contraseña";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }

  return { form, onSubmit, loading };
}
