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
  Checkbox,
  FormControlLabel,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import CustomEditor from "./CustomEditor";
import FileUpload from "@/modules/Forms/FileUpload";

const AddUser: React.FC = () => {
  const [location, setLocation] = useState<string>("");
  const [skills, setSkills] = useState<string>("");

  const handleLocationChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value as string);
  };

  const handleSkillsChange = (event: SelectChangeEvent) => {
    setSkills(event.target.value as string);
  };

  // File Upload
  const handleFileSelect = (files: FileList) => {
    console.log("Selected files:", files);
    // Process your files here
  };

  return (
    <>
      <Box component='form'>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 12, xl: 8 }}>
            <Card
              sx={{
                boxShadow: "none",
                borderRadius: "7px",
                mb: "25px",
                padding: { xs: "18px", sm: "20px", lg: "25px" },
              }}
              className='rmui-card'>
              <Grid
                container
                spacing={3}
                columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
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
                        ID de Usuario
                      </Typography>

                      <TextField
                        label='Ingresa el ID de usuario'
                        placeholder='Ej. #JAN-123'
                        variant='filled'
                        id='userId'
                        name='userId'
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
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
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
                        Nombre del Usuario
                      </Typography>

                      <TextField
                        label='Ingresa el nombre del usuario'
                        placeholder='Ej. Olivia John'
                        variant='filled'
                        id='userName'
                        name='userName'
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
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
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
                        label='Ingresa el correo electrónico'
                        placeholder='Ej. olivia@eventosperu.com'
                        variant='filled'
                        id='emailAddress'
                        name='emailAddress'
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
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
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
                      Ubicación
                    </Typography>

                    <FormControl fullWidth>
                      <InputLabel id='brand-name-label'>Seleccionar</InputLabel>
                      <Select
                        labelId='brand-name-label'
                        id='brand-name'
                        value={location}
                        label='Seleccionar'
                        onChange={handleLocationChange}
                        sx={{
                          "& fieldset": {
                            border: "1px solid #D5D9E2",
                            borderRadius: "7px",
                          },
                        }}>
                        <MenuItem value={0}>Lima</MenuItem>
                        <MenuItem value={1}>Arequipa</MenuItem>
                        <MenuItem value={2}>Trujillo</MenuItem>
                        <MenuItem value={3}>Cusco</MenuItem>
                        <MenuItem value={4}>Piura</MenuItem>
                        <MenuItem value={5}>Chiclayo</MenuItem>
                        <MenuItem value={6}>Tacna</MenuItem>
                        <MenuItem value={7}>Ica</MenuItem>
                        <MenuItem value={8}>Huancayo</MenuItem>
                        <MenuItem value={9}>Puno</MenuItem>
                        <MenuItem value={10}>Ayacucho</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
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
                        label='Ingresa el número de teléfono'
                        placeholder='Ej. +51 555-445-4455'
                        variant='filled'
                        id='phoneNumber'
                        name='phoneNumber'
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
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
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
                        Proyectos
                      </Typography>

                      <TextField
                        label='Ingresa la cantidad de proyectos'
                        placeholder='Ej. 27'
                        variant='filled'
                        id='projects'
                        name='projects'
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
                      Agrega Información
                    </Typography>

                    <CustomEditor />
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
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
                        label='Ingresa el enlace del perfil de Facebook'
                        placeholder='Ej. https://www.facebook.com/'
                        variant='filled'
                        id='facebookLink'
                        name='facebookLink'
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
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
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
                        X
                      </Typography>

                      <TextField
                        label='Ingresa el enlace del perfil de X'
                        placeholder='Ej. https://x.com/'
                        variant='filled'
                        id='x'
                        name='x'
                        required
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
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
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
                        label='Ingresa el enlace del perfil de LinkedIn'
                        placeholder='Ej. https://www.linkedin.com/'
                        variant='filled'
                        id='linkedinLink'
                        name='linkedinLink'
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
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
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
                        GitHub
                      </Typography>

                      <TextField
                        label='Ingresa el enlace del perfil de GitHub'
                        placeholder='Ej. https://github.com/'
                        variant='filled'
                        id='githubLink'
                        name='githubLink'
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
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                  <Typography
                    component='h5'
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      mb: "12px",
                    }}
                    className='text-black'>
                    Subir Imágenes del Usuario
                  </Typography>

                  <FileUpload onFileSelect={handleFileSelect} />
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 12, xl: 4 }}>
            <Card
              sx={{
                boxShadow: "none",
                borderRadius: "7px",
                mb: "25px",
                padding: { xs: "18px", sm: "20px", lg: "25px" },
              }}
              className='rmui-card'>
              <Box
                sx={{
                  mb: "15px",
                }}>
                <Typography
                  variant='h3'
                  sx={{
                    fontSize: { xs: "16px", md: "18px" },
                    fontWeight: 700,
                  }}
                  className='text-black'>
                  Política de Privacidad
                </Typography>
              </Box>

              <Grid
                container
                spacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                  <Box>
                    <FormControlLabel
                      control={<Checkbox />}
                      label='Permitir mostrar tu correo'
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label='Permitir mostrar tu experiencia'
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label='Permitir mostrar tus seguidores'
                    />
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
                      Selecciona Tus Habilidades
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
              </Grid>
            </Card>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}>
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
              <i className='material-symbols-outlined'>add</i> Agregar Usuario
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AddUser;
