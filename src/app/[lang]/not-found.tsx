"use client";

import { Box, Typography, Link } from "@mui/material";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function NotFound() {
  const { lang } = useParams();
  return (
    <>
      <Box
        className='not-found-area'
        sx={{
          py: { xs: "50px", md: "70px", lg: "120px" },
        }}>
        <Box className='not-found-content text-center ml-auto mr-auto'>
          <Box mb='20px'>
            <Image
              src='/images/error.png'
              alt='error-image'
              width={400}
              height={400}
            />
          </Box>

          <Typography
            variant='h4'
            sx={{
              fontSize: "21px",
              fontWeight: "700",
              mb: "13px",
              lineHeight: "1.4",
            }}>
            Parece que no encontramos esta página, por favor intente nuevamente
            más tarde.
          </Typography>

          <Typography sx={{ lineHight: "1.7", mb: "30px" }}>
            ¡Pero no se preocupe! Nuestro equipo está buscando por todas partes
            mientras espera de forma segura.
          </Typography>

          <Link
            href={`/${lang}/apps/to-do-list`}
            sx={{
              bgcolor: "primary.main",
              textTransform: "capitalize",
              borderRadius: "6px",
              fontWeight: "500",
              fontSize: "16px",
              padding: "12px 23px",
              color: "#fff !important",
              boxShadow: "none",
              display: "inline-block",
            }}>
            Volver al Inicio
          </Link>
        </Box>
      </Box>
    </>
  );
}
