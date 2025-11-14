"use client";

import * as React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const UpcomingEvents: React.FC = () => {
  return (
    <>
      <Box className='upcoming-events'>
        <Typography
          component='span'
          sx={{ fontWeight: "500", mb: "10px", display: "block" }}>
          Próximos Eventos:
        </Typography>

        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}>
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",
                alignItems: "top",
                gap: "10px",
              }}>
              <Box
                sx={{
                  bgcolor: "primary.main",
                  width: "7px",
                  height: "7px",
                  borderRadius: "2px",
                  position: "relative",
                  top: "6px",
                }}></Box>

              <Box>
                <Typography
                  variant='h6'
                  sx={{ fontWeight: "600", fontSize: "13px", mb: "3px" }}
                  className='text-black'>
                  Boda Jardín Primavera
                </Typography>

                <Typography component='div' fontSize='12px'>
                  <Typography component='span' fontSize='12px' color='primary'>
                    15 Abril 2024
                  </Typography>
                  - 12.00 PM - 6.00 PM
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              sx={{
                display: "flex",
                alignItems: "top",
                gap: "10px",
              }}>
              <Box
                sx={{
                  bgcolor: "primary.main",
                  width: "7px",
                  height: "7px",
                  borderRadius: "2px",
                  position: "relative",
                  top: "6px",
                }}></Box>

              <Box>
                <Typography
                  variant='h6'
                  sx={{ fontWeight: "600", fontSize: "13px", mb: "3px" }}
                  className='text-black'>
                  Cumpleaños Infantil Frozen
                </Typography>

                <Typography component='div' fontSize='12px'>
                  <Typography component='span' fontSize='12px' color='primary'>
                    20 Abril 2024
                  </Typography>
                  - 3.00 PM - 7.00 PM
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              sx={{
                display: "flex",
                alignItems: "top",
                gap: "10px",
              }}>
              <Box
                sx={{
                  bgcolor: "primary.main",
                  width: "7px",
                  height: "7px",
                  borderRadius: "2px",
                  position: "relative",
                  top: "6px",
                }}></Box>

              <Box>
                <Typography
                  variant='h6'
                  sx={{ fontWeight: "600", fontSize: "13px", mb: "3px" }}
                  className='text-black'>
                  Aniversario de Oro
                </Typography>

                <Typography component='div' fontSize='12px'>
                  <Typography component='span' fontSize='12px' color='primary'>
                    25 Abril 2024
                  </Typography>
                  - 7.00 PM - 11.00 PM
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

export default UpcomingEvents;
