"use client";

import React from "react";
import { IconButton } from "@mui/material";
import { ModalMode } from "../content/service.content";
import { ACTION_BUTTONS } from "../content/service.content";

export interface ServiceRow {
  id?: string;
  _id?: string;
  nombre?: string;
  descripcion?: string;
  precioBase?: number;
  categoriaId?: string;
  userId?: string;
  disponible?: boolean;
  status?: boolean;
}

interface TableActionsProps {
  row: ServiceRow;
  onOpen: (mode: ModalMode, row?: ServiceRow) => void;
  onDelete: (row: ServiceRow) => void;
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
