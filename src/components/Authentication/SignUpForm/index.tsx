"use client";

import * as React from "react";
import Grid from "@mui/material/Grid";
import { Button, Box, Typography, FormControl, TextField } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import { useSignUpForm } from "@/hooks/useSignUp";

const SignUpForm: React.FC = () => {
  const { lang } = useParams();

  const { form, loading, emailFromParams, onSubmit } = useSignUpForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  return (
    <Box
      className='auth-main-wrapper sign-up-area'
      sx={{ py: { xs: "60px", md: "80px", lg: "100px", xl: "135px" } }}>
      <Box
        sx={{
          maxWidth: { sm: "500px", md: "1255px" },
          mx: "auto !important",
          px: "12px",
        }}>
        <Grid
          container
          alignItems='center'
          columnSpacing={{ xs: 1, sm: 2, md: 4, lg: 3 }}>
          <Grid size={{ xs: 12, md: 6, lg: 6, xl: 7 }}>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Image
                src='/images/sign-up.jpg'
                alt='sign-up-image'
                width={646}
                height={804}
                style={{ borderRadius: "24px" }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6, lg: 6, xl: 7 }}>
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
                  Regístrate en Eventos Peru
                </Typography>
              </Box>

              <form onSubmit={handleSubmit(onSubmit)}>
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
                      Nombre completo
                    </Typography>
                    <TextField
                      label='Ingresa tu nombre completo'
                      variant='filled'
                      id='nombre'
                      {...register("nombre")}
                      error={!!errors.nombre}
                      helperText={errors.nombre?.message as string}
                      sx={{
                        "& .MuiInputBase-root": {
                          border: "1px solid #D5D9E2",
                          backgroundColor: "#fff",
                          borderRadius: "7px",
                        },
                        "& .MuiInputBase-root::before": { border: "none" },
                      }}
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
                      Dirección de correo
                    </Typography>
                    <TextField
                      label='ejemplo&#64;eventosperu.com'
                      variant='filled'
                      id='email'
                      disabled={!!emailFromParams}
                      {...register("email")}
                      error={!!errors.email}
                      helperText={errors.email?.message as string}
                      sx={{
                        "& .MuiInputBase-root": {
                          border: "1px solid #D5D9E2",
                          backgroundColor: "#fff",
                          borderRadius: "7px",
                        },
                        "& .MuiInputBase-root::before": { border: "none" },
                        "& .MuiInputBase-root.Mui-disabled": {
                          backgroundColor: "#f5f5f5",
                          color: "rgba(0, 0, 0, 0.6)",
                        },
                      }}
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
                      Dirección
                    </Typography>
                    <TextField
                      label='Ingrese su dirección'
                      variant='filled'
                      id='direccion'
                      {...register("direccion")}
                      error={!!errors.direccion}
                      helperText={errors.direccion?.message as string}
                      sx={{
                        "& .MuiInputBase-root": {
                          border: "1px solid #D5D9E2",
                          backgroundColor: "#fff",
                          borderRadius: "7px",
                        },
                        "& .MuiInputBase-root::before": { border: "none" },
                      }}
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
                      Celular
                    </Typography>
                    <TextField
                      label='Número de celular'
                      variant='filled'
                      id='celular'
                      {...register("celular")}
                      error={!!errors.celular}
                      helperText={errors.celular?.message as string}
                      sx={{
                        "& .MuiInputBase-root": {
                          border: "1px solid #D5D9E2",
                          backgroundColor: "#fff",
                          borderRadius: "7px",
                        },
                        "& .MuiInputBase-root::before": { border: "none" },
                      }}
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
                      Contraseña
                    </Typography>
                    <TextField
                      label='Escribe la contraseña'
                      variant='filled'
                      type='password'
                      id='password'
                      {...register("password")}
                      error={!!errors.password}
                      helperText={errors.password?.message as string}
                      sx={{
                        "& .MuiInputBase-root": {
                          border: "1px solid #D5D9E2",
                          backgroundColor: "#fff",
                          borderRadius: "7px",
                        },
                        "& .MuiInputBase-root::before": { border: "none" },
                      }}
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
                    <i className='material-symbols-outlined mr-5'>person_4</i>
                    {loading ? "Registrando..." : "Registrarse"}
                  </Button>
                </Box>

                <Typography sx={{ mb: "15px", lineHeight: "1.8" }}>
                  ¿Ya tienes una cuenta?
                  <Link
                    href={`/${lang}/authentication/sign-in/`}
                    className='text-primary'
                    style={{ fontWeight: "500" }}>
                    Iniciar sesión
                  </Link>
                </Typography>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SignUpForm;
