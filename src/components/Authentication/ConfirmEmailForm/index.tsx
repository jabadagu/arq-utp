"use client";

import * as React from "react";
import { Grid, Button, Box, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

const ConfirmEmailForm: React.FC = () => {
  const { lang } = useParams();

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
                  src='/images/confirm-email.jpg'
                  alt='confirm-email-image'
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
                      mb: "10px",
                      fontWeight: "600",
                    }}>
                    ¡Bienvenido a Eventos Peru!
                  </Typography>

                  <Typography sx={{ fontWeight: "500", fontSize: "16px" }}>
                    ¡Tu correo ha sido verificado! Tu cuenta ahora está
                    protegida contra actividades no deseadas.
                  </Typography>
                </Box>

                <Box>
                  <Box mb='30px'>
                    <Box
                      className='logo bg-white text-success rounded-circle'
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "120px",
                        height: "120px",
                      }}>
                      <i
                        className='material-symbols-outlined'
                        style={{ fontSize: "55px" }}>
                        done
                      </i>
                    </Box>

                    <Typography
                      component='span'
                      sx={{
                        display: "block",
                        fontWeight: "500",
                        fontSize: "16px",
                        mt: "20px",
                      }}
                      className='text-black'>
                      Tu correo ha sido verificado{" "}
                      <span className='text-success'>¡con éxito!</span>
                    </Typography>
                  </Box>

                  <Link href={`/${lang}/apps/todo-list/`}>
                    <Button
                      type='submit'
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
                      <i className='material-symbols-outlined mr-5'>login</i>
                      Volver al inicio
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ConfirmEmailForm;
