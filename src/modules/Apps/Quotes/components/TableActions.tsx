"use client";

import React from "react";
import { IconButton } from "@mui/material";
import { ModalMode } from "../content/quote.content";
import { ACTION_BUTTONS } from "../content/quote.content";

export interface QuoteRow {
  id?: string;
  _id?: string;
  clienteId?: string;
  tipoEventoId?: string;
  nombreEvento?: string;
  fechaEvento?: string;
  horaEvento?: string;
  numeroInvitados?: number;
  ubicacion?: string;
  estadoActualId?: string;
  observaciones?: string;
  status?: boolean;
}

interface TableActionsProps {
  row: QuoteRow;
  onOpen: (mode: ModalMode, row?: QuoteRow) => void;
  onDelete: (row: QuoteRow) => void;
  deleteLoading?: boolean;
}

const TableActions: React.FC<TableActionsProps> = ({
  row,
  onOpen,
  onDelete,
  deleteLoading,
}) => {
  return (
    <>
      <IconButton
        onClick={() => onOpen(ModalMode.VIEW, row)}
        aria-label={ACTION_BUTTONS.view}
        color='primary'
        sx={{ padding: "5px" }}>
        <i className='material-symbols-outlined' style={{ fontSize: "16px" }}>
          visibility
        </i>
      </IconButton>

      <IconButton
        onClick={() => onOpen(ModalMode.EDIT, row)}
        aria-label={ACTION_BUTTONS.edit}
        color='secondary'
        sx={{ padding: "5px" }}>
        <i className='material-symbols-outlined' style={{ fontSize: "16px" }}>
          edit
        </i>
      </IconButton>

      <IconButton
        onClick={() => onDelete(row)}
        aria-label={ACTION_BUTTONS.delete}
        color='error'
        sx={{ padding: "5px" }}
        disabled={deleteLoading}>
        <i className='material-symbols-outlined' style={{ fontSize: "16px" }}>
          delete
        </i>
      </IconButton>
    </>
  );
};

export default TableActions;
