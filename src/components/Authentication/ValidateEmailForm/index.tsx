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
import { useState } from "react";
import { useValidateEmail } from "@/hooks/useValidateEmail";

const ValidateEmailForm: React.FC = () => {
  const { lang } = useParams();

  const { sendCode, verifyCode, loading } = useValidateEmail();
  const [emailValue, setEmailValue] = useState("");
  const [otpValue, setOtpValue] = useState("");
  const [codeSent, setCodeSent] = useState(false);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const ok = await sendCode(emailValue);
    if (ok) setCodeSent(true);
  }

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    await verifyCode(emailValue, otpValue);
  }

  return (
    <>
      <Box
        className='auth-main-wrapper forgot-password-area'
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
                  src='/images/forgot-password.jpg'
                  alt='forgot-password-image'
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
                    width={142}
                    height={38}
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
                    Primero debemos verificar tu correo electrónico
                  </Typography>

                  <Typography sx={{ fontWeight: "500", fontSize: "16px" }}>
                    Ingresa la dirección de correo que usaste al registrarte y
                    te enviaremos instrucciones para verificar tu correo
                    electrónico.
                  </Typography>
                </Box>

                <Box
                  component='form'
                  onSubmit={codeSent ? handleVerify : handleSend}>
                  <Box mb='25px'>
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
                        name='email'
                        value={emailValue}
                        onChange={(e) => setEmailValue(e.target.value)}
                        sx={{
                          "& .MuiInputBase-root": {
                            border: "1px solid #D5D9E2",
                            backgroundColor: "#fff",
                            borderRadius: "7px",
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
                      />
                    </FormControl>
                  </Box>

                  {codeSent && (
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
                          Código (OTP)
                        </Typography>

                        <TextField
                          label='Escribe el código'
                          variant='filled'
                          id='otp'
                          name='otp'
                          value={otpValue}
                          onChange={(e) => setOtpValue(e.target.value)}
                          sx={{
                            "& .MuiInputBase-root": {
                              border: "1px solid #D5D9E2",
                              backgroundColor: "#fff",
                              borderRadius: "7px",
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
                        />
                      </FormControl>
                    </Box>
                  )}

                  <Box mb='20px'>
                    <Button
                      type='submit'
                      disabled={loading}
                      variant='contained'
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
                      <i className='material-symbols-outlined mr-5'>
                        autorenew
                      </i>
                      {codeSent ? "Verificar código" : "Enviar"}
                    </Button>
                  </Box>

                  <Typography>
                    Volver a{" "}
                    <Link
                      href={`/${lang}/authentication/sign-in/`}
                      className='text-primary'
                      style={{
                        fontWeight: "500",
                      }}>
                      Iniciar sesión
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

export default ValidateEmailForm;
