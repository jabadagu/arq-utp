"use client";

import React, { useMemo, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  Paper,
  TableHead,
  Box,
  Button,
  CircularProgress,
} from "@mui/material";
import PaginationActions from "./PaginationActions";
import { formatDate } from "@/shared/utils/date";
import EMPTY_STATE_TEXTS from "@/shared/constants/ui";

export interface TableHeader {
  id: string;
  label: string;
}

interface DataTableProps {
  headers: TableHeader[];
  data: any[];
  emptyMessage?: string;
  emptySubtitle?: string;
  emptyIcon?: React.ReactNode;
  onAdd?: () => void;
  addButtonLabel?: string;
  totalCount?: number;
  renderActions?: (row: any) => React.ReactNode;
  loading?: boolean;
}

const DataTable: React.FC<DataTableProps> = ({
  headers,
  data,
  renderActions,
  emptyMessage = EMPTY_STATE_TEXTS.message,
  emptySubtitle = EMPTY_STATE_TEXTS.subtitle,
  emptyIcon,
  onAdd,
  addButtonLabel = EMPTY_STATE_TEXTS.addButtonLabel,
  totalCount,
  loading = false,
}) => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const v = parseInt(event.target.value, 10);
    setRowsPerPage(v);
    setPage(0);
  };

  const computedData = useMemo(() => {
    if (!Array.isArray(data)) return [];
    if (rowsPerPage === -1) return data;
    const start = page * rowsPerPage;
    return data.slice(start, start + rowsPerPage);
  }, [data, page, rowsPerPage]);
  return (
    <Box sx={{ marginLeft: "-25px", marginRight: "-25px" }}>
      <TableContainer
        component={Paper}
        sx={{ boxShadow: "none", borderRadius: "0" }}
        className='rmui-table'>
        <Table sx={{ minWidth: 1000 }} aria-label='data table'>
          <TableHead className='bg-primary-50'>
            <TableRow>
              {headers.map((h) => (
                <TableCell
                  key={h.id}
                  sx={{
                    fontWeight: "500",
                    padding: "10px 20px",
                    fontSize: "14px",
                  }}
                  className='text-black border-bottom'>
                  {h.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell
                  colSpan={headers.length}
                  sx={{ textAlign: "center", py: 6 }}>
                  <CircularProgress />
                </TableCell>
              </TableRow>
            ) : computedData?.length > 0 ? (
              computedData.map((row) => (
                <TableRow key={row.id ?? JSON.stringify(row)}>
                  {headers.map((h) => (
                    <TableCell
                      key={h.id}
                      sx={{ padding: "15px 20px", fontSize: "14px" }}
                      className='border-bottom'>
                      {h.id === "actions" ? (
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          {renderActions ? renderActions(row) : null}
                        </Box>
                      ) : h.id === "createdAt" ? (
                        formatDate(row[h.id])
                      ) : (
                        row[h.id] ?? ""
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={headers.length}
                  sx={{ textAlign: "center", py: 6 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 1,
                    }}>
                    <Box
                      sx={{
                        width: 88,
                        height: 88,
                        borderRadius: "50%",
                        background: "#f3f4f6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                      {emptyIcon ?? (
                        <svg
                          width='36'
                          height='36'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M3 6H21'
                            stroke='#c7c7c7'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M8 6V19'
                            stroke='#c7c7c7'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M16 6V19'
                            stroke='#c7c7c7'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      )}
                    </Box>
                    <Box
                      component='div'
                      sx={{ fontWeight: 600, fontSize: 16, color: "#111827" }}>
                      {emptyMessage}
                    </Box>
                    {emptySubtitle ? (
                      <Box
                        component='div'
                        sx={{ color: "#6b7280", fontSize: 13 }}>
                        {emptySubtitle}
                      </Box>
                    ) : null}
                    {onAdd ? (
                      <Box sx={{ mt: 2 }}>
                        <Button variant='contained' onClick={onAdd}>
                          {addButtonLabel}
                        </Button>
                      </Box>
                    ) : null}
                  </Box>
                </TableCell>
              </TableRow>
            )}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={headers.length}
                count={
                  typeof totalCount === "number" ? totalCount : data.length
                }
                rowsPerPage={rowsPerPage}
                page={page}
                slotProps={{
                  select: {
                    inputProps: { "aria-label": "rows per page" },
                    native: true,
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={PaginationActions}
                sx={{ border: "none" }}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DataTable;
