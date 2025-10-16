"use client";

import * as React from "react";
import {
  IconButton,
  Typography,
  Box,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
} from "@mui/material";
import Link from "next/link";
import Logout from "@mui/icons-material/Logout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SettingsIcon from "@mui/icons-material/Settings";
import { usePathname, useParams } from "next/navigation";

const Profile: React.FC<{}> = () => {
  const pathname = usePathname();
  const { lang } = useParams();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title='Account settings'>
        <IconButton
          onClick={handleClick}
          size='small'
          sx={{ p: 0, borderRadius: "5px" }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup='true'
          aria-expanded={open ? "true" : undefined}>
          <Avatar
            src='/images/users/user6.jpg'
            alt='Jose'
            sx={{
              width: { xs: "35px", sm: "42px" },
              height: { xs: "35px", sm: "42px" },
              border: "2px solid #C2CDFF",
            }}
            className='mr-8'
          />
          <Typography
            variant='h3'
            sx={{
              fontWeight: "600",
              fontSize: "13px",
              display: { xs: "none", sm: "block" },
            }}
            className='text-black'>
            {lang === "en" ? "Olivia" : lang === "fr" ? "Olive" : "أوليفيا"}
          </Typography>
          <KeyboardArrowDownIcon sx={{ fontSize: "15px" }} />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            borderRadius: "7px",
            boxShadow: "0 4px 45px #0000001a",
            overflow: "visible",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        className='for-dark-top-navList'>
        <MenuItem sx={{ padding: "10px 20px" }}>
          <Avatar
            src='/images/users/user6.jpg'
            sx={{
              width: 31,
              height: 31,
              border: "2px solid #C2CDFF",
            }}
            className='mr-8'
          />
          <Box>
            <Typography
              variant='h5'
              sx={{
                fontSize: "13px",
                color: "#260944",
                fontWeight: "500",
              }}
              className='text-black'>
              Jose
            </Typography>

            <Typography sx={{ fontSize: "12px" }}>
              Frontend Developer
            </Typography>
          </Box>
        </MenuItem>

        <Divider sx={{ borderColor: "#F6F7F9" }} />

        <MenuItem sx={{ padding: "8px 20px" }}>
          <Link
            href={`/${lang}/settings/`}
            className={`text-black ${
              pathname === `/${lang}/settings/` ? `text-primary` : ""
            }`}
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}>
            <ListItemIcon sx={{ mr: "-10px", mt: "-3px" }}>
              <SettingsIcon sx={{ fontSize: "20px" }} className='text-black' />
            </ListItemIcon>

            <span style={{ fontSize: "13px" }}>Configuraciones</span>
          </Link>
        </MenuItem>

        <MenuItem sx={{ padding: "8px 20px" }}>
          <Link
            href={`/${lang}/authentication/logout/`}
            className='text-black'
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}>
            <ListItemIcon sx={{ mr: "-10px", mt: "-3px" }}>
              <Logout sx={{ fontSize: "20px" }} className='text-black' />
            </ListItemIcon>

            <span style={{ fontSize: "13px" }}>Cerrar sesión</span>
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
