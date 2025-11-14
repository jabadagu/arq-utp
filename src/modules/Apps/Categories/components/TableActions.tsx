"use client";

import React from "react";
import { IconButton } from "@mui/material";
import { ModalMode } from "../content/category.content";
import { ACTION_BUTTONS } from "../content/category.content";

export interface CategoryRow {
  id?: string | number;
  _id?: string | number;
  name?: string;
  description?: string;
  userId?: number | string;
}

interface TableActionsProps {
  row: CategoryRow;
  onOpen: (mode: ModalMode, row?: CategoryRow) => void;
  onDelete: (row: CategoryRow) => void;
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
