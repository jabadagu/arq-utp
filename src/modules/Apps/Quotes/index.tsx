"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Card, Button } from "@mui/material";
import { useFetchQuotes } from "./hooks/useQuoteList";
import SearchBar from "@/shared/components/SearchBar";
import DataTable, { TableHeader } from "@/shared/components/table/DataTable";
import {
  SEARCH_TEXTS,
  TABLE_HEADERS,
  CONFIRMS,
  CONFIRM_BUTTONS,
  ModalMode,
} from "./content/quote.content";
import { useQuoteMutations } from "./hooks/useQuoteMutations";
import TableActions from "./components/TableActions";
import ModalForm from "@/shared/components/ModalForm";
import CreateQuoteForm from "./components/CreateQuoteForm";

const Quotes: React.FC = () => {
  const { data, loading } = useFetchQuotes();

  const { deleteMutation } = useQuoteMutations();

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmTarget, setConfirmTarget] = useState<any | null>(null);

  // Table (client-side search — pagination handled inside DataTable)
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");

  // pagination now internal to DataTable

  // Modal
  const [open, setOpen] = useState(false);
  const [modalMode, setModalMode] = useState<ModalMode>(ModalMode.CREATE);
  const [modalData, setModalData] = useState<any>(null);
  const handleClickOpen = () => {
    setModalMode(ModalMode.CREATE);
    setModalData(null);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (mode: ModalMode, row?: any) => {
    setModalMode(mode);
    setModalData(row ?? null);
    setOpen(true);
  };

  const headers: TableHeader[] = TABLE_HEADERS as unknown as TableHeader[];

  const openConfirmDelete = (row: any) => {
    setConfirmTarget(row);
    setConfirmOpen(true);
  };

  const closeConfirm = () => {
    setConfirmTarget(null);
    setConfirmOpen(false);
  };

  const onConfirmDelete = async () => {
    if (!confirmTarget) return;
    try {
      const id = confirmTarget.id ?? confirmTarget._id ?? confirmTarget;
      await deleteMutation.mutateAsync(id);
    } catch (err) {
      console.error("delete error", err);
    } finally {
      closeConfirm();
    }
  };

  const renderActions = (row: any) => (
    <TableActions
      row={row}
      onOpen={handleOpen}
      onDelete={openConfirmDelete}
      deleteLoading={deleteMutation.status === "pending"}
    />
  );

  // debounce searchTerm -> debouncedSearch
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(searchTerm.trim()), 350);
    return () => clearTimeout(t);
  }, [searchTerm]);

  // Filter data client-side by debouncedSearch
  const filteredData = useMemo(() => {
    const list = Array.isArray(data) ? data : [];
    if (!debouncedSearch) return list;
    const q = debouncedSearch.toLowerCase();
    return list.filter((row: any) => {
      const nombreEvento = String(row.nombreEvento ?? "").toLowerCase();
      const clienteId = String(row.clienteId ?? "").toLowerCase();
      const id = String(row.id ?? row._id ?? "").toLowerCase();
      const ubicacion = String(row.ubicacion ?? "").toLowerCase();
      const estadoActualId = String(row.estadoActualId ?? "").toLowerCase();
      return (
        nombreEvento.includes(q) ||
        clienteId.includes(q) ||
        id.includes(q) ||
        ubicacion.includes(q) ||
        estadoActualId.includes(q)
      );
    });
  }, [data, debouncedSearch]);

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
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          onAdd={handleClickOpen}
          placeholder={SEARCH_TEXTS.placeholder}
          addButtonLabel={SEARCH_TEXTS.addButtonLabel}
        />

        <DataTable
          headers={headers}
          data={filteredData || []}
          totalCount={filteredData.length}
          loading={loading}
          renderActions={renderActions}
        />
      </Card>

      <CreateQuoteForm
        open={open}
        onClose={handleClose}
        onCreated={(d: any) => console.log("created", d)}
        mode={modalMode}
        initialData={modalData}
      />

      <ModalForm
        open={confirmOpen}
        onClose={closeConfirm}
        onSubmit={onConfirmDelete as any}
        children={<div>{CONFIRMS.deleteConfirmation}</div>}
        actions={
          <>
            <Button onClick={closeConfirm} variant='outlined' sx={{ mr: 1 }}>
              {CONFIRM_BUTTONS.cancel}
            </Button>
            <Button
              onClick={onConfirmDelete}
              variant='contained'
              color='error'
              disabled={(deleteMutation as any).isLoading}>
              {CONFIRM_BUTTONS.confirm}
            </Button>
          </>
        }
        texts={{ title: CONFIRMS.deleteQuote }}></ModalForm>
    </>
  );
};

export default Quotes;
