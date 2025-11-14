"use client";

import React from "react";
import {
  Grid,
  Card,
  Box,
  Typography,
  FormControl,
  TextField,
  Button,
  Link,
} from "@mui/material";
import NavList from "../NavList";
import { useParams } from "next/navigation";

const ChangePassword: React.FC = () => {
  const { lang } = useParams();

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className='rmui-card'>
        <NavList />

        <Box component='form'>
          <Grid
            container
            spacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <Box>
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
                    Contraseña Anterior
                  </Typography>

                  <TextField
                    label='Ingrese la contraseña anterior'
                    variant='filled'
                    id='oldPassword'
                    name='oldPassword'
                    type='password'
                    sx={{
                      "& .MuiInputBase-root": {
                        border: "1px solid #D5D9E2",
                        backgroundColor: "#fff",
                        borderRadius: "7px",
                        color: "#000",
                        fontWeight: "500",
                      },
                      "& .MuiInputBase-root::before": {
                        border: "none",
                      },
                      "& .MuiInputBase-root:hover::before": {
                        border: "none",
                      },
                    }}
                  />
                </FormControl>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <Box>
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
                    Nueva Contraseña
                  </Typography>

                  <TextField
                    label='Ingrese la nueva contraseña'
                    variant='filled'
                    id='newPassword'
                    name='newPassword'
                    type='password'
                    sx={{
                      "& .MuiInputBase-root": {
                        border: "1px solid #D5D9E2",
                        backgroundColor: "#fff",
                        borderRadius: "7px",
                        color: "#000",
                        fontWeight: "500",
                      },
                      "& .MuiInputBase-root::before": {
                        border: "none",
                      },
                      "& .MuiInputBase-root:hover::before": {
                        border: "none",
                      },
                    }}
                  />
                </FormControl>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
              <Box>
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
                    Confirmar Contraseña
                  </Typography>

                  <TextField
                    label='Ingrese la confirmación de la contraseña'
                    variant='filled'
                    id='confirmPassword'
                    name='confirmPassword'
                    type='password'
                    sx={{
                      "& .MuiInputBase-root": {
                        border: "1px solid #D5D9E2",
                        backgroundColor: "#fff",
                        borderRadius: "7px",
                        color: "#000",
                        fontWeight: "500",
                      },
                      "& .MuiInputBase-root::before": {
                        border: "none",
                      },
                      "& .MuiInputBase-root:hover::before": {
                        border: "none",
                      },
                    }}
                  />
                </FormControl>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: "10px", sm: "20px" },
                }}>
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
                  }}>
                  <i className='material-symbols-outlined'>check</i> Cambiar
                  Contraseña
                </Button>

                <Link
                  href={`/${lang}/authentication/forgot-password/`}
                  sx={{
                    color: "error.main",
                  }}>
                  ¿Olvidó su contraseña?
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </>
  );
};

export default ChangePassword;
