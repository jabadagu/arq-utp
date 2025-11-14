"use client";

import React, { FormEvent, useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import { styled } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface ModalTexts {
  title?: string;
  nameLabel?: string;
  assignedLabel?: string;
  deadlineLabel?: string;
  priorityLabel?: string;
  statusLabel?: string;
  cancelLabel?: string;
  createLabel?: string;
}

interface ModalFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  texts?: ModalTexts;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": { padding: theme.spacing(2) },
  "& .MuiDialogActions-root": { padding: theme.spacing(1) },
}));

const ModalForm: React.FC<ModalFormProps> = ({
  open,
  onClose,
  onSubmit,
  children,
  actions,
  texts = {},
}) => {
  const t = { title: "Modal", ...texts };

  return (
    <BootstrapDialog
      onClose={onClose}
      aria-labelledby='customized-dialog-title'
      open={open}
      className='rmu-modal'>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#f6f7f9",
            gap: "20px",
            padding: { xs: "15px 20px", md: "25px" },
          }}
          className='rmu-modal-header'>
          <Typography
            variant='h6'
            sx={{ fontWeight: 600, fontSize: { xs: "16px", md: "18px" } }}
            className='text-black'>
            {t.title}
          </Typography>

          <IconButton aria-label='remove' size='small' onClick={onClose}>
            <ClearIcon />
          </IconButton>
        </Box>

        <Box className='rmu-modal-content'>
          <Box component='form' noValidate onSubmit={onSubmit}>
            <Box
              sx={{ padding: "25px", borderRadius: "8px" }}
              className='bg-white'>
              {children}

              <Box
                sx={{
                  mt: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                  gap: "15px",
                }}>
                {actions}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </BootstrapDialog>
  );
};

export default ModalForm;
