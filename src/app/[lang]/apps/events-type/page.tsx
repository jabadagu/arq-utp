import * as React from "react";
import NextLink from "next/link";
import RequireAuth from "@/modules/Authentication/RequireAuth";
import EventsType from "@/modules/Apps/Events-Type";

export default async function Page() {
  return (
    <RequireAuth>
      {/* Breadcrumb */}
      <div className='breadcrumb-card'>
        <h5>Lista de Tipos de Eventos</h5>

        <ul className='breadcrumb'>
          <li>
            <NextLink href='/apps/events-type'>
              <i className='material-symbols-outlined'>home</i>
              Panel de Control
            </NextLink>
          </li>
          <li>Aplicaciones</li>
          <li>Lista de Tipos de Eventos</li>
        </ul>
      </div>

      <EventsType />
    </RequireAuth>
  );
}
