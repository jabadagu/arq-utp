"use client";

import * as React from "react";
import { Box, Typography, FormControl, TextField, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useResetPassword } from "@/hooks/useResetPassword";

const ResetPasswordForm: React.FC = () => {
  const { lang } = useParams();
  const { form, onSubmit, loading } = useResetPassword();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  return (
    <Box
      className='auth-main-wrapper forgot-password-area'
      sx={{ py: { xs: "60px", md: "80px", lg: "100px", xl: "135px" } }}>
      <Box
        sx={{
          maxWidth: { sm: "500px", md: "1255px" },
          mx: "auto !important",
          px: "12px",
        }}>
        <Box
          className='form-content'
          sx={{ paddingLeft: { xs: "0", lg: "10px" } }}>
          <Box className='logo' sx={{ mb: "23px" }}>
            <Image
              src='/images/logo-big.png'
              alt='logo'
              width={182}
              height={78}
            />
          </Box>

          <Box className='title' sx={{ mb: "23px" }}>
            <Typography
              variant='h1'
              className='text-black'
              sx={{
                fontSize: { xs: "22px", sm: "25px", lg: "28px" },
                mb: "7px",
                fontWeight: "600",
              }}>
              Restablecer contraseña
            </Typography>
            <Typography sx={{ fontWeight: "500", fontSize: "16px" }}>
              Ingresa tu nueva contraseña y confírmala nuevamente.
            </Typography>
          </Box>

          <Box component='form' onSubmit={handleSubmit(onSubmit)}>
            <Box mb='15px'>
              <FormControl fullWidth>
                <Typography
                  component='label'
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    mb: "10px",
                    display: "block",
                  }}
                  className='text-black'>
                  Nueva contraseña
                </Typography>
                <TextField
                  label='Nueva contraseña'
                  variant='filled'
                  type='password'
                  {...register("newPassword")}
                  error={!!errors.newPassword}
                  helperText={errors.newPassword?.message as string}
                />
              </FormControl>
            </Box>

            <Box mb='15px'>
              <FormControl fullWidth>
                <Typography
                  component='label'
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    mb: "10px",
                    display: "block",
                  }}
                  className='text-black'>
                  Confirmar contraseña
                </Typography>
                <TextField
                  label='Confirmar contraseña'
                  variant='filled'
                  type='password'
                  {...register("confirmPassword")}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword?.message as string}
                />
              </FormControl>
            </Box>

            <Box my='25px'>
              <Button
                type='submit'
                variant='contained'
                disabled={loading}
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "6px",
                  fontWeight: "500",
                  fontSize: { xs: "13px", sm: "16px" },
                  padding: { xs: "10px 20px", sm: "10px 24px" },
                  color: "#fff !important",
                  boxShadow: "none",
                  width: "100%",
                }}>
                {loading ? "Actualizando..." : "Actualizar contraseña"}
              </Button>
            </Box>

            <Typography>
              Volver a{" "}
              <Link
                href={`/${lang}/authentication/sign-in/`}
                className='text-primary'
                style={{ fontWeight: "500" }}>
                Iniciar sesión
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ResetPasswordForm;
