"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Card,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  Paper,
  IconButton,
  TableHead,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box
      sx={{
        flexShrink: 0,
        display: "flex",
        gap: "10px",
        padding: "0 20px",
      }}>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label='previous page'
        sx={{
          borderRadius: "4px",
          padding: "6px",
        }}
        className='border'>
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>

      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='next page'
        sx={{
          borderRadius: "4px",
          padding: "6px",
        }}
        className='border'>
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
    </Box>
  );
}

function createData(
  id: any,
  userImg: string,
  userName: string,
  email: string,
  phone: string,
  lastContacted: string,
  company: string,
  leadScore: number,
  status: string
) {
  return {
    id,
    userImg,
    userName,
    email,
    phone,
    lastContacted,
    company,
    leadScore,
    status,
  };
}

const rows = [
  createData(
    "#850",
    "/images/users/user6.jpg",
    "Oliver Khan",
    "oliver.khan@eventosperu.com",
    "+51 955-123-4567",
    "19 Jun 2024",
    "Bodas Elegantes SAC",
    50,
    "Activo"
  ),
  createData(
    "#851",
    "/images/users/user7.jpg",
    "Carolyn Barnes",
    "carolyn.barnes@eventosperu.com",
    "+51 955-987-6543",
    "18 Jun 2024",
    "Fiestas & Celebraciones",
    35,
    "Activo"
  ),
  createData(
    "#852",
    "/images/users/user8.jpg",
    "Donna Miller",
    "donna.miller@eventosperu.com",
    "+51 955-456-7890",
    "17 Jun 2024",
    "Eventos Infantiles Perú",
    40,
    "Inactivo"
  ),
  createData(
    "#853",
    "/images/users/user9.jpg",
    "Barbara Cross",
    "barbara.cross@eventosperu.com",
    "+51 955-369-7878",
    "16 Jun 2024",
    "Catering Gourmet Lima",
    25,
    "Activo"
  ),
  createData(
    "#854",
    "/images/users/user10.jpg",
    "Rebecca Block",
    "rebecca.block@eventosperu.com",
    "+51 955-658-4488",
    "15 Jun 2024",
    "Decoraciones Temáticas",
    27,
    "Inactivo"
  ),
  createData(
    "#855",
    "/images/users/user11.jpg",
    "Ramiro McCarty",
    "ramiro.mccarty@eventosperu.com",
    "+51 955-558-9966",
    "14 Jun 2024",
    "Eventos Corporativos Plus",
    16,
    "Activo"
  ),
  createData(
    "#856",
    "/images/users/user12.jpg",
    "Robert Fairweather",
    "robert.fairweather@eventosperu.com",
    "+51 955-357-5888",
    "13 Jun 2024",
    "Quinceañeros Soñados",
    38,
    "Activo"
  ),
  createData(
    "#857",
    "/images/users/user13.jpg",
    "Marcelino Haddock",
    "marcelino.haddock@eventosperu.com",
    "+51 955-456-8877",
    "12 Jun 2024",
    "Aniversarios Memorables",
    15,
    "Activo"
  ),
  createData(
    "#858",
    "/images/users/user14.jpg",
    "Thomas Wilson",
    "thomas.wilson@eventosperu.com",
    "+51 955-622-4488",
    "11 Jun 2024",
    "Baby Shower Dreams",
    41,
    "Inactivo"
  ),
  createData(
    "#859",
    "/images/users/user15.jpg",
    "Nathaniel Hulsey",
    "nathaniel.hulsey@eventosperu.com",
    "+51 955-225-4488",
    "10 Jun 2024",
    "Graduaciones Especiales",
    29,
    "Activo"
  ),
  createData(
    "#860",
    "/images/users/user16.jpg",
    "Sophia Turner",
    "sophia.turner@eventosperu.com",
    "+51 955-123-4117",
    "9 Jun 2024",
    "Bautizos y Comuniones",
    35,
    "Activo"
  ),
  createData(
    "#861",
    "/images/users/user17.jpg",
    "Liam Johnson",
    "liam.johnson@eventosperu.com",
    "+51 955-911-6543",
    "8 Jun 2024",
    "Eventos Sociales Premium",
    56,
    "Activo"
  ),
  createData(
    "#862",
    "/images/users/user18.jpg",
    "Emma Williams",
    "emma.williams@eventosperu.com",
    "+51 955-456-7811",
    "7 Jun 2024",
    "Fiestas de Gala",
    45,
    "Inactivo"
  ),
  createData(
    "#863",
    "/images/users/user19.jpg",
    "Noah Brown",
    "noah.brown@eventosperu.com",
    "+51 955-369-2278",
    "6 Jun 2024",
    "Bodas en la Playa",
    125,
    "Activo"
  ),
  createData(
    "#864",
    "/images/users/user20.jpg",
    "Ava Davis",
    "ava.davis@eventosperu.com",
    "+51 955-644-4488",
    "5 Jun 2024",
    "Cumpleaños Temáticos",
    20,
    "Inactivo"
  ),
  createData(
    "#865",
    "/images/users/user21.jpg",
    "William Martinez",
    "william.martinez@eventosperu.com",
    "+51 955-558-9336",
    "4 Jun 2024",
    "Eventos Familiares",
    49,
    "Activo"
  ),
  createData(
    "#866",
    "/images/users/user22.jpg",
    "Isabella Garcia",
    "isabella.garcia@eventosperu.com",
    "+51 955-345-5888",
    "3 Jun 2024",
    "Cenas Románticas",
    77,
    "Activo"
  ),
  createData(
    "#867",
    "/images/users/user23.jpg",
    "James Rodriguez",
    "james.rodriguez@eventosperu.com",
    "+51 955-456-8866",
    "2 Jun 2024",
    "Reuniones Empresariales",
    155,
    "Activo"
  ),
  createData(
    "#868",
    "/images/users/user24.jpg",
    "Mia Hernandez",
    "mia.hernandez@eventosperu.com",
    "+51 955-789-1234",
    "1 Jun 2024",
    "Fiestas Infantiles Magic",
    60,
    "Activo"
  ),
  createData(
    "#869",
    "/images/users/user25.jpg",
    "Alexander Lopez",
    "alexander.lopez@eventosperu.com",
    "+51 955-321-9876",
    "31 May 2024",
    "Eventos de Navidad",
    85,
    "Inactivo"
  ),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const Contacts: React.FC = () => {
  // Select
  const [select, setSelect] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value as string);
  };

  // Table State
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  // Search State
  const [searchTerm, setSearchTerm] = useState("");

  // Filter rows based on search input. You can search by userName, email, or company.
  const filteredRows = rows.filter(
    (row) =>
      row.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate empty rows for pagination
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredRows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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
        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
            mb: "25px",
          }}>
          <form className='t-search-form'>
            <label>
              <i className='material-symbols-outlined'>search</i>
            </label>
            <input
              type='text'
              className='t-input'
              placeholder='Buscar aquí...'
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setPage(0); // Reset to first page on search
              }}
            />
          </form>

          <Box>
            <FormControl sx={{ minWidth: 115 }} size='small'>
              <InputLabel id='demo-select-small'>Seleccionar</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={select}
                label='Seleccionar'
                onChange={handleChange}
                className='select'>
                <MenuItem value={0}>Todos</MenuItem>
                <MenuItem value={1}>Activo</MenuItem>
                <MenuItem value={2}>Inactivo</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        {/* Table */}
        <Box
          sx={{
            marginLeft: "-25px",
            marginRight: "-25px",
          }}>
          <TableContainer
            component={Paper}
            sx={{
              boxShadow: "none",
              borderRadius: "0",
            }}
            className='rmui-table'>
            <Table sx={{ minWidth: 1000 }} aria-label='Contacts List Table'>
              <TableHead className='bg-primary-50'>
                <TableRow>
                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 24px",
                      fontSize: "14px",
                    }}
                    className='text-black border-bottom'>
                    #
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: "14px",
                    }}
                    className='text-black border-bottom'>
                    ID
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: "14px",
                    }}
                    className='text-black border-bottom'>
                    Usuario
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: "14px",
                    }}
                    className='text-black border-bottom'>
                    Correo
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: "14px",
                    }}
                    className='text-black border-bottom'>
                    Teléfono
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: "14px",
                    }}
                    className='text-black border-bottom'>
                    Último Contacto
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: "14px",
                    }}
                    className='text-black border-bottom'>
                    Empresa
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: "14px",
                    }}
                    className='text-black border-bottom'>
                    Puntuación
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: "14px",
                    }}
                    className='text-black border-bottom'>
                    Estado
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: "14px",
                    }}
                    className='text-black border-bottom'>
                    Acción
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {(rowsPerPage > 0
                  ? filteredRows.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : filteredRows
                ).map((row) => (
                  <TableRow key={row.id}>
                    <TableCell
                      sx={{
                        padding: "5px 13px",
                        fontSize: "14px",
                        width: "65px",
                      }}
                      className='border-bottom'>
                      <Checkbox {...label} sx={{ padding: "8px" }} />
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "15px 20px",
                        fontSize: "14px",
                      }}
                      className='border-bottom'>
                      {row.id}
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "15px 20px",
                        fontSize: "14px",
                      }}
                      className='border-bottom'>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}>
                        <Box sx={{ flexShrink: "0" }}>
                          <Image
                            src={row.userImg}
                            alt='Product'
                            width={40}
                            height={40}
                            style={{ borderRadius: "100px" }}
                          />
                        </Box>

                        <Box>
                          <Typography
                            sx={{
                              fontSize: "15px",
                              fontWeight: "500",
                            }}
                            className='text-black'>
                            {row.userName}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "15px 20px",
                        fontSize: "14px",
                      }}
                      className='border-bottom'>
                      {row.email}
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "15px 20px",
                        fontSize: "14px",
                      }}
                      className='border-bottom'>
                      {row.phone}
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "15px 20px",
                        fontSize: "14px",
                      }}
                      className='border-bottom'>
                      {row.lastContacted}
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "15px 20px",
                        fontSize: "14px",
                      }}
                      className='border-bottom'>
                      {row.company}
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "15px 20px",
                        fontSize: "14px",
                      }}
                      className='border-bottom'>
                      {row.leadScore}
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "15px 20px",
                      }}
                      className='border-bottom'>
                      <div className={`trezo-badge ${row.status}`}>
                        {row.status}
                      </div>
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "15px 20px",
                      }}
                      className='border-bottom'>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}>
                        <IconButton
                          aria-label='view'
                          color='primary'
                          sx={{ padding: "5px" }}>
                          <i
                            className='material-symbols-outlined'
                            style={{ fontSize: "16px" }}>
                            visibility
                          </i>
                        </IconButton>

                        <IconButton
                          aria-label='edit'
                          color='secondary'
                          sx={{ padding: "5px" }}>
                          <i
                            className='material-symbols-outlined'
                            style={{ fontSize: "16px" }}>
                            edit
                          </i>
                        </IconButton>

                        <IconButton
                          aria-label='delete'
                          color='error'
                          sx={{ padding: "5px" }}>
                          <i
                            className='material-symbols-outlined'
                            style={{ fontSize: "16px" }}>
                            delete
                          </i>
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell className='border-bottom' colSpan={10} />
                  </TableRow>
                )}
              </TableBody>

              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
                    colSpan={10}
                    count={filteredRows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    slotProps={{
                      select: {
                        inputProps: {
                          "aria-label": "rows per page",
                        },
                        native: true,
                      },
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                    sx={{
                      border: "none",
                    }}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </Box>
      </Card>
    </>
  );
};

export default Contacts;
