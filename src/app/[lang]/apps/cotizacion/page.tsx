import * as React from "react";
import NextLink from "next/link";
import RequireAuth from "@/modules/Authentication/RequireAuth";
import Quotes from "@/modules/Apps/Quotes";

export default async function Page() {
  return (
    <RequireAuth>
      {/* Breadcrumb */}
      <div className='breadcrumb-card'>
        <h5>Lista de Cotizaciones</h5>

        <ul className='breadcrumb'>
          <li>
            <NextLink href='/apps/cotizacion'>
              <i className='material-symbols-outlined'>home</i>
              Panel de Control
            </NextLink>
          </li>
          <li>Aplicaciones</li>
          <li>Lista de Cotizaciones</li>
        </ul>
      </div>

      <Quotes />
    </RequireAuth>
  );
}
