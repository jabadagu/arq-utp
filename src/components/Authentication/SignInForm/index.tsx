"use client";

import * as React from "react";
import {
  Grid,
  Button,
  Box,
  Typography,
  FormControl,
  TextField,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useSignIn } from "../../../hooks/useSignIn";

const SignInForm: React.FC = () => {
  const { lang } = useParams();

  const { register, handleSubmit, errors, isSubmitting, serverError, submit } =
    useSignIn();
  return (
    <>
      <Box
        className='auth-main-wrapper sign-in-area'
        sx={{
          py: { xs: "60px", md: "80px", lg: "100px", xl: "135px" },
        }}>
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
              <Box
                sx={{
                  display: { xs: "none", md: "block" },
                }}>
                <Image
                  src='/images/sign-in.jpg'
                  alt='sign-in-image'
                  width={646}
                  height={804}
                  style={{
                    borderRadius: "24px",
                  }}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6, lg: 6, xl: 5 }}>
              <Box
                className='form-content'
                sx={{
                  paddingLeft: { xs: "0", lg: "10px" },
                }}>
                <Box
                  className='logo'
                  sx={{
                    mb: "23px",
                  }}>
                  <Image
                    src='/images/logo-big.png'
                    alt='logo'
                    width={182}
                    height={78}
                  />
                  <Image
                    src='/images/white-logo-big.png'
                    className='d-none'
                    alt='logo'
                    width={182}
                    height={78}
                  />
                </Box>

                <Box
                  className='title'
                  sx={{
                    mb: "23px",
                  }}>
                  <Typography
                    variant='h1'
                    className='text-black'
                    sx={{
                      fontSize: { xs: "22px", sm: "25px", lg: "28px" },
                      mb: "7px",
                      fontWeight: "600",
                    }}>
                    ¡Bienvenido de nuevo a Eventos Perú!
                  </Typography>
                </Box>

                <Box
                  component='form'
                  onSubmit={handleSubmit(submit)}
                  noValidate>
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
                        Correo electrónico
                      </Typography>

                      <TextField
                        label='ejemplo&#64;eventosperu.com'
                        variant='filled'
                        id='email'
                        {...register("email")}
                        name='email'
                        sx={{
                          "& .MuiInputBase-root": {
                            border: serverError
                              ? "1px solid #d32f2f"
                              : "1px solid #D5D9E2",
                            backgroundColor: "#fff",
                            borderRadius: "7px",
                          },
                          // label color when server error
                          "& label": {
                            color: serverError ? "#d32f2f" : undefined,
                          },
                          "& .MuiInputBase-root::before": {
                            border: "none",
                          },
                          "& .MuiInputBase-root:hover::before": {
                            border: "none",
                          },
                          "& .MuiInputBase-root:hover:hover:not(.Mui-disabled, .Mui-error)::before":
                            {
                              border: "none",
                            },
                        }}
                        error={!!errors.email || serverError}
                        helperText={errors.email?.message}
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
                        label='Escribe tu contraseña'
                        variant='filled'
                        type='password'
                        id='password'
                        {...register("password")}
                        name='password'
                        sx={{
                          "& .MuiInputBase-root": {
                            border: serverError
                              ? "1px solid #d32f2f"
                              : "1px solid #D5D9E2",
                            backgroundColor: "#fff",
                            borderRadius: "7px",
                          },
                          "& label": {
                            color: serverError ? "#d32f2f" : undefined,
                          },
                          "& .MuiInputBase-root::before": {
                            border: "none",
                          },
                          "& .MuiInputBase-root:hover::before": {
                            border: "none",
                          },
                          "& .MuiInputBase-root:hover:hover:not(.Mui-disabled, .Mui-error)::before":
                            {
                              border: "none",
                            },
                        }}
                        error={!!errors.password || serverError}
                        helperText={errors.password?.message}
                      />
                    </FormControl>
                  </Box>

                  <Box mb='20px'>
                    <Link
                      href={`/${lang}/authentication/forgot-password/`}
                      className='text-primary'
                      style={{
                        fontWeight: "500",
                      }}>
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </Box>

                  <Box mb='20px'>
                    <Button
                      type='submit'
                      variant='contained'
                      disabled={isSubmitting}
                      sx={{
                        textTransform: "capitalize",
                        borderRadius: "6px",
                        fontWeight: "500",
                        fontSize: { xs: "13px", sm: "16px" },
                        padding: { xs: "10px 20px", sm: "10px 24px" },
                        color: "#fff !important",
                        boxShadow: "none",
                        width: "100%",

                        // Disabled state styles
                        "&.Mui-disabled": {
                          backgroundColor: "#000", // Light gray background
                          color: "#9e9e9e !important", // Darker gray text
                          cursor: "not-allowed",
                        },
                      }}>
                      <i className='material-symbols-outlined mr-5'>login</i>
                      {isSubmitting ? "Enviando..." : "Iniciar sesión"}
                    </Button>
                  </Box>

                  <Typography>
                    ¿No tienes una cuenta?{" "}
                    <Link
                      href={`/${lang}/authentication/validate-email/`}
                      className='text-primary'
                      style={{
                        fontWeight: "500",
                      }}>
                      Regístrate
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default SignInForm;
