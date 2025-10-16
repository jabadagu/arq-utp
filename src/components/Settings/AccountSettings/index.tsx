"use client";

import React, { useState } from "react";
import {
  Grid,
  Card,
  Box,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Button,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import NavList from "../NavList";
import CustomEditor from "./CustomEditor";
import FileUpload from "@/components/Forms/FileUpload";

const AccountSettings: React.FC = () => {
  const [country, setCountry] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [skills, setSkills] = useState<string>("");
  const [profession, setProfession] = useState<string>("");

  const handleCountryChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
  };

  const handleGenderChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };

  const handleSkillsChange = (event: SelectChangeEvent) => {
    setSkills(event.target.value as string);
  };

  const handleProfessionChange = (event: SelectChangeEvent) => {
    setProfession(event.target.value as string);
  };

  // File Upload
  const handleFileSelect = (files: FileList) => {
    console.log("Selected files:", files);
    // Process your files here
  };

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
          <Box
            sx={{
              mb: "25px",
            }}>
            <Typography
              variant='h3'
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: 700,
                mb: "10px",
              }}
              className='text-black'>
              Perfil
            </Typography>

            <Typography>
              Actualice aquí su foto y sus datos personales.
            </Typography>
          </Box>

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
                    Nombre
                  </Typography>

                  <TextField
                    label='Ingrese el nombre'
                    defaultValue='Olivia'
                    variant='filled'
                    id='firstName'
                    name='firstName'
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
                    Apellido
                  </Typography>

                  <TextField
                    label='Ingrese el apellido'
                    defaultValue='John'
                    variant='filled'
                    id='lastName'
                    name='lastName'
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
                    Correo Electrónico
                  </Typography>

                  <TextField
                    label='Ingrese el correo electrónico'
                    defaultValue='olivia@eventosperu.com'
                    variant='filled'
                    id='emailAddress'
                    name='emailAddress'
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
                    Número de Teléfono
                  </Typography>

                  <TextField
                    label='Ingrese el número de teléfono'
                    defaultValue='+51 955 444 669'
                    variant='filled'
                    id='phoneNumber'
                    name='phoneNumber'
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
                    Dirección
                  </Typography>

                  <TextField
                    label='Ingrese la dirección'
                    defaultValue='Av. Primavera 123, Surco'
                    variant='filled'
                    id='address'
                    name='address'
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
                <Typography
                  component='label'
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    mb: "10px",
                    display: "block",
                  }}
                  className='text-black'>
                  País
                </Typography>

                <FormControl fullWidth>
                  <InputLabel id='country-label'>Seleccionar</InputLabel>
                  <Select
                    labelId='country-label'
                    id='country-type'
                    value={country}
                    label='Seleccionar'
                    onChange={handleCountryChange}
                    sx={{
                      "& fieldset": {
                        border: "1px solid #D5D9E2",
                        borderRadius: "7px",
                      },
                    }}>
                    <MenuItem value={0}>Perú</MenuItem>
                    <MenuItem value={1}>Chile</MenuItem>
                    <MenuItem value={2}>Argentina</MenuItem>
                    <MenuItem value={3}>México</MenuItem>
                    <MenuItem value={4}>Colombia</MenuItem>
                    <MenuItem value={5}>España</MenuItem>
                    <MenuItem value={6}>Estados Unidos</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <Typography
                component='h5'
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
                className='text-black'>
                Fecha de Nacimiento
              </Typography>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{
                    width: "100%",
                    "& fieldset": {
                      border: "1px solid rgba(0, 0, 0, 0.23)",
                      borderRadius: "7px",
                    },
                  }}
                  className='input-date-picker'
                />
              </LocalizationProvider>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <Box>
                <Typography
                  component='label'
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    mb: "10px",
                    display: "block",
                  }}
                  className='text-black'>
                  Género
                </Typography>

                <FormControl fullWidth>
                  <InputLabel id='brand-name-label'>Seleccionar</InputLabel>
                  <Select
                    labelId='brand-name-label'
                    id='brand-name'
                    value={gender}
                    label='Seleccionar'
                    onChange={handleGenderChange}
                    sx={{
                      "& fieldset": {
                        border: "1px solid #D5D9E2",
                        borderRadius: "7px",
                      },
                    }}>
                    <MenuItem value={0}>Masculino</MenuItem>
                    <MenuItem value={1}>Femenino</MenuItem>
                    <MenuItem value={2}>Personalizado</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <Box>
                <Typography
                  component='label'
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    mb: "10px",
                    display: "block",
                  }}
                  className='text-black'>
                  Tus Habilidades
                </Typography>

                <FormControl fullWidth>
                  <InputLabel id='brand-name-label'>Seleccionar</InputLabel>
                  <Select
                    labelId='brand-name-label'
                    id='brand-name'
                    value={skills}
                    label='Seleccionar'
                    onChange={handleSkillsChange}
                    sx={{
                      "& fieldset": {
                        border: "1px solid #D5D9E2",
                        borderRadius: "7px",
                      },
                    }}>
                    <MenuItem value={0}>Liderazgo</MenuItem>
                    <MenuItem value={1}>Gestión de Proyectos</MenuItem>
                    <MenuItem value={2}>Análisis de Datos</MenuItem>
                    <MenuItem value={3}>Trabajo en Equipo</MenuItem>
                    <MenuItem value={4}>Desarrollo Web</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <Box>
                <Typography
                  component='label'
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    mb: "10px",
                    display: "block",
                  }}
                  className='text-black'>
                  Tu Profesión
                </Typography>

                <FormControl fullWidth>
                  <InputLabel id='brand-name-label'>Seleccionar</InputLabel>
                  <Select
                    labelId='brand-name-label'
                    id='brand-name'
                    value={profession}
                    label='Seleccionar'
                    onChange={handleProfessionChange}
                    sx={{
                      "& fieldset": {
                        border: "1px solid #D5D9E2",
                        borderRadius: "7px",
                      },
                    }}>
                    <MenuItem value={0}>Gerente Financiero</MenuItem>
                    <MenuItem value={1}>Gerente de TI</MenuItem>
                    <MenuItem value={2}>Desarrollador de Software</MenuItem>
                    <MenuItem value={3}>Asistente Médico</MenuItem>
                    <MenuItem value={4}>Científico de Datos</MenuItem>
                  </Select>
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
                    Nombre de la Empresa
                  </Typography>

                  <TextField
                    label='Ingrese el nombre de la empresa'
                    defaultValue='Eventos Perú Admin'
                    variant='filled'
                    id='companyName'
                    name='companyName'
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
                    Sitio Web de la Empresa
                  </Typography>

                  <TextField
                    label='Ingrese el sitio web de la empresa'
                    defaultValue='http://website.com'
                    variant='filled'
                    id='companyWebsite'
                    name='companyWebsite'
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
                <Typography
                  component='label'
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    mb: "10px",
                    display: "block",
                  }}
                  className='text-black'>
                  Agrega tu Biografía
                </Typography>

                <CustomEditor />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
              <Box mb='15px'>
                <Typography
                  component='h5'
                  sx={{
                    fontWeight: "700",
                    fontSize: { xs: "14px", sm: "20px" },
                    mb: "5px",
                  }}
                  className='text-black'>
                  Tu Foto
                </Typography>

                <Typography>Esto se mostrará en tu perfil.</Typography>
              </Box>

              <FileUpload onFileSelect={handleFileSelect} />
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
              <Typography
                component='h5'
                sx={{
                  fontWeight: "700",
                  fontSize: { xs: "14px", sm: "20px" },
                }}
                className='text-black'>
                Perfiles Sociales
              </Typography>
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
                    Facebook
                  </Typography>

                  <TextField
                    label='Ingrese el enlace de Facebook'
                    defaultValue='https://www.facebook.com/'
                    variant='filled'
                    id='facebookLink'
                    name='facebookLink'
                    required
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
                    X (Twitter)
                  </Typography>

                  <TextField
                    label='Ingrese el enlace de X'
                    defaultValue='https://www.x.com/'
                    variant='filled'
                    id='xLink'
                    name='xLink'
                    required
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
                    LinkedIn
                  </Typography>

                  <TextField
                    label='Ingrese el enlace de LinkedIn'
                    defaultValue='https://www.linkedin.com/'
                    variant='filled'
                    id='linkedinLink'
                    name='linkedinLink'
                    required
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
                    YouTube
                  </Typography>

                  <TextField
                    label='Ingrese el enlace de YouTube'
                    defaultValue='https://www.youtube.com/'
                    variant='filled'
                    id='youtubeLink'
                    name='youtubeLink'
                    required
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
                  mb: "25px",
                }}>
                <Button
                  type='submit'
                  variant='contained'
                  color='error'
                  sx={{
                    textTransform: "capitalize",
                    borderRadius: "6px",
                    fontWeight: "500",
                    fontSize: { xs: "13px", sm: "16px" },
                    padding: { xs: "10px 20px", sm: "10px 24px" },
                    color: "#fff !important",
                    boxShadow: "none",
                  }}>
                  Cancelar
                </Button>

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
                  <i className='material-symbols-outlined'>check</i> Actualizar
                  Perfil
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </>
  );
};

export default AccountSettings;
