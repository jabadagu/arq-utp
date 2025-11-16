"use client";

import React from "react";
import { IconButton } from "@mui/material";
import { ModalMode } from "../content/eventType.content";
import { ACTION_BUTTONS } from "../content/eventType.content";

export interface EventTypeRow {
  id?: string;
  _id?: string;
  nombre?: string;
  descripcion?: string;
  userId?: string;
}

interface TableActionsProps {
  row: EventTypeRow;
  onOpen: (mode: ModalMode, row?: EventTypeRow) => void;
  onDelete: (row: EventTypeRow) => void;
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
