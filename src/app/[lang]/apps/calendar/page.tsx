import * as React from "react";
import NextLink from "next/link";
import Grid from "@mui/material/Grid";
import WorkingSchedule from "@/modules/Apps/Calendar/WorkingSchedule";
import FullCalendarDemo from "@/modules/Apps/Calendar/FullCalendarDemo";
import RequireAuth from "@/modules/Authentication/RequireAuth";

export default function Page() {
  return (
    <RequireAuth>
      {/* Breadcrumb */}
      <div className='breadcrumb-card'>
        <h5>Calendario de Eventos</h5>

        <ul className='breadcrumb'>
          <li>
            <NextLink href='/apps/categories'>
              <i className='material-symbols-outlined'>home</i>
              Panel de Control
            </NextLink>
          </li>
          <li>Aplicaciones</li>
          <li>Calendario</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <FullCalendarDemo />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <WorkingSchedule />
        </Grid>
      </Grid>
    </RequireAuth>
  );
}
