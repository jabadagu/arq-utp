"use client";

import * as React from "react";
import NextLink from "next/link";
import { Box, Typography, Link } from "@mui/material";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function Page() {
  const { lang } = useParams();

  return (
    <>
      {/* Breadcrumb */}
      <div className='breadcrumb-card'>
        <h5>Error Interno</h5>

        <ul className='breadcrumb'>
          <li>
            <NextLink href='/apps/to-do-list'>
              <i className='material-symbols-outlined'>home</i>
              Panel de Control
            </NextLink>
          </li>
          <li>Error Interno</li>
        </ul>
      </div>

      <Box
        className='bg-white not-found-area'
        sx={{
          px: "20px",
          py: { xs: "50px", md: "60px", lg: "70px" },
          borderRadius: "7px",
          mb: "25px",
        }}>
        <Box className='not-found-content text-center ml-auto mr-auto'>
          <Box mb='20px'>
            <Image
              src='/images/internal-error.png'
              alt='error-image'
              width={400}
              height={434}
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
            Parece que tenemos un error interno, por favor intente nuevamente
            más tarde.
          </Typography>

          <Typography sx={{ lineHight: "1.7", mb: "30px" }}>
            ¡Pero no se preocupe! Nuestro equipo está trabajando en ello
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
            Volver al Panel de Control
          </Link>
        </Box>
      </Box>
    </>
  );
}
