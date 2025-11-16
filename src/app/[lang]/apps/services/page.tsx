import * as React from "react";
import NextLink from "next/link";
import RequireAuth from "@/modules/Authentication/RequireAuth";
import Services from "@/modules/Apps/Services";

export default async function Page() {
  return (
    <RequireAuth>
      {/* Breadcrumb */}
      <div className='breadcrumb-card'>
        <h5>Lista de Servicios</h5>

        <ul className='breadcrumb'>
          <li>
            <NextLink href='/apps/services'>
              <i className='material-symbols-outlined'>home</i>
              Panel de Control
            </NextLink>
          </li>
          <li>Aplicaciones</li>
          <li>Lista de Servicios</li>
        </ul>
      </div>

      <Services />
    </RequireAuth>
  );
}
