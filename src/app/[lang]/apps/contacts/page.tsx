import * as React from "react";
import NextLink from "next/link";
import Contacts from "@/components/Apps/Contacts";
import RequireAuth from "@/components/Authentication/RequireAuth";

export default function Page() {
  return (
    <RequireAuth>
      {/* Breadcrumb */}
      <div className='breadcrumb-card'>
        <h5>Contactos de Clientes</h5>

        <ul className='breadcrumb'>
          <li>
            <NextLink href='/apps/to-do-list'>
              <i className='material-symbols-outlined'>home</i>
              Panel de Control
            </NextLink>
          </li>
          <li>Aplicaciones</li>
          <li>Contactos</li>
        </ul>
      </div>

      <Contacts />
    </RequireAuth>
  );
}
